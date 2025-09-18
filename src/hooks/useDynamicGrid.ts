import { useState } from "react";
import type { Layouts, Layout } from "react-grid-layout";

interface Breakpoints {
    [key: string]: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
    xxs: number;
}

const breakpoints: Breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
const cols: Breakpoints = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
const widths: Breakpoints = { lg: 2, md: 3, sm: 6, xs: 4, xxs: 2 };

function generateInitialLayouts(count: number): Layouts {
    const times = Array.from({ length: count });
    return Object.keys(breakpoints).reduce((memo: Layouts, bp: string) => {
        const width = widths[bp as keyof Breakpoints];
        const col = cols[bp as keyof Breakpoints];
        memo[bp] = times.map((_, i) => ({
            i: i.toString(),
            x: (i * width) % col,
            y: 0,
            w: 2,
            h: 2,
            minW: 2
        }));
        return memo;
    }, {});
}

interface DynamicGridHook {
    layouts: Layouts;
    allItems: Layout[];
    addItem: () => void;
    removeItem: (i: string) => void;
    updateLayouts: (_: Layout[], allLayouts: Layouts) => void;
    breakpoints: Breakpoints;
    cols: Breakpoints;
}


export function useDynamicGrid(initialCount = 3): DynamicGridHook {
    // Define breakpoints, cols, widths inside the hook


    const [layouts, setLayouts] = useState<Layouts>(() => generateInitialLayouts(initialCount));
    const [newCounter, setNewCounter] = useState<number>(0);



    const addItem = () => {
        const id = "n" + newCounter;
        const newItem = Object.keys(breakpoints).reduce((acc: Layouts, bp: string) => {
            const col = cols[bp as keyof Breakpoints];
            const width = widths[bp as keyof Breakpoints];
            acc[bp] = [
                ...(layouts[bp] || []),
                { i: id, x: ((layouts[bp]?.length || 0) * width) % col, y: Infinity, w: 2, h: 2, minW: 2 },
            ];
            return acc;
        }, {});

        setLayouts((prev: Layouts) => ({ ...prev, ...newItem }));
        setNewCounter((prev) => prev + 1);
    };

    const removeItem = (i: string) => {
        setLayouts((prev: Layouts) => {
            const updated: Layouts = {};
            Object.keys(prev).forEach((bp) => {
                updated[bp] = prev[bp].filter((item: Layout) => item.i !== i);
            });
            return updated;
        });
    };

    const updateLayouts = (_: Layout[], allLayouts: Layouts) => {
        setLayouts(allLayouts);
    };

    const allItems: Layout[] = Object.values(layouts)
        .flat()
        .reduce<Layout[]>((acc, item) => {
            if (!acc.find((i) => i.i === item.i)) acc.push(item);
            return acc;
        }, []);

    return { layouts, allItems, addItem, removeItem, updateLayouts, breakpoints, cols };
}