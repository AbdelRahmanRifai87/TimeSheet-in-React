// import WidgetHeader from "./WidgetHeader";
// import { useDarkModeStore } from "../../Theme/useDarkModeStore"; // <-- import zustand

// interface WidgetProps {
//   children: React.ReactNode;
//   title: string;
//   onRemove: () => void;
//   isDraggingOrResizing: boolean;
//   currentHeight: number;
//   onToggleHeight: (newH: number) => void;
// }

// function Widget({
//   children,
//   title,
//   onRemove,
//   isDraggingOrResizing,
//   currentHeight,
//   onToggleHeight,
// }: WidgetProps) {
//   // 👇 pull isDarkMode from the global store
//   const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
//   const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

//   return (
//     <div
//       className={`rounded-lg shadow-md border h-full w-full flex flex-col items-center px-1 pt-1 ${
//         isDarkMode ? "bg-[#272323] border-gray-700" : "bg-white border-gray-200"
//       }`}
//     >
//       <WidgetHeader title={title} onRemove={onRemove} />

//       <div className="relative w-full h-full">
//         <div
//           className={`widget-content flex justify-center absolute inset-0 overflow-auto pt-2 px-3 ${
//             isDarkMode ? "bg-[#1212123c]" : ""
//           }`}
//         >
//           {children}
//         </div>
//       </div>
//       <div className="w-full h-[20px]"></div>
//     </div>
//   );
// }

// export default Widget;
// import WidgetHeader from "./WidgetHeader";
// import { useDarkModeStore } from "../../Theme/useDarkModeStore";

// interface WidgetProps {
//   children: React.ReactNode;
//   title: string;
//   onRemove: () => void;
//   isDraggingOrResizing: boolean;
//   currentHeight: number;
//   onToggleHeight: (newH: number) => void;
// }

// function Widget({
//   children,
//   title,
//   onRemove,
//   isDraggingOrResizing,
//   currentHeight,
//   onToggleHeight,
// }: WidgetProps) {
//   // ✅ Pull precomputed styles from Zustand
//   const styles = useDarkModeStore((state) => state.styles);

//   return (
//     <div
//       className="rounded-lg shadow-md border h-full w-full flex flex-col items-center px-1 pt-1 transition-colors duration-200"
//       style={{
//         backgroundColor: styles.mainBg,
//         color: styles.mainText,
//         borderColor: styles.mainBtn,
//       }}
//     >
//       <WidgetHeader title={title} onRemove={onRemove} />

//       <div className="relative w-full h-full">
//         <div
//           className="widget-content flex justify-center absolute inset-0 overflow-auto pt-2 px-3 rounded transition-colors duration-200"
//           style={{
//             backgroundColor: styles.mainBg,
//             color: styles.mainText,
//           }}
//         >
//           {children}
//         </div>
//       </div>

//       <div className="w-full h-[20px]"></div>
//     </div>
//   );
// }

// export default Widget;

import WidgetHeader from "./WidgetHeader";
import { useDarkModeStore } from "../../Theme/useDarkModeStore";
import { useEffect, useState } from "react";

interface WidgetProps {
  children: React.ReactNode;
  title: string;
  onRemove: () => void;
  isDraggingOrResizing: boolean;
  currentHeight: number;
  onToggleHeight: (newH: number) => void;
}

const COLLAPSED_HEIGHT = 2;

function Widget({
  children,
  title,
  onRemove,
  isDraggingOrResizing,
  currentHeight,
  onToggleHeight,
}: WidgetProps) {
  // ✅ Pull precomputed widget styles from Zustand
  const styles = useDarkModeStore((state) => state.styles);

  const [expandedHeight, setExpandedHeight] = useState(currentHeight);

  useEffect(() => {
    if (currentHeight !== COLLAPSED_HEIGHT) {
      setExpandedHeight(currentHeight);
    }
  }, [currentHeight]);

  const handleToggle = () => {
    let newHeight;
    if (currentHeight === COLLAPSED_HEIGHT) {
      newHeight = expandedHeight;
    } else {
      newHeight = COLLAPSED_HEIGHT;
    }

    onToggleHeight(newHeight);
  };

  // Check if the widget is currently in the collapsed state
  const isCollapsed = currentHeight === COLLAPSED_HEIGHT;

  return (
    <div
      className="rounded-lg shadow-md  h-full w-full flex flex-col items-center transition-colors duration-200"
      style={{
        backgroundColor: styles.widgetBg, // 🎨 use widget background
        color: styles.widgetText, // 🎨 use widget text color
        borderColor: styles.widgetBorder, // 🎨 use widget border color
      }}
    >
      <WidgetHeader
        isDraggingOrResizing={isDraggingOrResizing}
        title={title}
        onRemove={onRemove}
        isCollapsed={isCollapsed}
        onToggle={handleToggle}
      />

      {!isCollapsed && (
        <div className="relative w-full h-full">
          <div
            className={`widget-content flex justify-center absolute inset-0 overflow-auto pt-2 px-3 `}
          >
            {children}
          </div>
        </div>
      )}
      <div className="w-full h-[20px]"></div>
    </div>
  );
}

export default Widget;
