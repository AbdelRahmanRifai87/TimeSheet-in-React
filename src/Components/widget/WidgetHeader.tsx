import { useDarkModeStore } from "../../Theme/useDarkModeStore";

interface WidgetHeaderProps {
  title: string;
  onRemove: () => void;
}

export default function WidgetHeader({ title, onRemove }: WidgetHeaderProps) {
  // Pull effectiveTheme from the store
  const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);

  // Determine dark mode (both "dark" and "night" are considered dark)
  const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

  return (
    <header
      className={`flex items-center justify-between w-full mb-2 rounded-t-lg px-4 py-2 border-b ${
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
          title="Toggle dropdown"
          className={`flex items-center justify-center px-2 rounded-lg border shadow-sm hover:shadow-[0_0_3px_0_#1C75BC] focus:outline-none ${
            isDarkMode
              ? "bg-gray-800 border-gray-600 text-white hover:text-gray-200"
              : "bg-white border-gray-200 text-[#1C75BC] hover:text-gray-700"
          }`}
        >
          <i className="fa-solid fa-angle-down text-xs"></i>
        </button>

        {/* Drag handle */}
        <button
          title="Drag widget"
          className={`grabbable flex items-center justify-center w-7 h-10 rounded-lg border shadow-sm focus:outline-none ${
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
