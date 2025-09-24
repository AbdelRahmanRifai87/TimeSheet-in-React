import React from "react";
import { useDarkModeStore } from "../Theme/useDarkModeStore"; // ✅ Zustand store (adjust path)

interface Alert {
  id: string;
  title: string;
  message: string;
  severity: "high" | "medium" | "low";
}

export function AlertItem({ alert }: { alert: Alert }) {
  // ✅ Use Zustand instead of props
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);

  const severityColors = {
    high: isDarkMode
      ? "border-[#D32F2F] bg-[#3a0e0e]"
      : "border-[#D32F2F] bg-[#D32F2F1A]",
    medium: isDarkMode
      ? "border-[#FFA000] bg-[#4a3200]"
      : "border-[#FFA000] bg-[#FFA0001A]",
    low: isDarkMode
      ? "border-[#E9D820] bg-[#474700]"
      : "border-[#E9D820] bg-[#E9D8201A]",
  };

  const iconSeverityColors = {
    high: "text-[#D32F2F]",
    medium: "text-[#FFA000]",
    low: "text-[#E9D820]",
  };

  return (
    <div
      className={`flex items-start border-t-2 rounded-lg p-3 mb-2 shadow-sm w-full ${
        severityColors[alert.severity]
      }`}
    >
      <div
        className={`flex-shrink-0 mt-1 ${iconSeverityColors[alert.severity]}`}
      >
        <i className="fa-solid fa-triangle-exclamation"></i>
      </div>
      <div className="ml-3">
        <h4
          className={`font-semibold text-sm ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {alert.title}
        </h4>
        <p
          className={`text-xs ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {alert.message}
        </p>
      </div>
    </div>
  );
}
