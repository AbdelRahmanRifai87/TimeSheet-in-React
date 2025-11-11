// import { useState } from "react";
// import type { Layouts, Layout } from "react-grid-layout";
// import { getFromLS, saveToLS } from "../utils/helpers";
// import type { Breakpoints, DataLabel } from "../Types/Widgets";
// import type { ResizeHandle } from "../Types/Widgets";

// const SIZES: Record<
//   DataLabel,
//   { w: number; h: number; minW: number; minH: number; maxH?: number }
// > = {
//   alerts: { w: 5, h: 6, minW: 5, minH: 4 },
//   blockouts: { w: 5, h: 8, minW: 4, minH: 4 },
// };

// // Blockouts
// const blockoutsData = [
//   {
//     id: "1",
//     user: "John Doe",
//     from: "2025-09-21",
//     to: "2025-09-22",
//     subtext: "Requested for a personal appointment.",
//   },
//   {
//     id: "2",
//     user: "Jane Smith",
//     from: "2025-09-25",
//     to: "2025-09-26",
//     subtext: "Blockout for a family vacation.",
//   },
//   {
//     id: "3",
//     user: "Peter Jones",
//     from: "2025-09-28",
//     to: "2025-10-01",
//     subtext: "Needs the day off for a doctor's visit.",
//   },
//   {
//     id: "4",
//     user: "Mary Lee",
//     from: "2025-10-02",
//     to: "2025-10-03",
//     subtext: "Personal day request.",
//   },
//   {
//     id: "5",
//     user: "David Chen",
//     from: "2025-10-05",
//     to: "2025-10-07",
//     subtext: "Requested to attend a conference.",
//   },
// ];

// // Alerts
// const alertsData = [
//   {
//     id: "1",
//     title: "License expired",
//     message: "Security license expired for John Doe",
//     severity: "high" as const,
//     img: "person.png",
//   },
//   {
//     id: "2",
//     title: "Contractor expiring soon",
//     message: "License for contractor Jane Smith will expire",
//     severity: "medium" as const,
//     img: "person.png",
//   },
//   {
//     id: "3",
//     title: "Upcoming training",
//     message: "Mandatory safety training for all staff on October 10th",
//     severity: "low" as const,
//     img: null,
//   },
//   {
//     id: "4",
//     title: "System update scheduled",
//     message: "System maintenance scheduled for 2 AM tonight",
//     severity: "medium" as const,
//     img: null,
//   },
//   {
//     id: "5",
//     title: "Equipment check overdue",
//     message: "Fire extinguisher check on floor 3 is overdue",
//     severity: "high" as const,
//     img: null,
//   },
// ];

// // Reports
// const reportsData = [
//   {
//     id: "1",
//     title: "Safety Audit Report",
//     time: "2025-09-10",
//     desc: "Detailed report on the Q3 safety audit findings.",
//   },
//   {
//     id: "2",
//     title: "Incident Report",
//     time: "2025-09-18",
//     desc: "Report on the minor incident that occurred in the server room.",
//   },
//   {
//     id: "3",
//     title: "Monthly Performance Review",
//     time: "2025-09-20",
//     desc: "Summary of team performance for September.",
//   },
//   {
//     id: "4",
//     title: "Building Maintenance Checklist",
//     time: "2025-09-21",
//     desc: "Checklist of completed and pending building maintenance tasks.",
//   },
//   {
//     id: "5",
//     title: "New Employee Onboarding",
//     time: "2025-09-22",
//     desc: "Onboarding progress and status for new hires this month.",
//   },
// ];

// const TITLES: Record<DataLabel, string> = {
//   alerts: "Staff License & Qualification Alerts",
//   blockouts: "Team Blockouts",
// };

// export interface DashboardItem extends Layout {
//   label: string;
//   data: any[];
//   title?: string;
//   resizeHandles?: ResizeHandle[];
// }

// export const datasets: { label: DashboardItem["label"]; data: any[] }[] = [
//   { label: "alerts", data: alertsData },
//   { label: "blockouts", data: blockoutsData },
// ];

// const availableHandles: ResizeHandle[] = [
//   "s",
//   "w",
//   "e",
//   "n",
//   "sw",
//   "nw",
//   "se",
//   "ne",
// ];

