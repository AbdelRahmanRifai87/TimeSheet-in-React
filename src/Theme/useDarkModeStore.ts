import { create } from "zustand";

type Theme = "light" | "dark" | "night" | "system";

interface ThemeState {
  theme: Theme; // user preference
  effectiveTheme: "light" | "dark" | "night"; // actual applied theme
  setTheme: (theme: Theme) => void;
  // cycleTheme: () => void;
}

export const useDarkModeStore = create<ThemeState>((set, get) => {
  // Load saved theme or fallback to "system"
  const savedTheme = (localStorage.getItem("theme") as Theme) || "system";

  // Detect system preference
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const applyTheme = (theme: Theme) => {
    let applied: "light" | "dark" | "night" =
      theme === "system"
        ? getSystemTheme()
        : theme === "night"
        ? "night"
        : theme;

    // Remove all classes first
    document.documentElement.classList.remove("light", "dark", "night");
    document.documentElement.classList.add(applied);

    return applied;
  };

  return {
    theme: savedTheme,
    effectiveTheme: applyTheme(savedTheme),

    setTheme: (theme) => {
      localStorage.setItem("theme", theme);
      const applied = applyTheme(theme);
      set({ theme, effectiveTheme: applied });
    },

    // cycleTheme: () => {
    //   const order: Theme[] = ["light", "dark", "night", "system"];
    //   const current = get().theme;
    //   const next = order[(order.indexOf(current) + 1) % order.length];
    //   get().setTheme(next);
    // },
  };
});

// Listen for system theme changes if user selected "system"
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    const { theme, setTheme } = useDarkModeStore.getState();
    if (theme === "system") setTheme("system"); // re-apply system theme
  });
