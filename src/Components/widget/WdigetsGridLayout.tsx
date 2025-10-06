import { Responsive, WidthProvider } from "react-grid-layout";
import Widget from "./Widget";
import { DataList } from "../DataList";
import type { Layouts, Layout } from "react-grid-layout";

import type { DashboardItem } from "../../hooks/useDynamicGrid";
import { useEffect, useRef, useState } from "react";
import { useDarkModeStore } from "../../Theme/useDarkModeStore";

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
}

export default function WidgetsGridLayout({
  layouts,
  allItems,
  removeItem,
  updateLayouts,
  breakpoints,
  cols,
  toggleItemHeight,
  isDraggingOrResizing,
}: WidgetsGridLayoutProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");

  const gridRef = useRef<HTMLDivElement>(null);

  const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
  const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

  useEffect(() => {
    const handleResize = () => {
      if (gridRef.current) {
        const width = gridRef.current.offsetWidth;
        setContainerWidth(width);

        // Dynamically determine the current breakpoint
        let newBreakpoint = "xxs";
        if (breakpoints.xlg && width >= breakpoints.xlg) {
          newBreakpoint = "xlg";
        } else if (width >= breakpoints.lg) {
          newBreakpoint = "lg";
        } else if (width >= breakpoints.md) {
          newBreakpoint = "md";
        } else if (width >= breakpoints.sm) {
          newBreakpoint = "sm";
        } else if (width >= breakpoints.xs) {
          newBreakpoint = "xs";
        }
        setCurrentBreakpoint(newBreakpoint);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  const colWidth = (containerWidth - 17) / cols[currentBreakpoint];

  return (
    <div ref={gridRef}>
      <ResponsiveGridLayout
        className={`layout
  ${isDraggingOrResizing ? "show-grid" : ""}
  ${isDraggingOrResizing && isDarkMode ? "darkmode" : ""}`}
        layouts={layouts}
        breakpoints={breakpoints}
        cols={cols}
        rowHeight={30}
        onLayoutChange={updateLayouts}
        isResizable={isDraggingOrResizing}
        isDraggable={isDraggingOrResizing}
        draggableHandle=".grabbable"
        style={
          {
            "--col-width": `${colWidth}px`,
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
