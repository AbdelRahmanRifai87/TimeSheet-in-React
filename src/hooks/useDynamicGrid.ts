import { useState } from "react";
import type { Layouts, Layout } from "react-grid-layout";
import { getFromLS, saveToLS } from "../utils/helpers";

interface Breakpoints {
    [key: string]: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
    xxs: number;

}

// Blockouts
const blockoutsData = [
    { id: "1", user: "John Doe", date: "2025-09-21", subtext: "Requested for a personal appointment." },
    { id: "2", user: "Jane Smith", date: "2025-09-25", subtext: "Blockout for a family vacation." },
    { id: "3", user: "Peter Jones", date: "2025-09-28", subtext: "Needs the day off for a doctor's visit." },
    { id: "4", user: "Mary Lee", date: "2025-10-02", subtext: "Personal day request." },
    { id: "5", user: "David Chen", date: "2025-10-05", subtext: "Requested to attend a conference." },
];

// Alerts
const alertsData = [
    {
        id: "1",
        title: "License expired",
        message: "Security license expired for John Doe",
        severity: "high" as const,
        img: 'person.png'
    },
    {
        id: "2",
        title: "Contractor expiring soon",
        message: "License for contractor Jane Smith will expire",
        severity: "medium" as const,
        img: 'person.png'

    },
    {
        id: "3",
        title: "Upcoming training",
        message: "Mandatory safety training for all staff on October 10th",
        severity: "low" as const,
        img: null

    },
    {
        id: "4",
        title: "System update scheduled",
        message: "System maintenance scheduled for 2 AM tonight",
        severity: "medium" as const,
        img: null

    },
    {
        id: "5",
        title: "Equipment check overdue",
        message: "Fire extinguisher check on floor 3 is overdue",
        severity: "high" as const,
        img: null
    },
];

// Reports
const reportsData = [
    { id: "1", title: "Safety Audit Report", time: "2025-09-10", desc: "Detailed report on the Q3 safety audit findings." },
    { id: "2", title: "Incident Report", time: "2025-09-18", desc: "Report on the minor incident that occurred in the server room." },
    { id: "3", title: "Monthly Performance Review", time: "2025-09-20", desc: "Summary of team performance for September." },
    { id: "4", title: "Building Maintenance Checklist", time: "2025-09-21", desc: "Checklist of completed and pending building maintenance tasks." },
    { id: "5", title: "New Employee Onboarding", time: "2025-09-22", desc: "Onboarding progress and status for new hires this month." },
];

export interface DashboardItem extends Layout {
    label: "alerts" | "blockouts" | "reports";
    data: any[];
}

export const datasets: { label: DashboardItem["label"]; data: any[] }[] = [
    { label: "alerts", data: alertsData },
    { label: "blockouts", data: blockoutsData },
    { label: "reports", data: reportsData },
];

