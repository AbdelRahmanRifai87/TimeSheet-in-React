interface WidgetHeaderProps {
  title: string;
  onRemove: () => void;
  isDarkMode?: boolean;
}

function WidgetHeader({
  title,
  onRemove,
  isDarkMode = false,
}: WidgetHeaderProps) {
  return (
    <header
      className={`flex items-center rounded-lg justify-between !px-4 !py-2 border-b rounded-t-lg w-full mb-2 ${
        isDarkMode
          ? "bg-[#05050516] border-gray-700 text-white"
          : "bg-[#1C75BC26] border-gray-200 text-[#05004E]"
      }`}
    >
      <span
        className={`font-semibold text-lg ${
          isDarkMode ? "text-white" : " text-[#05004E]"
        }`}
      >
        {title.charAt(0).toLocaleUpperCase() + title.slice(1)}
      </span>

      <div className="flex space-x-2">
        {/* Remove button */}
        <button
          className={`flex items-center justify-center px-3 rounded-lg border shadow-sm focus:outline-none cursor-pointer ${
            isDarkMode
              ? "bg-[#121212] border-gray-700 text-gray-300 hover:text-red-400"
              : "bg-white border-gray-200 text-[#1C75BC] hover:text-gray-700 hover:shadow-[0_0_3px_0_#1C75BC] hover:border-[#5da2db]"
          }`}
          onClick={onRemove}
          title="Remove widget"
        >
          ×
        </button>
        {/* Dropdown button (or other action) */}
        <button
          title="Toggle dropdown"
          className={`flex items-center justify-center px-2 rounded-lg border shadow-sm focus:outline-none cursor-pointer ${
            isDarkMode
              ? "bg-[#121212] border-gray-700 text-gray-300 hover:text-white"
              : "bg-white border-gray-200 text-[#1C75BC] hover:text-gray-700 hover:shadow-[0_0_3px_0_#1C75BC] hover:border-[#5da2db]"
          }`}
        >
          <i className="fa-solid fa-angle-down text-xs"></i>
        </button>
        {/* Drag handle button */}
        <button
          title="Drag widget"
          className={`grabbable flex items-center justify-center w-7 h-10 rounded-lg border shadow-sm focus:outline-none ${
            isDarkMode
              ? "bg-[#121212] border-gray-700 text-gray-400 hover:text-[#1C75BC]"
              : "bg-white border-gray-200 text-gray-400 hover:text-[#1C75BC] hover:shadow-[0_0_3px_0_#1C75BC] hover:border-[#5da2db]"
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
        </button>
      </div>
    </header>
  );
}
export default WidgetHeader;
