import { Responsive, WidthProvider } from "react-grid-layout";
import Widget from "./Widget";
import { DataList } from "../DataList";
import type { Layouts, Layout } from "react-grid-layout";

import type { DashboardItem } from "../../hooks/useDynamicGrid";



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
}

export default function WidgetsGridLayout({
    layouts,
    allItems,
    removeItem,
    updateLayouts,
    breakpoints,
    cols,
}: WidgetsGridLayoutProps) {

    console.log(layouts);

    return (
        <div style={{}}>

            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={breakpoints}
                cols={cols}
                rowHeight={30}
                onLayoutChange={updateLayouts}
                isResizable
                isDraggable
                draggableHandle=".grabbable"
            >
                {allItems.map((item) => (
                    <div key={item.i}>
                        <Widget title={`${item.label}`} onRemove={() => removeItem(item.i)}>
                            {/* Render the correct list depending on the label */}

                            <DataList label={item.label} data={item.data} />

                        </Widget>
                    </div>

                ))}
            </ResponsiveGridLayout>
        </div>
    );
}