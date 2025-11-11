// src/store/dashboardStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Layout, Layouts } from "react-grid-layout";
import type {
  Breakpoints,
  DataLabel,
  ItemsMap,
  WidgetCatalogEntry,
  WidgetSize,
  DashboardItem,
  ResizeHandle,
} from "../Types/Widgets";
import { Phone } from "lucide-react";

const LAYOUT_STORAGE_KEY = "my_dashboard_layouts_v2";
const STORE_STORAGE_KEY = "my_dashboard_store_v2";

const defaultBreakpoints: Breakpoints = {
  xlg: 1400,
  lg: 1200,
  md: 996,
  sm: 768,
  xs: 480,
  xxs: 0,
};

// number of columns per breakpoint
const defaultCols: Breakpoints = {
  xlg: 15,
  lg: 12,
  md: 10,
  sm: 6,
  xs: 4,
  xxs: 2,
};

// helper for initial placement (used only for seeding/adding)
const widths: Breakpoints = { xlg: 2, lg: 2, md: 3, sm: 6, xs: 4, xxs: 2 };

const defaultHandles: ResizeHandle[] = [
  "s",
  "w",
  "e",
  "n",
  "sw",
  "nw",
  "se",
  "ne",
];

type Catalog = Record<DataLabel, WidgetCatalogEntry>;

export interface DashboardState {
  // config
  breakpoints: Breakpoints;
  cols: Breakpoints;
  resizeHandles: ResizeHandle[]; // global default (type may override)

  // catalog of widget types
  catalog: Catalog; // 'alerts' | 'blockouts' | any new label

  // datasets per type (you can also compute or fetch externally)
  datasets: Record<DataLabel, any[]>;

  // persistent layouts & items
  layouts: Layouts;
  items: ItemsMap;

  // simple id counter for new items
  nextId: number;

  /* ---------- Actions ---------- */
  setLayouts: (all: Layouts) => void;

  registerType: (entry: WidgetCatalogEntry, initialData?: any[]) => void;
  setTypeDataset: (label: DataLabel, data: any[]) => void;
  setTypeSize: (label: DataLabel, size: WidgetSize) => void; // optional helper
  setTypeTitle: (label: DataLabel, title: string) => void; // optional helper

  addWidget: (
    label: DataLabel,
    opts?: { title?: string; data?: any[] }
  ) => string;
  removeWidget: (id: string) => void;
  toggleItemHeight: (id: string, newH: number) => void;
}

