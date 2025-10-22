import { useEffect, useRef, useState } from "react";
import BlockoutItem from "./Blockout";
import { useDarkModeStore } from "../Theme/useDarkModeStore"; // Adjust path as needed

interface Blockout {
  id: string;
  date: string;
  user: string;
  subtext: string;
}

export function BlockoutList({ blockouts }: { blockouts: Blockout[] }) {
  const styles = useDarkModeStore((state) => state.styles);

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
  }, [blockouts]);

  // Use store colors for gradient, fallback to light/dark
  const leftGradient = `linear-gradient(to right, ${styles.mainBg}, rgba(255,255,255,0))`;
  const rightGradient = `linear-gradient(to left, ${styles.mainBg}, rgba(255,255,255,0))`;

  return (
    <div className="relative w-full h-fit rounded-lg">
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
          {blockouts.map((blockout) => (
            <BlockoutItem key={blockout.id} blockout={blockout} />
          ))}
        </div>
      </div>

      {showLeftShadow && (
        <div
          className="absolute rounded-lg left-0 top-0 bottom-0 w-8 pointer-events-none"
          style={{
            background: leftGradient,
            transition: "opacity 500ms ease-in-out",
          }}
        />
      )}
      {showRightShadow && (
        <div
          className="absolute rounded-lg right-0 top-0 bottom-0 w-8 pointer-events-none"
          style={{
            background: rightGradient,
            transition: "opacity 500ms ease-in-out",
          }}
        />
      )}
    </div>
  );
}
