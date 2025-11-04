// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // keep this for system/dark/night switching
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Use CSS variables for all theme colors
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        button: "var(--color-button)",

        // Optional (for custom sections)
        "sidebar-bg": "var(--sidebar-bg)",
        "sidebar-text": "var(--sidebar-text)",
        "sidebar-btn": "var(--sidebar-btn)",

        "topbar-bg": "var(--topbar-bg)",
        "topbar-text": "var(--topbar-text)",
        "topbar-btn": "var(--topbar-btn)",

        "global-bg": "var(--global-bg)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // 👈 added this
      },
    },
  },
  plugins: [],
};
