// stores/useThemeStore.ts
import { create } from "zustand";

type Theme = "light" | "dark" | "night" | "system";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "system",
  setTheme: (theme) => set({ theme }),
  cycleTheme: () => {
    const order: Theme[] = ["light", "dark", "night", "system"];
    const current = get().theme;
    const next = order[(order.indexOf(current) + 1) % order.length];
    set({ theme: next });
  },
}));
