import WidgetHeader from "./WidgetHeader";

interface WidgetProps {
  children: React.ReactNode;
  title: string;
  onRemove: () => void;
  isDarkMode?: boolean;
}
function Widget({
  children,
  title,
  onRemove,
  isDarkMode = false,
}: WidgetProps) {
  return (
    <div
      className={`rounded-lg shadow-md border h-full w-full flex flex-col items-center px-1 pt-1 ${
        isDarkMode
          ? "bg-[#8b8a8a01] border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <WidgetHeader title={title} onRemove={onRemove} isDarkMode={isDarkMode} />

      <div className="relative w-full h-full">
        <div
          className={`widget-content flex justify-center absolute inset-0 overflow-auto pt-2 px-3 ${
            isDarkMode ? "bg-[#1212128f]" : ""
          }`}
        >
          {children}
        </div>
      </div>
      <div className="w-full h-[20px]"></div>
    </div>
  );
}
export default Widget;
