import { useDarkModeStore } from "../Theme/useDarkModeStore"; // ✅ uncomment

interface Blockout {
  id: string;
  from: string;
  to: string;
  user: string;
  subtext: string;
}

export default function BlockoutItem({ blockout }: { blockout: Blockout }) {
  // Convert theme → boolean (dark/night vs light/system)
  const theme = useDarkModeStore((state) => state.theme);
  const isDark =
    theme === "dark" ||
    theme === "night" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div
      className={`flex  justify-between border rounded-2xl  shadow-lg w-full  px-6 py-4 space-y-2 ${
        isDark ? "bg-[#1e1e1e] border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      {/* Date range */}
      <div className="flex   justify-between w-full">
        <div>
          <div className="flex items-center gap-2">
            <div className="text-left">
              <p
                className={`text-lg font-semibold ${
                  isDark ? "text-white" : "text-[#1E0E06]"
                }`}
              >
                {blockout.user}
              </p>
            </div>

            <div
              className={`text-left text-sm font-light ${
                isDark ? "text-[#7BB4EA]" : "text-[#1C75BC]"
              }`}
            >
              {blockout.from} - {blockout.to}
            </div>
          </div>

          {/* Subtext */}
          <div className="text-left">
            <p
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {blockout.subtext}
            </p>
          </div>
        </div>

        {/* Approve/Deny Buttons */}
        <div className="flex text-sm  items-center ">
          <button className="flex-1 bg-[#388E3C] text-white font-semibold py-2 px-3 pr-4 rounded-tl-lg rounded-bl-lg text-center transition-all duration-50 ease-in-out hover:bg-green-600 ">
            Approve
          </button>
          <button className="flex-1 bg-[#D32F2FE5] text-white font-semibold py-2 px-3 pl-4 rounded-tr-lg rounded-br-lg text-center transition-all duration-50 ease-in-out hover:bg-red-600 ">
            Deny
          </button>
        </div>
      </div>
    </div>
  );
}
