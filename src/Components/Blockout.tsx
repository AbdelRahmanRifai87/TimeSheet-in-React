import { useDarkModeStore } from "../Theme/useDarkModeStore"; // Adjust path if needed

interface Blockout {
  id: string;
  date: string;
  user: string;
  subtext: string;
}

export default function BlockoutItem({ blockout }: { blockout: Blockout }) {
  // Get isDarkMode from Zustand store
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);

  return (
    <div
      className={`flex flex-col justify-between border rounded-2xl min-w-[400px] shadow-lg w-full max-w-sm px-6 py-4 space-y-2 ${
        isDarkMode ? "bg-[#1e1e1e] border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      {/* Date range */}
      <div
        className={`text-left text-sm font-light ${
          isDarkMode ? "text-[#7BB4EA]" : "text-[#1C75BC]"
        }`}
      >
        {blockout.date}
      </div>

      {/* User */}
      <div className="text-left">
        <p
          className={`text-xl font-semibold ${
            isDarkMode ? "text-white" : "text-[#1E0E06]"
          }`}
        >
          {blockout.user}
        </p>
      </div>

      {/* Subtext */}
      <div className="text-left">
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          {blockout.subtext}
        </p>
      </div>

      {/* Approve/Deny Buttons */}
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
        <button className="flex-1 bg-[#388E3C] text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Approve
        </button>
        <button className="flex-1 bg-[#D32F2FE5] text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Deny
        </button>
      </div>
    </div>
  );
}