// const breakpoints: Breakpoints = {
//   xlg: 1400,
//   lg: 1200,
//   md: 996,
//   sm: 768,
//   xs: 480,
//   xxs: 0,
// };
// const cols: Breakpoints = { xlg: 14, lg: 6, md: 10, sm: 6, xs: 4, xxs: 2 };
// const widths: Breakpoints = { xlg: 2, lg: 2, md: 3, sm: 6, xs: 4, xxs: 2 };

// // function generateInitialLayouts(count: number): Layouts {
// //     const times = Array.from({ length: count });
// //     return Object.keys(breakpoints).reduce((memo: Layouts, bp: string) => {
// //         const width = widths[bp as keyof Breakpoints];
// //         const col = cols[bp as keyof Breakpoints];
// //         memo[bp] = times.map((_, i) => ({
// //             i: i.toString(),
// //             x: (i * width) % col,
// //             y: 0,
// //             w: 4,
// //             h: 2,
// //             minW: 1
// //         }));
// //         return memo;
// //     }, {});
// // }

// function generateInitialLayouts(count: number): Layouts {
//   const times = Array.from({ length: count });

//   return Object.keys(breakpoints).reduce((memo: Layouts, bp: string) => {
//     const width = widths[bp as keyof Breakpoints];
//     const col = cols[bp as keyof Breakpoints];
//     memo[bp] = times.map((_, i) => {
//       const dataset = datasets[i % datasets.length]; // Determine type by index
//       let w = 4,
//         h = 2; // Default width and height
//       let minW = 1,
//         minH = 2,
//         maxH: number | undefined;

//       if (dataset.label === "alerts") {
//         w = 5;
//         h = 6;
//         minW = 5;
//         minH = 4;
//       } else if (dataset.label === "blockouts") {
//         w = 5;
//         h = 8;
//         minW = 5;
//         minH = 4;
//       } else if (dataset.label === "reports") {
//         w = 5;
//         h = 8;
//         minW = 4;
//         minH = 7;
//         maxH = 8;
//       }

//       const layoutItem: Layout = {
//         i: i.toString(),
//         x: (i * width) % col,
//         y: 0,
//         w,
//         h,
//         minW,
//         minH,
//         resizeHandles: availableHandles,
//       };

//       if (maxH !== undefined) {
//         layoutItem.maxH = maxH;
//       }
//       return layoutItem;
//     });
//     return memo;
//   }, {});
// }

// interface DynamicGridHook {
//   layouts: Layouts;
//   allItems: DashboardItem[];
//   addItem: (label: DataLabel) => void;
//   removeItem: (i: string) => void;
//   updateLayouts: (_: Layout[], allLayouts: Layouts) => void;
//   toggleItemHeight: (itemId: string, newH: number) => void; // New function

//   breakpoints: Breakpoints;
//   cols: Breakpoints;
// }
// const LAYOUT_STORAGE_KEY = "my_dashboard_layouts";
// const ITEMS_STORAGE_KEY = "my_dashboard_items"; // NEW

// type ItemMeta = { label: DataLabel; data: any[]; title?: string };
// type ItemsMap = Record<string, ItemMeta>;

// export function useDynamicGrid(initialCount = 3): DynamicGridHook {
//   // Define breakpoints, cols, widths inside the hook

//   const [layouts, setLayouts] = useState<Layouts>(() => {
//     const savedLayouts = getFromLS(LAYOUT_STORAGE_KEY) as
//       | Layouts
//       | null
//       | undefined;
//     // This check ensures that if an empty or invalid object is loaded, we fall back to the initial layout.
//     if (
//       savedLayouts &&
//       Object.values(savedLayouts).some((arr) => arr.length > 0)
//     ) {
//       return savedLayouts;
//     }
//     return generateInitialLayouts(initialCount);
//   });

//   const [items, setItems] = useState<ItemsMap>(() => {
//     const saved = (getFromLS(ITEMS_STORAGE_KEY) as ItemsMap | null) ?? {};
//     if (Object.keys(saved).length > 0) return saved;

