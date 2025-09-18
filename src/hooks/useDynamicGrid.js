import { useState } from "react";



const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
const widths = { lg: 2, md: 3, sm: 6, xs: 4, xxs: 2 };

function generateInitialLayouts(count) {
    const times = Array.from({ length: count });
    return Object.keys(breakpoints).reduce((memo, bp) => {
        const width = widths[bp];
        const col = cols[bp];
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

export function useDynamicGrid(initialCount = 3) {
    // Define breakpoints, cols, widths inside the hook


    const [layouts, setLayouts] = useState(() => generateInitialLayouts(initialCount));
    const [newCounter, setNewCounter] = useState(0);



    const addItem = () => {
        const id = "n" + newCounter;
        const newItem = Object.keys(breakpoints).reduce((acc, bp) => {
            const col = cols[bp];
            const width = widths[bp];
            acc[bp] = [
                ...(layouts[bp] || []),
                { i: id, x: ((layouts[bp]?.length || 0) * width) % col, y: Infinity, w: 2, h: 2, minW: 2 },
            ];
            return acc;
        }, {});

        setLayouts((prev) => ({ ...prev, ...newItem }));
        setNewCounter((prev) => prev + 1);
    };

    const removeItem = (i) => {
        setLayouts((prev) => {
            const updated = {};
            Object.keys(prev).forEach((bp) => {
                updated[bp] = prev[bp].filter((item) => item.i !== i);
            });
            return updated;
        });
    };

    const updateLayouts = (_, allLayouts) => {
        setLayouts(allLayouts);
    };

    const allItems = Object.values(layouts)
        .flat()
        .reduce((acc, item) => {
            if (!acc.find((i) => i.i === item.i)) acc.push(item);
            return acc;
        }, []);

    return { layouts, allItems, addItem, removeItem, updateLayouts, breakpoints, cols };
}