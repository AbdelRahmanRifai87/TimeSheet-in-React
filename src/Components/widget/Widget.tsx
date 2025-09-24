import { useEffect, useRef, useState } from "react";
import WidgetHeader from "./WidgetHeader";

interface WidgetProps {
  children: React.ReactNode;
  title: string;
  onRemove: () => void;
  isDarkMode?: boolean;
  isDraggingOrResizing: boolean;
  currentHeight: number;
  onToggleHeight: (newH: number) => void;
}
function Widget({
  children,
  title,
  onRemove,
  isDarkMode = false,
  isDraggingOrResizing,
  currentHeight,
  onToggleHeight,
}: WidgetProps) {
  // The collapsed height is a fixed value.
  const COLLAPSED_HEIGHT = 2;

  // Use a ref to store the original expanded height.
  const originalHeightRef = useRef(currentHeight);

  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    if (currentHeight > COLLAPSED_HEIGHT) {
      originalHeightRef.current = currentHeight;
    }
  }, [currentHeight]);

  const handleToggle = () => {
    if (isExpanded) {
      // Collapse the widget
      onToggleHeight(COLLAPSED_HEIGHT);
      setIsExpanded(false);
    } else {
      // Expand the widget to its last stored original height
      onToggleHeight(originalHeightRef.current);
      setIsExpanded(true);
    }
  };

  return (
    <div
      className={`rounded-[8px] shadow-md border h-full w-full flex flex-col items-center  ${
        isDarkMode
          ? "bg-[#1212128f] border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <WidgetHeader
        isDraggingOrResizing={isDraggingOrResizing}
        title={title}
        onRemove={onRemove}
        isDarkMode={isDarkMode}
        onToggle={handleToggle}
        isExpanded={isExpanded}
      />

      <div className={`relative w-full h-full ${isExpanded ? "" : "hidden"} `}>
        <div
          className={`widget-content flex justify-center absolute inset-0 overflow-auto pt-2 px-3 `}
        >
          {children}
        </div>
      </div>
      <div className="w-full h-[20px]"></div>
    </div>
  );
}
export default Widget;
