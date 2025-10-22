// // import { useDarkModeStore } from "../../Theme/useDarkModeStore";

// // interface WidgetHeaderProps {
// //   title: string;
// //   onRemove: () => void;
// // }

// // export default function WidgetHeader({ title, onRemove }: WidgetHeaderProps) {
// //   // Pull effectiveTheme from the store
// //   const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);

// //   // Determine dark mode (both "dark" and "night" are considered dark)
// //   const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

// //   return (
// //     <header
// //       className={`flex items-center justify-between w-full mb-2 rounded-t-lg px-4 py-2 border-b ${
// //         isDarkMode
// //           ? "bg-[#272323] border-gray-700 text-white"
// //           : "bg-[#1C75BC26] border-gray-200 text-[#05004E]"
// //       }`}
// //     >
// //       <span className="font-semibold text-lg">{title}</span>

// //       <div className="flex space-x-2">
// //         {/* Remove button */}
// //         <button
// //           className={`flex items-center justify-center px-3 rounded-lg border shadow-sm hover:shadow-[0_0_3px_0_#1C75BC] focus:outline-none ${
// //             isDarkMode
// //               ? "bg-gray-800 border-gray-600 text-white hover:text-gray-200"
// //               : "bg-white border-gray-200 text-[#1C75BC] hover:text-gray-700"
// //           }`}
// //           onClick={onRemove}
// //           title="Remove widget"
// //         >
// //           ×
// //         </button>

// //         {/* Toggle / collapse button */}
// //         <button
// //           type="button"
// //           title="Toggle dropdown"
// //           className={`flex items-center justify-center px-2 rounded-lg border shadow-sm hover:shadow-[0_0_3px_0_#1C75BC] focus:outline-none ${
// //             isDarkMode
// //               ? "bg-gray-800 border-gray-600 text-white hover:text-gray-200"
// //               : "bg-white border-gray-200 text-[#1C75BC] hover:text-gray-700"
// //           }`}
// //         >
// //           <i className="fa-solid fa-angle-down text-xs"></i>
// //         </button>

// //         {/* Drag handle */}
// //         <button
// //           title="Drag widget"
// //           className={`grabbable flex items-center justify-center w-7 h-10 rounded-lg border shadow-sm focus:outline-none ${
// //             isDarkMode
// //               ? "bg-gray-800 border-gray-600 text-gray-400 hover:text-white"
// //               : "bg-white border-gray-200 text-gray-400 hover:text-[#1C75BC]"
// //           }`}
// //         >
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             viewBox="0 0 16 16"
// //             fill="currentColor"
// //             className="w-4 h-8"
// //           >
// //             {/* First column of dots */}
// //             <circle cx="3" cy="0" r="1.5" />
// //             <circle cx="3" cy="8" r="1.5" />
// //             <circle cx="3" cy="16" r="1.5" />
// //             {/* Second column of dots */}
// //             <circle cx="13" cy="0" r="1.5" />
// //             <circle cx="13" cy="8" r="1.5" />
// //             <circle cx="13" cy="16" r="1.5" />
// //           </svg>
// //         </button>
// //       </div>
// //     </header>
// //   );
// // }
// import { useDarkModeStore } from "../../Theme/useDarkModeStore";

// interface WidgetHeaderProps {
//   title: string;
//   onRemove: () => void;
// }

// export default function WidgetHeader({ title, onRemove }: WidgetHeaderProps) {
//   // Get theme info from Zustand store
//   const theme = useDarkModeStore((s) => s.theme);
//   const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);
//   const customTheme = useDarkModeStore((s) => s.customTheme);

//   // Determine if dark theme
//   const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

//   // ---------------------------
//   // Theme-based color helpers
//   // ---------------------------
//   const getBgColor = () => {
//     if (theme === "custom") {
//       // You can switch between topbar or sidebar background here
//       // For now, using sidebar background for header consistency
//       return customTheme.sidebar.background || customTheme.topbar.background;
//     }
//     return isDarkMode ? "#272323" : "#1C75BC26";
//   };

//   const getTextColor = () => {
//     if (theme === "custom") {
//       return customTheme.sidebar.text || customTheme.topbar.text;
//     }
//     return isDarkMode ? "#ffffff" : "#05004E";
//   };

//   const getButtonBg = () => {
//     if (theme === "custom") {
//       return customTheme.sidebar.button || customTheme.topbar.button;
//     }
//     return isDarkMode ? "#1f1f1f" : "#ffffff";
//   };

//   const getBorderColor = () => {
//     if (theme === "custom") {
//       // Use sidebar text with some transparency for the border
//       return (customTheme.sidebar.text || customTheme.topbar.text) + "33";
//     }
//     return isDarkMode ? "#4b5563" : "#e5e7eb";
//   };

