import { create } from "zustand";

type Theme = "light" | "dark" | "night" | "system" | "custom";

interface SectionTheme {
  background: string;
  text: string;
  button: string;
}

interface CustomTheme {
  sidebar: SectionTheme;
  topbar: SectionTheme;
  main: SectionTheme;
  widget: SectionTheme;
  globalBackground?: string;
  main1?: string;
}

interface Styles {
  // Topbar
  topbarBg: string;
  topbarText: string;
  topbarBtn: string;
  searchBg: string;
  searchText: string;
  dropdownBg: string;
  dropdownText: string;

  // Sidebar
  sidebarBg: string;
  sidebarText: string;
  sidebarBtn: string;
  sidebarHover: string;

  // Main content
  mainBg: string;
  mainText: string;
  mainBtn: string;
  // Widgets
  widgetBg: string;
  widgetText: string;
  widgetBorder: string;
  widgetHeaderBg?: string;
  widgetIconBg?: string;
  alertHighBg: string;
  alertHighBorder: string;
  alertMediumBg: string;
  alertMediumBorder: string;
  alertLowBg: string;
  alertLowBorder: string;
}

interface ThemeState {
  theme: Theme;
  effectiveTheme: "light" | "dark" | "night" | "custom";
  customTheme: CustomTheme;
  styles: Styles;
  defaultCustomTheme: CustomTheme;
  setTheme: (theme: Theme) => void;
  setCustomTheme: (theme: Partial<CustomTheme>) => void;
}