//     // bootstrap items map from current layouts (cycle labels for first run)
//     const firstBp = Object.keys(layouts)[0];
//     const seen: ItemsMap = {};
//     (layouts[firstBp] ?? []).forEach((l, i) => {
//       const label = datasets[i % datasets.length].label as DataLabel;
//       seen[l.i] = {
//         label,
//         data: datasets.find((d) => d.label === label)!.data,
//         title: TITLES[label],
//       };
//     });
//     saveToLS(ITEMS_STORAGE_KEY, seen);
//     return seen;
//   });

//   const [newCounter, setNewCounter] = useState<number>(
//     Object.values(layouts).flat().length
//   );

//   const addItem = (label: DataLabel): void => {
//     const id = "n" + newCounter;
//     const size = SIZES[label];

//     // build per-breakpoint layout item
//     const newLayouts = Object.keys(breakpoints).reduce(
//       (acc: Layouts, bp: string) => {
//         const col = cols[bp as keyof Breakpoints];
//         const width = widths[bp as keyof Breakpoints];

//         const layoutItem: Layout = {
//           i: id,
//           x: ((layouts[bp]?.length || 0) * width) % col,
//           y: Infinity,
//           w: size.w,
//           h: size.h,
//           minW: size.minW,
//           minH: size.minH,
//           resizeHandles: availableHandles,
//         };
//         if (size.maxH !== undefined) layoutItem.maxH = size.maxH;

//         acc[bp] = [...(layouts[bp] || []), layoutItem];
//         return acc;
//       },
//       {}
//     );

//     const updatedLayouts = { ...layouts, ...newLayouts };
//     setLayouts(updatedLayouts);
//     saveToLS(LAYOUT_STORAGE_KEY, updatedLayouts);

//     // persist item meta
//     const updatedItems: ItemsMap = {
//       ...items,
//       [id]: { label, data: datasets.find((d) => d.label === label)!.data },
//     };
//     setItems(updatedItems);
//     saveToLS(ITEMS_STORAGE_KEY, updatedItems);

//     setNewCounter((prev) => prev + 1);
//   };

//   const toggleItemHeight = (itemId: string, newH: number): void => {
//     const updatedLayouts = Object.keys(layouts).reduce(
//       (acc: Layouts, bp: string) => {
//         acc[bp] = layouts[bp].map((item) => {
//           if (item.i === itemId) {
//             return { ...item, h: newH };
//           }
//           return item;
//         });
//         return acc;
//       },
//       {}
//     );
//     setLayouts(updatedLayouts);
//     saveToLS(LAYOUT_STORAGE_KEY, updatedLayouts);
//   };

//   const removeItem = (i: string): void => {
//     const updated: Layouts = {};
//     Object.keys(layouts).forEach((bp) => {
//       updated[bp] = layouts[bp].filter((item: Layout) => item.i !== i);
//     });
//     setLayouts(updated);
//     saveToLS(LAYOUT_STORAGE_KEY, updated);

//     const { [i]: _, ...rest } = items;
//     setItems(rest);
//     saveToLS(ITEMS_STORAGE_KEY, rest);
//   };

//   const updateLayouts = (_: Layout[], allLayouts: Layouts): void => {
//     setLayouts(allLayouts);
//     saveToLS(LAYOUT_STORAGE_KEY, allLayouts);
//   };

//   // const allItems: DashboardItem[] = Object.values(layouts)
//   //     .flat()
//   //     .reduce<DashboardItem[]>((acc, item, index) => {
//   //         if (!acc.find((i) => i.i === item.i)) {
//   //             const dataset = datasets[index % datasets.length]; // rotate through datasets

//   //             acc.push({ ...item, ...dataset });
//   //         }
//   //         return acc;
//   //     }, []);

//   const allItems: DashboardItem[] = Object.values(layouts)
//     .flat()
//     .reduce<DashboardItem[]>((acc, item) => {
//       if (acc.some((a) => a.i === item.i)) return acc;

//       const meta = items[item.i];
//       // Fallback if meta missing (shouldn’t happen)
//       const label: DataLabel = meta?.label ?? "alerts";
//       const size = SIZES[label];

//       const base: DashboardItem = {
//         ...item,
//         label,
//         data: meta?.data ?? datasets.find((d) => d.label === label)!.data,
//         title: meta?.title ?? TITLES[label],
//         minW: size.minW,
//         minH: size.minH,
//         resizeHandles: availableHandles,
//       };
//       if (size.maxH !== undefined) base.maxH = size.maxH;

