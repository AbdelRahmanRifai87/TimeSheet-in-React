import { useEffect, useRef, useState } from "react";
import BlockoutItem from "./Blockout";

interface Blockout {
    id: string;
    date: string;
    user: string;
    subtext: string
}

export function BlockoutList({ blockouts }: { blockouts: Blockout[] }) {
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
    return (
        <div className="relative w-full h-full">
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="flex gap-3 w-full h-full overflow-x-auto overflow-y-hidden"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
            >
                <div className="flex flex-row space-x-3 w-max h-full p-2">
                    {blockouts.map((blockout) => (
                        <BlockoutItem key={blockout.id} blockout={blockout} />
                    ))}
                </div>
            </div>
            {showLeftShadow && (
                <div className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none" style={{
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'
                }}></div>
            )}
            {showRightShadow && (
                <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none" style={{
                    background: 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'
                }}></div>
            )}
        </div>
    );
}