//   // ---------------------------
//   // Render
//   // ---------------------------
//   return (
//     <header
//       className="flex items-center justify-between w-full mb-2 rounded-t-lg px-4 py-2 border-b transition-colors"
//       style={{
//         backgroundColor: getBgColor(),
//         color: getTextColor(),
//         borderColor: getBorderColor(),
//       }}
//     >
//       <span className="font-semibold text-lg">{title}</span>

//       <div className="flex space-x-2">
//         {/* Remove button */}
//         <button
//           className="flex items-center justify-center px-3 rounded-lg border shadow-sm focus:outline-none hover:opacity-90 transition"
//           style={{
//             backgroundColor: getButtonBg(),
//             color: getTextColor(),
//             borderColor: getBorderColor(),
//           }}
//           onClick={onRemove}
//           title="Remove widget"
//         >
//           ×
//         </button>

//         {/* Toggle / collapse button */}
//         <button
//           type="button"
//           title="Toggle dropdown"
//           className="flex items-center justify-center px-2 rounded-lg border shadow-sm focus:outline-none hover:opacity-90 transition"
//           style={{
//             backgroundColor: getButtonBg(),
//             color: getTextColor(),
//             borderColor: getBorderColor(),
//           }}
//         >
//           <i className="fa-solid fa-angle-down text-xs"></i>
//         </button>

//         {/* Drag handle */}
//         <button
//           title="Drag widget"
//           className="grabbable flex items-center justify-center w-7 h-10 rounded-lg border shadow-sm focus:outline-none hover:opacity-90 transition"
//           style={{
//             backgroundColor: getButtonBg(),
//             color: getTextColor(),
//             borderColor: getBorderColor(),
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="w-4 h-8"
//           >
//             <circle cx="3" cy="0" r="1.5" />
//             <circle cx="3" cy="8" r="1.5" />
//             <circle cx="3" cy="16" r="1.5" />
//             <circle cx="13" cy="0" r="1.5" />
//             <circle cx="13" cy="8" r="1.5" />
//             <circle cx="13" cy="16" r="1.5" />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// }
// import { useDarkModeStore } from "../../Theme/useDarkModeStore";

// interface WidgetHeaderProps {
//   title: string;
//   onRemove: () => void;
// }

// export default function WidgetHeader({ title, onRemove }: WidgetHeaderProps) {
//   const theme = useDarkModeStore((s) => s.theme);
//   const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);
//   const customTheme = useDarkModeStore((s) => s.customTheme);

//   const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

//   // 🔹 Lighten color utility
//   const lightenColor = (hex: string, percent: number) => {
//     const cleanHex = hex.replace("#", "");
//     const hexFull =
//       cleanHex.length === 3
//         ? cleanHex
//             .split("")
//             .map((c) => c + c)
//             .join("")
//         : cleanHex;
//     const num = parseInt(hexFull, 16);
//     let r = (num >> 16) & 0xff;
//     let g = (num >> 8) & 0xff;
//     let b = num & 0xff;
//     r = Math.min(255, Math.floor(r + (255 - r) * percent));
//     g = Math.min(255, Math.floor(g + (255 - g) * percent));
//     b = Math.min(255, Math.floor(b + (255 - b) * percent));
//     return (
//       "#" +
//       [r, g, b]
//         .map((x) => x.toString(16).padStart(2, "0"))
//         .join("")
//         .toUpperCase()
//     );
//   };

//   // ---------------------------
//   // Theme-based color helpers
//   // ---------------------------
//   const getBgColor = () => {
//     if (theme === "custom") {
//       // use sidebar background, but lighter by 70%
//       const base = customTheme.sidebar.background;
//       return lightenColor(base, 0.7);
//     }
//     return isDarkMode ? "#1C75BC26" : "#1C75BC26";
//   };

//   const getTextColor = () => {
//     if (theme === "custom") {
//       return customTheme.sidebar.text || customTheme.topbar.text;
//     }
//     return isDarkMode ? "#ffffff" : "#05004E";
//   };

//   const getButtonBg = () => {
//     if (theme === "custom") {
//       return customTheme.sidebar.button || customTheme.topbar.button;
//     }
//     return isDarkMode ? "#1f1f1f" : "#ffffff";
//   };

//   const getBorderColor = () => {
//     if (theme === "custom") {
//       return (customTheme.sidebar.text || customTheme.topbar.text) + "33";
//     }
//     return isDarkMode ? "#4b5563" : "#e5e7eb";
//   };

