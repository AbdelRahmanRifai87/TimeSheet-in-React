import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Tab = { path: string; label: string; closable: boolean };

type RouteTabsState = {
  tabs: Tab[];
  activePath: string; // current pathname
  ensureTab: (tab: Tab) => void;
  setActive: (path: string) => void;
  removeTab: (path: string) => void;
  resetTabs: () => void;
};

const DEFAULT_TAB: Tab = {
  path: "/dashboard",
  label: "Dashboard",
  closable: false,
};

export const useRouteTabsStore = create<RouteTabsState>()(
  persist(
    (set, get) => ({
      tabs: [DEFAULT_TAB],
      activePath: "/dashboard",
      ensureTab: (tab) =>
        set((s) =>
          s.tabs.some((t) => t.path === tab.path)
            ? s
            : { tabs: [...s.tabs, tab] }
        ),
      setActive: (path) => set({ activePath: path }),
      removeTab: (path) =>
        set((s) => {
          // never remove the last tab
          if (s.tabs.length <= 1) return s;
          // don't remove non-closable
          const t = s.tabs.find((x) => x.path === path);
          if (!t || !t.closable) return s;
          return { tabs: s.tabs.filter((x) => x.path !== path) };
        }),
      resetTabs: () =>
        set({ tabs: [DEFAULT_TAB], activePath: DEFAULT_TAB.path }),
    }),
    { name: "securecy.tabs" }
  )
);