const breakpoints: Breakpoints = { xlg: 1400, lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
const cols: Breakpoints = { xlg: 14, lg: 6, md: 10, sm: 6, xs: 4, xxs: 2 };
const widths: Breakpoints = { xlg: 2, lg: 2, md: 3, sm: 6, xs: 4, xxs: 2 };

// function generateInitialLayouts(count: number): Layouts {
//     const times = Array.from({ length: count });
//     return Object.keys(breakpoints).reduce((memo: Layouts, bp: string) => {
//         const width = widths[bp as keyof Breakpoints];
//         const col = cols[bp as keyof Breakpoints];
//         memo[bp] = times.map((_, i) => ({
//             i: i.toString(),
//             x: (i * width) % col,
//             y: 0,
//             w: 4,
//             h: 2,
//             minW: 1
//         }));
//         return memo;
//     }, {});
// }

function generateInitialLayouts(count: number): Layouts {
    const times = Array.from({ length: count });
    return Object.keys(breakpoints).reduce((memo: Layouts, bp: string) => {
        const width = widths[bp as keyof Breakpoints];
        const col = cols[bp as keyof Breakpoints];
        memo[bp] = times.map((_, i) => {
            const dataset = datasets[i % datasets.length]; // Determine type by index
            let w = 4, h = 2; // Default width and height
            let minW = 1, minH = 2, maxH: number | undefined;

            if (dataset.label === "alerts") {
                w = 5;
                h = 6;
                minW = 5;
                minH = 6;
            } else if (dataset.label === "blockouts") {
                w = 5;
                h = 8;
                minW = 4;
                minH = 8;
                maxH = 9;
            } else if (dataset.label === "reports") {
                w = 5;
                h = 9;
                minW = 4;
                minH = 9;
                maxH = 10;
            }

            const layoutItem: Layout = {
                i: i.toString(),
                x: (i * width) % col,
                y: 0,
                w,
                h,
                minW,
                minH
            };

            if (maxH !== undefined) {
                layoutItem.maxH = maxH;
            }
            return layoutItem;
        });
        return memo;
    }, {});
}

interface DynamicGridHook {
    layouts: Layouts;
    allItems: DashboardItem[];
    addItem: () => void;
    removeItem: (i: string) => void;
    updateLayouts: (_: Layout[], allLayouts: Layouts) => void;
    toggleItemHeight: (itemId: string, newH: number) => void; // New function

    breakpoints: Breakpoints;
    cols: Breakpoints;
}
const LAYOUT_STORAGE_KEY = "my_dashboard_layouts";



export function useDynamicGrid(initialCount = 3): DynamicGridHook {
    // Define breakpoints, cols, widths inside the hook


    const [layouts, setLayouts] = useState<Layouts>(() => {
        const savedLayouts = getFromLS(LAYOUT_STORAGE_KEY) as Layouts | null | undefined;
        // This check ensures that if an empty or invalid object is loaded, we fall back to the initial layout.
        if (savedLayouts && Object.values(savedLayouts).some(arr => arr.length > 0)) {
            return savedLayouts;
        }
        return generateInitialLayouts(initialCount);
    });
    const [newCounter, setNewCounter] = useState<number>(Object.values(layouts).flat().length
    );



    const addItem = (): void => {
        const id = "n" + newCounter;
        const dataset = datasets[newCounter % datasets.length]; // Determine type of new item

        let w = 4, h = 2; // Default width and height
        let minW = 1, minH = 2, maxH: number | undefined;

        if (dataset.label === "alerts") {
            w = 5;
            h = 6;
            minW = 5;
            minH = 6;
        } else if (dataset.label === "blockouts") {
            w = 5;
            h = 8;
            minW = 4;
            minH = 8;
            maxH = 9;
        } else if (dataset.label === "reports") {
            w = 5;
            h = 9;
            minW = 4;
            minH = 9;
            maxH = 10;
        }

        const newItem = Object.keys(breakpoints).reduce((acc: Layouts, bp: string) => {
            const col = cols[bp as keyof Breakpoints];
            const width = widths[bp as keyof Breakpoints];

            const layoutItem: Layout = {
                i: id,
                x: ((layouts[bp]?.length || 0) * width) % col,
                y: Infinity,
                w,
                h,
                minW,
                minH
            };

            if (maxH !== undefined) {
                layoutItem.maxH = maxH;
            }

            acc[bp] = [
                ...(layouts[bp] || []),
                layoutItem,
            ];
            return acc;
        }, {});

        const updatedLayouts = { ...layouts, ...newItem };
        setLayouts(updatedLayouts);
        saveToLS(LAYOUT_STORAGE_KEY, updatedLayouts);
        setNewCounter((prev) => prev + 1);
    };

    const toggleItemHeight = (itemId: string, newH: number): void => {
        const updatedLayouts = Object.keys(layouts).reduce((acc: Layouts, bp: string) => {
            acc[bp] = layouts[bp].map(item => {
                if (item.i === itemId) {
                    return { ...item, h: newH };
                }
                return item;
            });
            return acc;
        }, {});
        setLayouts(updatedLayouts);
        saveToLS(LAYOUT_STORAGE_KEY, updatedLayouts);
    };

    const removeItem = (i: string): void => {
        const updated: Layouts = {};
        Object.keys(layouts).forEach((bp) => {
            updated[bp] = layouts[bp].filter((item: Layout) => item.i !== i);
        });

        setLayouts(updated);
        saveToLS(LAYOUT_STORAGE_KEY, updated);
    };

    const updateLayouts = (_: Layout[], allLayouts: Layouts): void => {
        setLayouts(allLayouts);
        saveToLS(LAYOUT_STORAGE_KEY, allLayouts);
    };

    // const allItems: DashboardItem[] = Object.values(layouts)
    //     .flat()
    //     .reduce<DashboardItem[]>((acc, item, index) => {
    //         if (!acc.find((i) => i.i === item.i)) {
    //             const dataset = datasets[index % datasets.length]; // rotate through datasets

    //             acc.push({ ...item, ...dataset });
    //         }
    //         return acc;
    //     }, []);

    const allItems: DashboardItem[] = Object.values(layouts)
        .flat()
        .reduce<DashboardItem[]>((acc, item, index) => {
            if (!acc.find((i) => i.i === item.i)) {
                const dataset = datasets[index % datasets.length];

                let minW = 1;
                let minH = 2;
                let maxH: number | undefined; // Use a union type to allow 'undefined'

                if (dataset.label === "alerts") {
                    minW = 2;
                    minH = 6;
                    maxH = undefined; // No max height for alerts
                } else if (dataset.label === "blockouts") {
                    minW = 3;
                    minH = 8;
                    maxH = 9; // Example max height for blockouts
                } else if (dataset.label === "reports") {
                    minW = 3;
                    minH = 9;
                    maxH = 10; // Example max height for reports
                }

                // Conditionally add maxH to the object
                const newItem = maxH !== undefined ? { ...item, ...dataset, minW, minH, maxH } : { ...item, ...dataset, minW, minH };

                acc.push(newItem);
            }
            return acc;
        }, []);

    return { layouts, allItems, toggleItemHeight, addItem, removeItem, updateLayouts, breakpoints, cols };
}