import WidgetHeader from "./WidgetHeader";
import { useDarkModeStore } from "../../Theme/useDarkModeStore"; // <-- import zustand
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
  // 👇 pull isDarkMode from the global store
  const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
  const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

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
      className={`rounded-lg shadow-md border h-full w-full flex flex-col items-center  ${
        isDarkMode ? "bg-[#272323] border-gray-700" : "bg-white border-gray-200"
      }`}
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
            className={`widget-content flex justify-center absolute inset-0 overflow-auto pt-2 px-3 ${
              isDarkMode ? "bg-[#1212123c]" : ""
            }`}
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
