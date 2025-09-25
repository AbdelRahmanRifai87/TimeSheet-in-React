import { Responsive, WidthProvider } from "react-grid-layout";
import Widget from "./Widget";
import { DataList } from "../DataList";
import type { Layouts, Layout } from "react-grid-layout";

import type { DashboardItem } from "../../hooks/useDynamicGrid";
import { useEffect, useRef, useState } from "react";



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
    isDarkMode: boolean
    isDraggingOrResizing: boolean
    toggleItemHeight: (itemId: string, newH: number) => void; // New prop

}

export default function WidgetsGridLayout({
    layouts,
    allItems,
    removeItem,
    updateLayouts,
    breakpoints,
    cols,
    isDarkMode,
    toggleItemHeight,
    isDraggingOrResizing

}: WidgetsGridLayoutProps) {

    const [containerWidth, setContainerWidth] = useState(0);
    const [currentBreakpoint, setCurrentBreakpoint] = useState('lg');

    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (gridRef.current) {
                const width = gridRef.current.offsetWidth;
                console.log(gridRef.current)
                setContainerWidth(width);

                // Dynamically determine the current breakpoint
                let newBreakpoint = 'xxs';
                if (width >= breakpoints.xlg) {
                    newBreakpoint = 'xlg';
                }
                else if (width >= breakpoints.lg) {
                    newBreakpoint = 'lg';
                } else if (width >= breakpoints.md) {
                    newBreakpoint = 'md';
                } else if (width >= breakpoints.sm) {
                    newBreakpoint = 'sm';
                } else if (width >= breakpoints.xs) {
                    newBreakpoint = 'xs';
                }
                setCurrentBreakpoint(newBreakpoint);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoints]);

    const colWidth = (containerWidth - 17) / cols[currentBreakpoint];
    console.log("col width:", colWidth, "container width: ", containerWidth, "nmb of columns :", cols[currentBreakpoint])


    return (

        <div ref={gridRef} >
            <ResponsiveGridLayout
                className={`layout ${isDraggingOrResizing ? 'show-grid' : ''}`}
                layouts={layouts}
                breakpoints={breakpoints}
                cols={cols}
                rowHeight={30}
                onLayoutChange={updateLayouts}
                isResizable={isDraggingOrResizing}
                isDraggable={isDraggingOrResizing}
                draggableHandle=".grabbable"
                style={{ '--col-width': `${colWidth}px`, borderRadius: "5px" } as React.CSSProperties}
            >
                {allItems.map((item) => (
                    <div key={item.i}>
                        <Widget isDraggingOrResizing={isDraggingOrResizing} isDarkMode={isDarkMode} title={`${item.label}`} onRemove={() => removeItem(item.i)} currentHeight={item.h} onToggleHeight={(newH: number) => toggleItemHeight(item.i, newH)}>
                            {/* Render the correct list depending on the label */}

                            <DataList isDarkMode={isDarkMode} label={item.label} data={item.data} />

                        </Widget>
                    </div>

                ))}
            </ResponsiveGridLayout>
        </div>

    )
}