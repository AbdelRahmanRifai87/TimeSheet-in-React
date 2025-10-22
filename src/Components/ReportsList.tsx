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
  const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
  const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(false);

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

  const lightGradientLeft =
    "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))";
  const darkGradientLeft =
    "linear-gradient(to right, #121212, rgba(18,18,18,0))";
  const lightGradientRight =
    "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))";
  const darkGradientRight =
    "linear-gradient(to left, #121212, rgba(18,18,18,0))";

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
        <>
          {/* Light Theme Left Shadow */}
          <div
            className="absolute rounded-lg  left-0 top-0 bottom-0 w-8 pointer-events-none"
            style={{
              background: lightGradientLeft,
              opacity: isDarkMode ? 0 : 1,
              transition: "opacity 500ms ease-in-out",
            }}
          />
          {/* Dark Theme Left Shadow */}
          <div
            className="absolute rounded-lg  left-0 top-0 bottom-0 w-8 pointer-events-none"
            style={{
              background: darkGradientLeft,
              opacity: isDarkMode ? 1 : 0,
              transition: "opacity 500ms ease-in-out",
            }}
          />
        </>
      )}
      {showRightShadow && (
        <>
          {/* Light Theme Right Shadow */}
          <div
            className="absolute rounded-lg right-0 top-0 bottom-0 w-8 pointer-events-none"
            style={{
              background: lightGradientRight,
              opacity: isDarkMode ? 0 : 1,
              transition: "opacity 500ms ease-in-out",
            }}
          />
          {/* Dark Theme Right Shadow */}
          <div
            className="absolute rounded-lg right-0 top-0 bottom-0 w-8 pointer-events-none"
            style={{
              background: darkGradientRight,
              opacity: isDarkMode ? 1 : 0,
              transition: "opacity 500ms ease-in-out",
            }}
          />
        </>
      )}
    </div>
  );
}
