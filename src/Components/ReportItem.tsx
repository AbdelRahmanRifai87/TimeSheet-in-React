import { useDarkModeStore } from "../Theme/useDarkModeStore";
interface Report {
  id: string;
  title: string;
  time: string;
  desc: string;
}

export function ReportItem({ report }: { report: Report }) {
  // Example: you can replace this with your Zustand store or context hook
  // const isDarkMode = useStore((state) => state.isDarkMode);
  // Replace with your actual dark mode logic
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
  return (
    <div
      className={`flex flex-col justify-between border rounded-2xl shadow-lg min-w-[400px] w-full max-w-sm px-6 py-4 space-y-4 ${
        isDarkMode ? "bg-[#1e1e1e] border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      {/* Last report filed... */}
      <div
        className={`text-left text-sm font-light ${
          isDarkMode ? "text-[#7BB4EA]" : "text-[#1C75BC]"
        }`}
      >
        Last report filed {report.time}
      </div>

      {/* Title */}
      <div className="text-left">
        <p
          className={`text-xl font-semibold ${
            isDarkMode ? "text-white" : "text-[#1E0E06]"
          }`}
        >
          {report.title}
        </p>
      </div>

      {/* Description */}
      <div className="text-left">
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          {report.desc}
        </p>
      </div>

      {/* Enter Report Button */}
      <button className="bg-[#1C75BC] text-white font-semibold py-3 px-6 rounded-lg text-center w-full transition-all duration-300 ease-in-out hover:bg-[#155a8e] focus:outline-none focus:ring-2 focus:ring-[#1C75BC] focus:ring-opacity-50">
        Enter Report
      </button>
    </div>
  );
}
