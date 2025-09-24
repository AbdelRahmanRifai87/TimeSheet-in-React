import { useEffect, useRef, useState } from "react";
import { ReportItem } from "./ReportItem";
import { useDarkModeStore } from "../Theme/useDarkModeStore";

interface Report {
  id: string;
  title: string;
  time: string;
  desc: string;
}

export function ReportList({ reports }: { reports: Report[] }) {
  // Replace with your actual dark mode logic from global state or context
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(false);
  const lightGradient = "rgba(255, 255, 255, 1)";
  const darkGradient = "rgba(18, 18, 18, 1)";

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftShadow(scrollLeft > 0);
      setShowRightShadow(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    handleScroll();
  }, [reports]);

  return (
    <div className="relative w-full h-fit">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex gap-3 w-full h-full overflow-x-auto overflow-y-hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex flex-row space-x-3 w-max h-full p-2">
          {reports.map((report) => (
            <ReportItem
              key={report.id}
              report={report}
              // removed isDarkMode prop here as well
            />
          ))}
        </div>
      </div>
      {showLeftShadow && (
        <div
          className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none"
          style={{
            background: `linear-gradient(to right, ${
              isDarkMode ? darkGradient : lightGradient
            }, transparent)`,
          }}
        />
      )}
      {showRightShadow && (
        <div
          className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none"
          style={{
            background: `linear-gradient(to left, ${
              isDarkMode ? darkGradient : lightGradient
            }, transparent)`,
          }}
        />
      )}
    </div>
  );
}