/* ---------- helpers ---------- */
const ensureLayoutsShape = (
  layouts: Layouts,
  breakpoints: Breakpoints
): Layouts =>
  Object.keys(breakpoints).reduce((acc, bp) => {
    acc[bp] = layouts[bp] ?? [];
    return acc;
  }, {} as Layouts);

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set, get) => ({
      breakpoints: defaultBreakpoints,
      cols: defaultCols,
      resizeHandles: defaultHandles,

      // default catalog (you can start empty and call registerType from app bootstrap)
      catalog: {
        alerts: {
          label: "alerts",
          title: "Staff License & Qualification Alerts",
          defaultSize: { w: 5, h: 6, minW: 5, minH: 4 },
        },
        blockouts: {
          label: "blockouts",
          title: "Blockouts",
          defaultSize: { w: 6, h: 8, minW: 6, minH: 4 },
        },
        resourceAlerts: {
          // <-- NEW
          label: "resourceAlerts",
          title: "Resource Alerts",
          defaultSize: { w: 5, h: 6, minW: 5, minH: 4 },
          // resizeHandles?: ["s","e","se"] // optional per-type override
        },
        keyDispatch: {
          label: "keyDispatch",
          title: "Key Dispatch",
          defaultSize: { w: 5, h: 6, minW: 5, minH: 4 },
        },
        welfare: {
          label: "welfare Check Escalation",
          title: "Welfare Checks Escalations",
          defaultSize: { w: 5, h: 6, minW: 5, minH: 4 },
        },
        accShift: {
          label: "accShift",
          title: "Accepted Shifts",
          defaultSize: { w: 5, h: 6, minW: 5, minH: 4 },
        },
        decShift: {
          label: "decShift",
          title: "Declined Shifts",
          defaultSize: { w: 5, h: 6, minW: 5, minH: 4 },
        },
        unaShift: {
          label: "unaShift",
          title: "Unaccepted Shifts",
          defaultSize: { w: 5, h: 6, minW: 5, minH: 4 },
        },
        compliance: {
          label: "compliance",
          title: "Submitted Compliances",
          defaultSize: { w: 10, h: 7, minW: 8, minH: 6 },
        },
      },

      datasets: {
        compliance: [
          {
            id: "1",
            staffName: "khalid",
            ComplianceName: "VC",
            LicenseReference: "959595263",
            expDate: "Feb 23 2026",
            complianceType: "Security License",
            verify: 0,
          },
          {
            id: "1",
            staffName: "khalid",
            ComplianceName: "VC",
            LicenseReference: "959595263",
            expDate: "Feb 23 2026",
            complianceType: "Security License",
            verify: 0,
          },
          {
            id: "1",
            staffName: "khalid",
            ComplianceName: "VC",
            LicenseReference: "959595263",
            expDate: "Feb 23 2026",
            complianceType: "Security License",
            verify: 0,
          },
          {
            id: "1",
            staffName: "khalid",
            ComplianceName: "VC",
            LicenseReference: "959595263",
            expDate: "Feb 23 2026",
            complianceType: "Security License",
            verify: 0,
          },
          {
            id: "1",
            staffName: "khalid",
            ComplianceName: "VC",
            LicenseReference: "959595263",
            expDate: "Feb 23 2026",
            complianceType: "Security License",
            verify: 0,
          },
          {
            id: "1",
            staffName: "khalid",
            ComplianceName: "VC",
            LicenseReference: "959595263",
            expDate: "Feb 23 2026",
            complianceType: "Security License",
            verify: 1,
          },
          {
            id: "1",
            staffName: "khalid",
            ComplianceName: "VC",
            LicenseReference: "959595263",
            expDate: "Feb 23 2026",
            complianceType: "Security License",
            verify: 1,
          },
          {
            id: "1",
            staffName: "khalid",
            ComplianceName: "VC",
            LicenseReference: "959595263",
            expDate: "Feb 23 2026",
            complianceType: "Security License",
            verify: 1,
          },
          {
            id: "1",
            staffName: "khalid",
            ComplianceName: "VC",
            LicenseReference: "959595263",
            expDate: "Feb 23 2026",
            complianceType: "Security License",
            verify: 0,
          },
          {
            id: "1",
            staffName: "khalid",
            ComplianceName: "VC",
            LicenseReference: "959595263",
            expDate: "Feb 23 2026",
            complianceType: "Security License",
            verify: 0,
          },
          {
            id: "1",
            staffName: "khalid",
            ComplianceName: "VC",
            LicenseReference: "959595263",
            expDate: "Feb 23 2026",
            complianceType: "Security License",
            verify: 1,
          },
          {
            id: "1",
            staffName: "khalid",
            ComplianceName: "VC",
            LicenseReference: "959595263",
            expDate: "Feb 23 2026",
            complianceType: "Security License",
            verify: 1,
          },
        ],
        alerts: [
          {
            type: "staff license",
            id: "1",
            title: "License expired",
            message: "Security license expired for John Doe",
            severity: "high",
            img: "person.png",
          },
          {
            type: "staff license",
            id: "1",
            title: "License expired",
            message: "Security license expired for John Doe",
            severity: "high",
            img: "person.png",
          },
          {
            type: "staff license",
            id: "1",
            title: "License expired",
            message: "Security license expired for John Doe",
            severity: "high",
            img: "person.png",
          },
          {
            type: "staff license",
            id: "1",
            title: "License expired",
            message: "Security license expired for John Doe",
            severity: "high",
            img: "person.png",
          },
          {
            type: "staff license",
            id: "1",
            title: "License expired",
            message: "Security license expired for John Doe",
            severity: "high",
            img: "person.png",
          },
          {
            type: "staff license",
            id: "1",
            title: "License expired",
            message: "Security license expired for John Doe",
            severity: "high",
            img: "person.png",
          },
          {
            type: "staff license",
            id: "1",
            title: "License expired",
            message: "Security license expired for John Doe",
            severity: "high",
            img: "person.png",
          },
          {
            type: "staff license",
            id: "1",
            title: "License expired",
            message: "Security license expired for John Doe",
            severity: "high",
            img: "person.png",
          },
          {
            type: "staff license",
            id: "1",
            title: "License expired",
            message: "Security license expired for John Doe",
            severity: "high",
            img: "person.png",
          },
          {
            type: "staff license",
            id: "2",
            title: "Contractor expiring soon",
            message: "License for contractor Jane Smith will expire",
            severity: "medium",
            img: "person.png",
          },
        ],
        welfare: [
          {
            id: "1",
            name: "John Doe",
            issue: "Missed welfare check",
            location: "Random Construction Site",
            phone: "123-456-7890",
          },
          {
            id: "1",
            name: "John Doe",
            issue: "Missed welfare check",
            location: "Random Construction Site",
            phone: "123-456-7890",
          },
          {
            id: "1",
            name: "John Doe",
            issue: "Missed welfare check",
            location: "Random Construction Site",
            phone: "123-456-7890",
          },
          {
            id: "1",
            name: "John Doe",
            issue: "Missed welfare check",
            location: "Random Construction Site",
            phone: "123-456-7890",
          },
          {
            id: "1",
            name: "John Doe",
            issue: "Missed welfare check",
            location: "Random Construction Site",
            phone: "123-456-7890",
          },
          {
            id: "2",
            name: "Jane Smith",
            issue: "Missed welfare check",
            location: "Random Construction Site",
            phone: "123-456-7890",
          },
          {
            id: "3",
            name: "John Doe",
            issue: "Missed welfare check",
            location: "Random Construction Site",
            phone: "123-456-7890",
          },
        ],
        resourceAlerts: [
          // <-- NEW (optional)
          {
            type: "resource",
            id: "4",
            title: "Contractor expiring soon",
            message: "License for contractor Jane Smith will expire",
            severity: "medium",
            img: "person.png",
          },
          {
            type: "resource",
            id: "5",
            title: "Upcoming training",
            message: "Mandatory safety training on Oct 10",
            severity: "high",
            img: null,
          },
          {
            type: "resource",
            id: "5",
            title: "Upcoming training",
            message: "Mandatory safety training on Oct 10",
            severity: "medium",
            img: null,
          },
          {
            type: "resource",
            id: "5",
            title: "Upcoming training",
            message: "Mandatory safety training on Oct 10",
            severity: "high",
            img: null,
          },
        ],
        keyDispatch: [
          {
            type: "resource",
            id: "4",
            title: "Contractor expiring soon",
            message: "License for contractor Jane Smith will expire",
            severity: "medium",
            img: "person.png",
          },
          {
            type: "resource",
            id: "5",
            title: "Upcoming training",
            message: "Mandatory safety training on Oct 10",
            severity: "high",
            img: null,
          },
          {
            type: "resource",
            id: "5",
            title: "Upcoming training",
            message: "Mandatory safety training on Oct 10",
            severity: "medium",
            img: null,
          },
          {
            type: "resource",
            id: "5",
            title: "Upcoming training",
            message: "Mandatory safety training on Oct 10",
            severity: "high",
            img: null,
          },
        ],
        blockouts: [
          {
            id: "1",
            user: "John Doe",
            from: "2025/09/21",
            to: "2025/09/22",
            subtext: "Personal appointment.",
          },
          {
            id: "2",
            user: "Jane Smith",
            from: "2025/09/25",
            to: "2025/09/26",
            subtext: "Family vacation.",
          },
        ],
        accShift: [
          {
            id: "1",
            status: "accepted",
            name: "John Doe",
            date: "2025/09/21",
            location: "KFC",
          },
          {
            id: "2",
            status: "accepted",
            name: "Jane Smith",
            date: "2025/09/22",
            location: "KFC",
          },
        ],
        decShift: [
          {
            id: "1",
            status: "declined",
            name: "John Doe",
            date: "2025/09/21",
            location: "KFC",
          },
          {
            id: "2",
            status: "declined",
            name: "Jane Smith",
            date: "2025/09/22",
            location: "KFC",
          },
        ],
        unaShift: [
          {
            id: "1",
            status: "unaccepted",
            name: "John Doe",
            date: "2025/09/21",
            location: "KFC",
          },
          {
            id: "2",
            status: "unaccepted",
            name: "Jane Smith",
            date: "2025/09/22",
            location: "KFC",
          },
        ],
      },

      // start empty; app can seed via addWidget or by migrating your old layouts
      layouts: ensureLayoutsShape({}, defaultBreakpoints),
      items: {},
      nextId: 1,

      /* ---------- Selectors ---------- */

      /* ---------- Actions ---------- */
      setLayouts: (all) => {
        const { breakpoints } = get();
        set({ layouts: ensureLayoutsShape(all, breakpoints) });
      },

      registerType: (entry, initialData) => {
        const { catalog, datasets } = get();
        set({
          catalog: { ...catalog, [entry.label]: entry },
          datasets: initialData
            ? { ...datasets, [entry.label]: initialData }
            : datasets,
        });
      },

      setTypeDataset: (label, data) => {
        const { datasets } = get();
        set({ datasets: { ...datasets, [label]: data } });
      },

      setTypeSize: (label, size) => {
        const { catalog } = get();
        const cur = catalog[label];
        if (!cur) return;
        set({
          catalog: { ...catalog, [label]: { ...cur, defaultSize: size } },
        });
      },

      setTypeTitle: (label, title) => {
        const { catalog } = get();
        const cur = catalog[label];
        if (!cur) return;
        set({ catalog: { ...catalog, [label]: { ...cur, title } } });
      },

      addWidget: (label, opts) => {
        const state = get();
        const id = "n" + state.nextId;

        const cat = state.catalog[label];
        if (!cat) {
          // if type not registered yet, create a minimal entry
          get().registerType({
            label,
            title: label,
            defaultSize: { w: 4, h: 2, minW: 1, minH: 1 },
          });
        }

        const size = get().catalog[label].defaultSize;
        const handles =
          get().catalog[label].resizeHandles ?? get().resizeHandles;

        const newLayouts: Layouts = {};
        for (const bp of Object.keys(state.breakpoints)) {
          const col = state.cols[bp as keyof Breakpoints];
          const width = widths[bp as keyof Breakpoints];

          const arr = state.layouts[bp] ?? [];
          const layoutItem: Layout & { resizeHandles?: ResizeHandle[] } = {
            i: id,
            x: (arr.length * width) % col,
            y: Infinity,
            w: size.w,
            h: size.h,
            minW: size.minW,
            minH: size.minH,
            ...(size.maxH ? { maxH: size.maxH } : {}),
            resizeHandles: handles,
          };

          newLayouts[bp] = [...arr, layoutItem];
        }

        set({
          layouts: { ...state.layouts, ...newLayouts },
          items: {
            ...state.items,
            [id]: {
              label,
              ...(opts?.title ? { title: opts.title } : {}),
              ...(opts?.data ? { data: opts.data } : {}),
            },
          },
          nextId: state.nextId + 1,
        });

        return id;
      },

      removeWidget: (id) => {
        const { layouts, items } = get();
        const updated: Layouts = {};
        for (const bp of Object.keys(layouts)) {
          updated[bp] = (layouts[bp] ?? []).filter((it) => it.i !== id);
        }
        const { [id]: _omit, ...rest } = items;
        set({ layouts: updated, items: rest });
      },

      toggleItemHeight: (id, newH) => {
        const { layouts, breakpoints } = get();
        const updated = Object.fromEntries(
          Object.keys(breakpoints).map((bp) => [
            bp,
            (layouts[bp] ?? []).map((it) =>
              it.i === id ? { ...it, h: newH } : it
            ),
          ])
        ) as Layouts;
        set({ layouts: updated });
      },
    }),
    {
      name: STORE_STORAGE_KEY,
      version: 2, // <-- bump
      storage: createJSONStorage(() => localStorage),
      migrate: (state: any, version) => {
        if (version < 2) {
          state.datasets = state.datasets ?? {};
          if (!state.datasets.resourceAlerts) {
            state.datasets.resourceAlerts = "";
          }
          // also register catalog entry if not present
          state.catalog = state.catalog ?? {};
          if (!state.catalog.resourceAlerts) {
            state.catalog.resourceAlerts = {
              label: "resourceAlerts",
              title: "Resource Alerts",
              defaultSize: { w: 5, h: 6, minW: 5, minH: 4 },
            };
          }
        }
        return state;
      },

      partialize: (state) => ({
        // persist only what you need
        layouts: state.layouts,
        items: state.items,
        nextId: state.nextId,
        catalog: state.catalog,
        datasets: state.datasets,
        breakpoints: state.breakpoints,
        cols: state.cols,
      }),
    }
  )
);

/* ---------- handy selectors ---------- */
export const selectLayouts = (s: DashboardState) => s.layouts;
export const selectItems = (s: DashboardState) => s.items; // <-- add this
export const selectCatalog = (s: DashboardState) => s.catalog;
export const selectDatasets = (s: DashboardState) => s.datasets;
export const selectBreakpoints = (s: DashboardState) => s.breakpoints;
export const selectCols = (s: DashboardState) => s.cols;