//   // ---------------------------
//   // Render
//   // ---------------------------
//   return (
//     <header
//       className="flex items-center justify-between w-full mb-2 rounded-t-lg px-4 py-2 border-b transition-colors"
//       style={{
//         backgroundColor: getBgColor(),
//         color: getTextColor(),
//         borderColor: getBorderColor(),
//       }}
//     >
//       <span className="font-semibold text-lg">{title}</span>

//       <div className="flex space-x-2">
//         <button
//           className="flex items-center justify-center px-3 rounded-lg border shadow-sm focus:outline-none hover:opacity-90 transition"
//           style={{
//             backgroundColor: getButtonBg(),
//             color: getTextColor(),
//             borderColor: getBorderColor(),
//           }}
//           onClick={onRemove}
//           title="Remove widget"
//         >
//           ×
//         </button>

//         <button
//           type="button"
//           title="Toggle dropdown"
//           className="flex items-center justify-center px-2 rounded-lg border shadow-sm focus:outline-none hover:opacity-90 transition"
//           style={{
//             backgroundColor: getButtonBg(),
//             color: getTextColor(),
//             borderColor: getBorderColor(),
//           }}
//         >
//           <i className="fa-solid fa-angle-down text-xs"></i>
//         </button>

//         <button
//           title="Drag widget"
//           className="grabbable flex items-center justify-center w-7 h-10 rounded-lg border shadow-sm focus:outline-none hover:opacity-90 transition"
//           style={{
//             backgroundColor: getButtonBg(),
//             color: getTextColor(),
//             borderColor: getBorderColor(),
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="w-4 h-8"
//           >
//             <circle cx="3" cy="0" r="1.5" />
//             <circle cx="3" cy="8" r="1.5" />
//             <circle cx="3" cy="16" r="1.5" />
//             <circle cx="13" cy="0" r="1.5" />
//             <circle cx="13" cy="8" r="1.5" />
//             <circle cx="13" cy="16" r="1.5" />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// }
import { useDarkModeStore } from "../../Theme/useDarkModeStore";

interface WidgetHeaderProps {
  title: string;
  onRemove: () => void;
  isDraggingOrResizing: boolean;
  onToggle: () => void;
  isCollapsed: boolean;
}

export default function WidgetHeader({
  title,
  onRemove,
  isDraggingOrResizing,
  onToggle,
  isCollapsed,
}: WidgetHeaderProps) {
  // Pull effectiveTheme from the store
  const styles = useDarkModeStore((s) => s.styles);
  // 🔹 Lighten color utility

  return (
    <header
      className=" flex items-center justify-between w-full mb-2 rounded-t-lg px-4 py-2 border-b transition-colors"
      style={{
        backgroundColor: styles.widgetHeaderBg,
        color: styles.widgetText,
        borderColor: styles.widgetBorder,
      }}
    >
      <div
        className={`absolute w-[82%] left-0 h-[16%] bg-transparent grabbable ${
          isDraggingOrResizing ? "" : "hidden"
        } `}
      ></div>
      <span className="font-semibold text-lg">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </span>

      <div className="flex space-x-2">
        <button
          className="flex items-center justify-center px-3 rounded-lg border shadow-sm focus:outline-none hover:opacity-90 transition"
          style={{
            color: styles.widgetText,
            borderColor: styles.widgetBorder,
          }}
          onClick={onRemove}
          title="Remove widget"
        >
          ×
        </button>

        <button
          type="button"
          title="Toggle dropdown"
          onClick={onToggle}
          className="flex items-center justify-center px-2 h-10 rounded-lg border shadow-sm focus:outline-none hover:opacity-90 transition"
          style={{
            color: styles.widgetText,
            borderColor: styles.widgetBorder,
          }}
        >
          {/* ⭐️ CRITICAL: Dynamic icon based on state */}
          <i
            className={`fa-solid ${
              isCollapsed ? "fa-angle-down" : "fa-angle-up"
            } text-xs`}
          ></i>
        </button>

        {/* Drag handle */}
        {/* <button
          title="Drag widget"
          className={` flex items-center justify-center w-7 h-10 rounded-lg border shadow-sm focus:outline-none ${
            isDraggingOrResizing ? "" : "hidden"
          } ${
            isDarkMode
              ? "bg-gray-800 border-gray-600 text-gray-400 hover:text-white"
              : "bg-white border-gray-200 text-gray-400 hover:text-[#1C75BC]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-8"
          >
            <circle cx="3" cy="0" r="1.5" />
            <circle cx="3" cy="8" r="1.5" />
            <circle cx="3" cy="16" r="1.5" />
            <circle cx="13" cy="0" r="1.5" />
            <circle cx="13" cy="8" r="1.5" />
            <circle cx="13" cy="16" r="1.5" />
          </svg>
        </button> */}
      </div>
    </header>
  );
}
