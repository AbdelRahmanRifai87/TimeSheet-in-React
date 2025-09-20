interface WidgetHeaderProps {
    title: string;
    onRemove: () => void;
}

function WidgetHeader({ title, onRemove }: WidgetHeaderProps) {
    return (
        <header className="flex items-center rounded-lg justify-between !px-4 !py-2 bg-[#1C75BC26] border-b border-gray-200 rounded-t-lg w-full mb-2 ">
            <span className="font-semibold text-[#05004E] text-lg">{title.charAt(0).toLocaleUpperCase() + title.slice(1,)}</span>
            <div className="flex space-x-2">
                {/* Remove button */}
                <button
                    className="flex items-center justify-center px-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-[0_0_3px_0_#1C75BC] hover:border-[#5da2db] text-[#1C75BC] hover:text-gray-700 focus:outline-none cursor-pointer"
                    onClick={onRemove}
                    title="Remove widget"
                >
                    ×
                </button>
                {/* Dropdown button (or other action) */}
                <button className="flex items-center justify-center px-2 rounded-lg bg-white border border-gray-200 hover:shadow-[0_0_3px_0_#1C75BC] hover:border-[#5da2db] shadow-sm text-[#1C75BC] hover:text-gray-700 focus:outline-none cursor-pointer">
                    <i className="fa-solid fa-angle-down text-xs"></i>
                </button>
                {/* Drag handle button */}
                <button className="grabbable flex items-center justify-center w-7 h-10 rounded-lg bg-white border border-gray-200 shadow-sm text-gray-400 hover:shadow-[0_0_3px_0_#1C75BC] hover:border-[#5da2db] hover:text-[#1C75BC] focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-8">
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