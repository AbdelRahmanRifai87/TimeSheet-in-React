// src/store/dashboardData.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Rows = any[];

export const useDashboardData = create(
  persist<{
    alerts: Rows;
    blockouts: Rows;
    dataByType: Record<string, Rows>;
    setAlerts: (rows: Rows) => void;
    setBlockouts: (rows: Rows) => void;
    setData: (type: string, rows: Rows) => void;
  }>(
    (set) => ({
      alerts: [],
      blockouts: [],
      dataByType: {},
      setAlerts: (rows) => set({ alerts: rows }),
      setBlockouts: (rows) => set({ blockouts: rows }),
      setData: (type, rows) =>
        set((s) => ({ dataByType: { ...s.dataByType, [type]: rows } })),
    }),
    { name: "dashboard-data", storage: createJSONStorage(() => localStorage) }
  )
);
