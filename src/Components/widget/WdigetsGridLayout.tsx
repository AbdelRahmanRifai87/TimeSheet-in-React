import { Responsive, WidthProvider } from "react-grid-layout";
import Widget from "./Widget";
import { DataList } from "../DataList";
import type { Layouts, Layout } from "react-grid-layout";

import type { DashboardItem } from "../../hooks/useDynamicGrid";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDarkModeStore } from "../../Theme/useDarkModeStore";
import GridOverlay from "./GridOverlay";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface Breakpoints {
  [key: string]: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
  xxs: number;
}

interface WidgetsGridLayoutProps {
  layouts: Layouts;
  allItems: DashboardItem[];
  removeItem: (i: string) => void;
  updateLayouts: (_: Layout[], allLayouts: Layouts) => void;
  breakpoints: Breakpoints;
  cols: Breakpoints;
  isDraggingOrResizing: boolean;
  toggleItemHeight: (itemId: string, newH: number) => void;
  theme: "light" | "dark" | "night";
}

const ROW_HEIGHT = 30;
const MARGIN_X = 10;
const MARGIN_Y = 10;
const PADDING_X = 0;
const PADDING_Y = 10;

export default function WidgetsGridLayout({
  layouts,
  allItems,
  removeItem,
  updateLayouts,
  breakpoints,
  cols,
  toggleItemHeight,
  isDraggingOrResizing,
  theme,
}: WidgetsGridLayoutProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  // const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");
  const [currentCols, setCurrentCols] = useState(12); // Initialize with a default value
  const [maxLayoutRows, setMaxLayoutRows] = useState(1);

  // const gridRef = useRef<HTMLDivElement>(null);

  const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
  const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

  const calculatedDimensions = useMemo(() => {
    // Use containerWidth as provided by RGL (via onWidthChange)
    const effectiveContainerWidth = containerWidth;

    // CRITICAL: Use Math.floor for pixel-perfect alignment
    const totalPaddingAndMarginX = 2 * PADDING_X + MARGIN_X * (currentCols - 1);

    const totalContentWidth =
      effectiveContainerWidth - PADDING_X * 2 - MARGIN_X * (currentCols - 1);

    const rawUnitWidth = currentCols > 0 ? totalContentWidth / currentCols : 0;

    // Use Math.floor to match RGL's typical internal rounding
    const calculatedUnitWidth = Math.round(rawUnitWidth);

    // Calculate the total height of the RGL container
    const totalLayoutHeight =
      maxLayoutRows * (ROW_HEIGHT + MARGIN_Y) - MARGIN_Y;

    const cssColWidth = calculatedUnitWidth > 0 ? calculatedUnitWidth : 0;

    return {
      unitWidth: calculatedUnitWidth, // This is the corrected value
      totalLayoutHeight,
      cssColWidth: calculatedUnitWidth > 0 ? calculatedUnitWidth : 0,
    };
  }, [containerWidth, currentCols, maxLayoutRows]);

  const { unitWidth, totalLayoutHeight, cssColWidth } = calculatedDimensions;

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (gridRef.current) {
  //       const width = gridRef.current.offsetWidth;
  //       setContainerWidth(width);

  //       // Dynamically determine the current breakpoint
  //       let newBreakpoint = "xxs";
  //       let numCols = cols.xxs;
  //       if (breakpoints.xlg && width >= breakpoints.xlg) {
  //         newBreakpoint = "xlg";
  //         numCols = cols.xlg;
  //       } else if (width >= breakpoints.lg) {
  //         newBreakpoint = "lg";
  //         numCols = cols.lg;
  //       } else if (width >= breakpoints.md) {
  //         newBreakpoint = "md";
  //         numCols = cols.md;
  //       } else if (width >= breakpoints.sm) {
  //         newBreakpoint = "sm";
  //         numCols = cols.sm;
  //       } else if (width >= breakpoints.xs) {
  //         newBreakpoint = "xs";
  //         numCols = cols.xs;
  //       }
  //       setCurrentBreakpoint(newBreakpoint);
  //       setCurrentCols(numCols);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize(); // Initial call
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [breakpoints, cols]);

  // const colWidth = (containerWidth - 17) / currentCols;

  const handleLayoutChange = (layout: Layout[], allLayouts: Layouts) => {
    const maxH = layout.reduce(
      (max, item) => Math.max(max, item.y + item.h),
      0
    );
    setMaxLayoutRows(Math.max(1, maxH));
    updateLayouts(layout, allLayouts);
  };
  const handleWidthChange = (
    width: number,
    margin: [number, number], // RGL passes this, but you can ignore it
    cols: number,
    containerPadding: [number, number] // RGL passes this, but you can ignore it
  ) => {
    // Use the RGL-provided width and column count
    setContainerWidth(width);
    setCurrentCols(cols);
  };
  const totalPaddingAndMarginX = 2 * PADDING_X + MARGIN_X * (currentCols - 1);

  // const unitWidth =
  //   currentCols > 0
  //     ? (containerWidth - totalPaddingAndMarginX) / currentCols
  //     : 0;

  // // The total height of the RGL container (excluding bottom padding)
  // const totalLayoutHeight = maxLayoutRows * (ROW_HEIGHT + MARGIN_Y) - MARGIN_Y;

  return (
    <div
      // ref={gridRef}
      style={{
        position: "relative",
        minHeight: `${totalLayoutHeight + PADDING_Y}px`,
      }}
    >
      <GridOverlay
        isVisible={isDraggingOrResizing}
        unitWidth={unitWidth} // The width of the content area of one column
        cols={currentCols}
        rowHeight={ROW_HEIGHT} // 30px
        margin={MARGIN_Y} // 10px
        paddingTop={PADDING_Y} // 10px
        maxRows={maxLayoutRows}
      />
      <ResponsiveGridLayout
        className={`layout
  ${isDraggingOrResizing ? "show-grid" : ""}
  ${isDraggingOrResizing && isDarkMode ? "darkmode" : ""}`}
        onWidthChange={handleWidthChange}
        layouts={layouts}
        breakpoints={breakpoints}
        cols={cols}
        rowHeight={ROW_HEIGHT}
        onLayoutChange={handleLayoutChange}
        isResizable={isDraggingOrResizing}
        isDraggable={isDraggingOrResizing}
        draggableHandle=".grabbable"
        margin={[MARGIN_X, MARGIN_Y]} // [10, 10]
        containerPadding={[PADDING_X, PADDING_Y]} // [0, 10]
        style={
          {
            // Use the correct, calculated unit width for your CSS variable
            "--col-width": `${cssColWidth}px`,
            borderRadius: "5px",
          } as React.CSSProperties
        }
      >
        {allItems.map((item) => (
          <div key={item.i}>
            <Widget
              isDraggingOrResizing={isDraggingOrResizing}
              // still passed down if Widget needs it
              title={`${item.label}`}
              onRemove={() => removeItem(item.i)}
              currentHeight={item.h}
              onToggleHeight={(newH: number) => toggleItemHeight(item.i, newH)}
            >
              <DataList label={item.label} data={item.data} />
            </Widget>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
