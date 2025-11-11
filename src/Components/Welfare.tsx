import App from "../App";
import { AppIcon } from "../icons";
import { useDarkModeStore } from "../Theme/useDarkModeStore"; // ✅ uncomment
import type { WelfareType } from "../Types/Welfare";

export default function Welfare({ welfare }: { welfare: WelfareType }) {
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
      <div className="flex   justify-between w-full items-center">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="text-left">
              <p
                className={`text-lg font-[600] ${
                  isDark ? "text-white" : "text-[#1F2937]"
                }`}
              >
                {welfare.name}
              </p>
            </div>

            <div
              className={`text-left text-sm font-[500] flex ${
                isDark ? "text-[#7BB4EA]" : "text-[#4B5563]"
              }`}
            >
              <AppIcon name="map_pin" /> {welfare.location}
            </div>
          </div>

          {/* Subtext */}
          <div className="text-left">
            <p
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {welfare.issue}
            </p>
          </div>
        </div>

        {/* Approve/Deny Buttons */}
        <div className="flex text-sm  justify-between gap-2 text-white h-fit ">
          <button className="bg-[#1C75BC] p-2 rounded-lg cursor-pointer hover:bg-[#5cabec]">
            <AppIcon name="phone" size={26} />
          </button>
          <button className="bg-[#1C75BC] p-2 rounded-lg cursor-pointer hover:bg-[#5cabec]">
            <AppIcon name="messageBox" size={26} />
          </button>
          <button className="bg-[#1C75BC] p-2 rounded-lg cursor-pointer hover:bg-[#5cabec]">
            <AppIcon name="carOutline" size={26} />
          </button>
        </div>
      </div>
    </div>
  );
}
