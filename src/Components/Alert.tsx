import React from "react";
import { useDarkModeStore } from "../Theme/useDarkModeStore"; // ✅ Zustand store
import { MdArrowForwardIos } from "react-icons/md";

interface Alert {
  id: string;
  title: string;
  message: string;
  severity: "high" | "medium" | "low";
  img: string | null;
}

export function AlertItem({ alert, order }: { alert: Alert; order: number }) {
  const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
  const isDarkOrNight = effectiveTheme === "dark" || effectiveTheme === "night";

  const severityColors = {
    high: isDarkOrNight
      ? "border-[#D32F2F] bg-[#3a0e0e]"
      : "border-[#D32F2F] bg-[#D32F2F1A]",
    medium: isDarkOrNight
      ? "border-[#FFA000] bg-[#4a3200]"
      : "border-[#FFA000] bg-[#FFA0001A]",
    low: isDarkOrNight
      ? "border-[#E9D820] bg-[#474700]"
      : "border-[#E9D820] bg-[#E9D8201A]",
  };

  const arrowColor = {
    high: "#D32F2F",
    medium: "#FFA000",
    low: "#E9D820",
  };

  const iconSeverity = {
    high: "dangerIcon.png",
    medium: "mediumIcon.png",
    low: "lowIcon.png",
  };

  return (
    <div
      className={`flex relative items-center border-t-2 rounded-lg p-3 gap-3 mb-2 shadow-sm w-full ${
        severityColors[alert.severity]
      }`}
    >
      {/* Icon */}
      <div className="flex-shrink-0 mt-1">
        {alert.img ? (
          <img
            src={alert.img}
            width="40px"
            height="40px"
            className="rounded-full"
            alt="User profile"
          />
        ) : (
          <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full">
            <img
              src={`/person not found icon/${iconSeverity[alert.severity]}`}
              className="w-[30px] h-[30px]"
              alt={`Alert severity: ${alert.severity}`}
            />
          </div>
        )}
      </div>

      {/* Title & Message */}
      <div className="ml-3">
        <h4
          className={`font-medium  text-sm ${
            isDarkOrNight ? "text-white" : "text-[#1E0E06]"
          }`}
        >
          ATTENTION REQUIRED - {alert.title} - {alert.message}
        </h4>

        {/* <p
          className={` text-sm ${
            isDarkOrNight ? "text-white" : "text-[#1E0E06]"
          } mt-1`}
        >
          
        </p> */}
      </div>

      {/* Arrow */}
      <div className="absolute bottom-2 right-2">
        <MdArrowForwardIos style={{ color: arrowColor[alert.severity] }} />
      </div>
    </div>
  );
}