//       acc.push(base);
//       return acc;
//     }, []);

//   return {
//     layouts,
//     allItems,
//     toggleItemHeight,
//     addItem,
//     removeItem,
//     updateLayouts,
//     breakpoints,
//     cols,
//   };
// }
// // src/hooks/useDynamicGrid.ts
// // "use client";

// // import type { Layout, Layouts } from "react-grid-layout";
// // import {
// //   useDashboardStore,
// //   selectLayouts,
// //   selectItems,
// //   breakpoints,
// //   cols,
// // } from "../store/dashboardStore";

// // export interface UseDynamicGrid {
// //   layouts: Layouts;
// //   allItems: ReturnType<typeof selectItems>;
// //   addItem: (type: string, options?: { title?: string; data?: any[] }) => string;
// //   removeItem: (id: string) => void;
// //   updateLayouts: (_: Layout[], allLayouts: Layouts) => void;
// //   toggleItemHeight: (id: string, newH: number) => void;
// //   breakpoints: typeof breakpoints;
// //   cols: typeof cols;
// // }

// // export function useDynamicGrid(): UseDynamicGrid {
// //   const layouts = useDashboardStore(selectLayouts);
// //   const allItems = useDashboardStore(selectItems);

// //   const addItem = useDashboardStore((s) => s.addWidget);
// //   const removeItem = useDashboardStore((s) => s.removeWidget);
// //   const setLayouts = useDashboardStore((s) => s.setLayouts);
// //   const toggleItemHeight = useDashboardStore((s) => s.toggleItemHeight);

// //   return {
// //     layouts,
// //     allItems,
// //     addItem: (type, options) => addItem(type, options),
// //     removeItem,
// //     updateLayouts: (_ignored, all) => setLayouts(all),
// //     toggleItemHeight,
// //     breakpoints,
// //     cols,
// //   };
// // }
// src/hooks/useDynamicGrid.ts
import type { Layout, Layouts } from "react-grid-layout";
import {
  useDashboardStore,
  selectItems,
  selectBreakpoints,
  selectCols,
  selectLayouts,
  selectDatasets,
  selectCatalog,
} from "../store/dashboardStore";
import { useMemo } from "react";

export function useDynamicGrid() {
  const layouts = useDashboardStore(selectLayouts);
  const items = useDashboardStore(selectItems);
  const catalog = useDashboardStore(selectCatalog);
  const datasets = useDashboardStore(selectDatasets);
  const breakpoints = useDashboardStore(selectBreakpoints);
  const cols = useDashboardStore(selectCols);

  const addItem = useDashboardStore((s) => s.addWidget);
  const removeItem = useDashboardStore((s) => s.removeWidget);
  const setLayouts = useDashboardStore((s) => s.setLayouts);
  const toggleItemHeight = useDashboardStore((s) => s.toggleItemHeight);

  const updateLayouts = (_: any[], all: any) => setLayouts(all);

  const allItems = useMemo(() => {
    const out: any[] = [];
    const seen = new Set<string>();
    for (const list of Object.values(layouts)) {
      for (const it of list ?? []) {
        if (seen.has(it.i)) continue;
        seen.add(it.i);

        const meta = items[it.i];
        const label = meta?.label ?? "alerts";
        const cat = catalog[label];
        const data = meta?.data ?? datasets[label] ?? [];
        const title = meta?.title ?? cat?.title ?? label;

        out.push({
          ...it,
          label,
          title,
          data,
          resizeHandles: cat?.resizeHandles,
          minW: cat?.defaultSize.minW ?? it.minW,
          minH: cat?.defaultSize.minH ?? it.minH,
          ...(cat?.defaultSize.maxH ? { maxH: cat.defaultSize.maxH } : {}),
        });
      }
    }
    return out;
  }, [layouts, items, catalog, datasets]);

  return {
    layouts,
    allItems,
    addItem, // (label: DataLabel, opts?) => id
    removeItem, // (id: string) => void
    updateLayouts, // (_: Layout[], allLayouts: Layouts) => void
    toggleItemHeight, // (id, newH) => void
    breakpoints,
    cols,
  };
}
