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
      className={`flex  justify-between border rounded-2xl  shadow-sm w-full  px-4 py-5  ${
        isDark ? "bg-[#1e1e1e] border-gray-700" : "bg-white border-[#F3F4F6]"
      }`}
    >
      {/* Date range */}
      <div className="flex   justify-between w-full">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="text-left">
              <p
                className={`text-lg font-[600] ${
                  isDark ? "text-white" : "text-[#1F2937]"
                }`}
              >
                {blockout.user}
              </p>
            </div>

            <div
              className={`text-left text-sm font-[500] ${
                isDark ? "text-[#7BB4EA]" : "text-[#4B5563]"
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
          <button className=" cursor-pointer flex-1 bg-[#1FAA70] text-white font-[600] py-3 px-3 pr-4 rounded-tl-lg rounded-bl-lg text-center transition-all duration-50 ease-in-out hover:bg-green-600 ">
            Approve
          </button>
          <button className=" cursor-pointer flex-1 bg-[#D63031] text-white font-[600] py-3 px-3 pl-4 rounded-tr-lg rounded-br-lg text-center transition-all duration-50 ease-in-out hover:bg-red-600 ">
            Deny
          </button>
        </div>
      </div>
    </div>
  );
}