export const useDarkModeStore = create<ThemeState>((set, get) => {
  const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
  const savedCustomTheme = JSON.parse(
    localStorage.getItem("customTheme") || "null"
  );

  const defaultCustomTheme: CustomTheme = savedCustomTheme || {
    sidebar: { background: "#1e1e1e", text: "#ffffff", button: "#4a90e2" },
    topbar: { background: "#2c2c2c", text: "#ffffff", button: "#4a90e2" },
    main: { background: "#ffffff", text: "#000000", button: "#4a90e2" },
    widget: { background: "#272323", text: "#ffffff", button: "#4a90e2" }, // ✅ NEW
    globalBackground: "#f5f5f5",
  };

  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const computeStyles = (
    applied: "light" | "dark" | "night" | "custom",
    customTheme: CustomTheme
  ): Styles & { widgetHeaderBg?: string } => {
    const lightenColor = (hex: string, percent: number) => {
      const cleanHex = hex.replace("#", "");
      const hexFull =
        cleanHex.length === 3
          ? cleanHex
              .split("")
              .map((c) => c + c)
              .join("")
          : cleanHex;
      const num = parseInt(hexFull, 16);
      let r = (num >> 16) & 0xff;
      let g = (num >> 8) & 0xff;
      let b = num & 0xff;
      r = Math.min(255, Math.floor(r + (255 - r) * percent));
      g = Math.min(255, Math.floor(g + (255 - g) * percent));
      b = Math.min(255, Math.floor(b + (255 - b) * percent));
      return (
        "#" +
        [r, g, b]
          .map((x) => x.toString(16).padStart(2, "0"))
          .join("")
          .toUpperCase()
      );
    };

    const widgetHeaderBg =
      applied === "custom"
        ? lightenColor(customTheme.sidebar.background, 0.7)
        : applied === "dark" || applied === "night"
        ? "#272323"
        : "#1C75BC26";

    const alertHighBorder =
      applied === "dark" || applied === "night" ? "#D32F2F" : "#D32F2F";
    const alertHighBg =
      applied === "dark" || applied === "night" ? "#3a0e0e" : "#D32F2F1A";

    const alertMediumBorder =
      applied === "dark" || applied === "night" ? "#FFA000" : "#FFA000";
    const alertMediumBg =
      applied === "dark" || applied === "night" ? "#4a3200" : "#FFA0001A";

    const alertLowBorder =
      applied === "dark" || applied === "night" ? "#E9D820" : "#E9D820";
    const alertLowBg =
      applied === "dark" || applied === "night" ? "#474700" : "#E9D8201A";

    return {
      // Topbar
      topbarBg:
        applied === "custom"
          ? customTheme.topbar.background
          : applied === "dark"
          ? "#0f2739"
          : applied === "night"
          ? "#0f0f0f"
          : "#235e8b",
      topbarText: applied === "custom" ? customTheme.topbar.text : "#ffffff",
      topbarBtn:
        applied === "custom"
          ? customTheme.topbar.button
          : "rgba(255,255,255,0.1)",
      searchBg:
        applied === "custom"
          ? customTheme.topbar.background
          : "rgba(255,255,255,0.1)",
      searchText: applied === "custom" ? customTheme.topbar.text : "#ffffff",
      dropdownBg:
        applied === "custom"
          ? customTheme.topbar.background
          : applied === "light"
          ? " #bfb9b9"
          : applied === "dark"
          ? "#747474"
          : "#0f0f0f",
      dropdownText: applied === "custom" ? customTheme.topbar.text : "#ffffff",

      // Sidebar
      sidebarBg:
        applied === "custom"
          ? customTheme.sidebar.background
          : applied === "light"
          ? "#235e8b"
          : applied === "dark"
          ? "#0f2739"
          : "#0f0f0f",
      sidebarText: applied === "custom" ? customTheme.sidebar.text : "#ffffff",
      sidebarBtn:
        applied === "custom"
          ? customTheme.sidebar.button
          : "rgba(237,237,237,0.5)",
      sidebarHover:
        applied === "custom"
          ? customTheme.sidebar.button
          : applied === "light"
          ? "#f0f0f0"
          : "#1c1c1c",

      // Main content
      mainBg:
        applied === "custom"
          ? customTheme.globalBackground || customTheme.main.background
          : applied === "dark"
          ? "#3a5567"
          : applied === "night"
          ? "#1f1f1f"
          : "#ffffff",
      mainText:
        applied === "custom"
          ? customTheme.main.text
          : applied === "dark" || applied === "night"
          ? "#ffffff"
          : "#000000",
      mainBtn: applied === "custom" ? customTheme.main.button : "#1C75BC",

      // Widgets
      widgetBg:
        applied === "custom"
          ? customTheme.main.background
          : applied === "dark"
          ? "#272323"
          : applied === "night"
          ? "#1a1a1a"
          : "#ffffff",

      widgetText:
        applied === "custom"
          ? customTheme.main.text
          : applied === "dark" || applied === "night"
          ? "#ffffff"
          : "#000000",
      widgetBorder:
        applied === "custom"
          ? customTheme.main.button
          : applied === "dark" || applied === "night"
          ? "#444444"
          : "#cccccc",

      widgetHeaderBg,
      widgetIconBg:
        applied === "custom"
          ? "#000000"
          : applied === "dark" || applied === "night"
          ? ""
          : "",
      //Alert Colors
      alertHighBg,
      alertHighBorder,
      alertMediumBg,
      alertMediumBorder,
      alertLowBg,
      alertLowBorder,
    };
  };

  const applyTheme = (theme: Theme, customTheme: CustomTheme) => {
    let applied: "light" | "dark" | "night" | "custom";

    if (theme === "system") applied = getSystemTheme();
    else applied = theme as "light" | "dark" | "night" | "custom";

    document.documentElement.classList.remove(
      "light",
      "dark",
      "night",
      "custom"
    );
    document.documentElement.classList.add(applied);

    if (applied === "custom") {
      const root = document.documentElement;
      root.style.setProperty("--sidebar-bg", customTheme.sidebar.background);
      root.style.setProperty("--sidebar-text", customTheme.sidebar.text);
      root.style.setProperty("--sidebar-btn", customTheme.sidebar.button);
      root.style.setProperty("--topbar-bg", customTheme.topbar.background);
      root.style.setProperty("--topbar-text", customTheme.topbar.text);
      root.style.setProperty("--topbar-btn", customTheme.topbar.button);
      root.style.setProperty(
        "--main-bg",
        customTheme.globalBackground || customTheme.main.background
      );
      root.style.setProperty("--main-text", customTheme.main.text);
      root.style.setProperty("--main-btn", customTheme.main.button);

      root.style.setProperty("--widget-bg", customTheme.widget.background);
      root.style.setProperty("--widget-text", customTheme.widget.text);
      root.style.setProperty("--widget-border", customTheme.widget.button);
    }

    return applied;
  };

  const applied = applyTheme(savedTheme, defaultCustomTheme);
  const initialStyles = computeStyles(applied, defaultCustomTheme);

  return {
    theme: savedTheme,
    effectiveTheme: applied,
    customTheme: defaultCustomTheme,
    styles: initialStyles,
    defaultCustomTheme,
    setTheme: (theme) => {
      localStorage.setItem("theme", theme);
      const applied = applyTheme(theme, get().customTheme);
      const styles = computeStyles(applied, get().customTheme);
      set({ theme, effectiveTheme: applied, styles });
    },

    setCustomTheme: (themePart) => {
      const updated: CustomTheme = {
        ...get().customTheme,
        ...themePart,
        sidebar: { ...get().customTheme.sidebar, ...themePart.sidebar },
        topbar: { ...get().customTheme.topbar, ...themePart.topbar },
        main: { ...get().customTheme.main, ...themePart.main },
      };

      localStorage.setItem("customTheme", JSON.stringify(updated));
      set({ customTheme: updated });

      if (get().theme === "custom") {
        const applied = applyTheme("custom", updated);
        const styles = computeStyles(applied, updated);
        set({ effectiveTheme: applied, styles });
      }
    },
  };
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    const { theme, setTheme } = useDarkModeStore.getState();
    if (theme === "system") setTheme("system");
  });
