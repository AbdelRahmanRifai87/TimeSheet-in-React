import { AppIcon } from "../icons";
import { useDarkModeStore } from "../Theme/useDarkModeStore"; // ✅ uncomment
import type { ShiftStatusProps } from "../Types/ShiftStatus";

export default function ShiftStatus({ shift }: { shift: ShiftStatusProps }) {
  // Convert theme → boolean (dark/night vs light/system)
  const theme = useDarkModeStore((state) => state.theme);
  const isDark =
    theme === "dark" ||
    theme === "night" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const statusColors: { [key: string]: any } = {
    accepted: {
      border: "#C6F1DB",
      bg: "#E9F9F0",
      icon: "#178C5B",
    },
    unaccepted: {
      border: "#C9E2F5",
      bg: "#E6F1FA",
      icon: "#1766A8",
    },
    declined: {
      border: "#F9D4D4",
      bg: "#FDEEEE",
      icon: "#B72427",
    },
  };

  return (
    <div
      className={`flex  justify-between border rounded-2xl  border-[1px] w-full  px-4 py-3  `}
      style={{
        backgroundColor: statusColors[shift.status].bg,
        borderColor: statusColors[shift.status].border,
      }}
    >
      {/* Date range */}
      <div className="flex   justify-between w-full items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="text-left">
              <p
                className={`text-lg font-[600] ${
                  isDark ? "text-white" : "text-[#4B5563]"
                }`}
              >
                {shift.name}
              </p>
            </div>

            <div
              className={`text-left text-[9px] font-[500] flex ${
                isDark ? "text-[#7BB4EA]" : "text-[#4B5563]"
              }`}
              style={{ color: statusColors[shift.status].icon }}
            >
              {shift.status === "unaccepted"
                ? "Pending"
                : shift.status.toUpperCase()}
            </div>
          </div>

          {/* Subtext */}
          <div className="text-left">
            <p className={`text-sm ${isDark ? "text-gray-300" : "#6B7280"}`}>
              Shift at {shift.location} on {shift.date}
            </p>
          </div>
        </div>

        {/* Approve/Deny Buttons */}
        <div
          className="flex text-sm  justify-between gap-2 h-fit "
          style={{ color: statusColors[shift.status].icon }}
        >
          <button className="bg-white border border-[#D1D5DB] p-1.5 rounded-lg cursor-pointer hover:bg-[#5cabec]">
            <AppIcon name="personReplace" size={26} />
          </button>
          <button className="bg-white border border-[#D1D5DB] p-1.5 rounded-lg cursor-pointer hover:bg-[#5cabec]">
            <AppIcon name="phone" size={26} />
          </button>
          <button className="bg-white border border-[#D1D5DB] p-1.5 rounded-lg cursor-pointer hover:bg-[#5cabec]">
            <AppIcon name="messageBox" size={26} />
          </button>
        </div>
      </div>
    </div>
  );
}
