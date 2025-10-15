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
  const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);

  // Determine dark mode (both "dark" and "night" are considered dark)
  const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

  return (
    <header
      className={`flex items-center justify-between w-full  rounded-t-lg px-4 py-2 border-b ${
        isDarkMode
          ? "bg-[#272323] border-gray-700 text-white"
          : "bg-[#1C75BC26] border-gray-200 text-[#05004E]"
      }`}
    >
      <span className="font-semibold text-lg">{title}</span>

      <div className="flex space-x-2">
        {/* Remove button */}
        <button
          className={`flex items-center justify-center px-3 rounded-lg border shadow-sm hover:shadow-[0_0_3px_0_#1C75BC] focus:outline-none ${
            isDraggingOrResizing ? "" : "hidden"
          } ${
            isDarkMode
              ? "bg-gray-800 border-gray-600 text-white hover:text-gray-200"
              : "bg-white border-gray-200 text-[#1C75BC] hover:text-gray-700"
          }`}
          onClick={onRemove}
          title="Remove widget"
        >
          ×
        </button>

        {/* Toggle / collapse button */}
        <button
          type="button"
          title={isCollapsed ? "Expand Widget" : "Collapse Widget"}
          // ⭐️ CRITICAL: Wire up the click handler
          onClick={onToggle}
          className={`flex items-center justify-center px-2 rounded-lg w-10 h-10 border shadow-sm hover:shadow-[0_0_3px_0_#1C75BC] focus:outline-none ${
            isDarkMode
              ? "bg-gray-800 border-gray-600 text-white hover:text-gray-200"
              : "bg-white border-gray-200 text-[#1C75BC] hover:text-gray-700"
          }`}
        >
          {/* ⭐️ CRITICAL: Dynamic icon based on state */}
          <i
            className={`fa-solid ${
              isCollapsed ? "fa-angle-down" : "fa-angle-up"
            } text-xs`}
          ></i>
        </button>

        {/* Drag handle */}
        <button
          title="Drag widget"
          className={`grabbable flex items-center justify-center w-7 h-10 rounded-lg border shadow-sm focus:outline-none ${
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
            {/* First column of dots */}
            <circle cx="3" cy="0" r="1.5" />
            <circle cx="3" cy="8" r="1.5" />
            <circle cx="3" cy="16" r="1.5" />
            {/* Second column of dots */}
            <circle cx="13" cy="0" r="1.5" />
            <circle cx="13" cy="8" r="1.5" />
            <circle cx="13" cy="16" r="1.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}
