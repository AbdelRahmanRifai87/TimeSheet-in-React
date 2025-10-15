
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type { Page } from "../../Types/Page";
import { useDarkModeStore } from "../../Theme/useDarkModeStore";

interface SidebarMenuItemProps {
  page: Page;
  isCollapsed: boolean;
  isChild?: boolean;
  childrenMap?: Record<number, Page[]>;
  expandedMap: Record<number, boolean>;
  onToggleExpand: (id: number) => void;
  level?: number; // <-- depth of the item
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  page,
  isCollapsed,
  isChild = false,
  childrenMap,
  expandedMap,
  onToggleExpand,
  level = 0, // default root level
}) => {
  const location = useLocation();
  const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
  const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

  const hasChildren = childrenMap && childrenMap[page.id]?.length > 0;
  const isExpanded = expandedMap[page.id] || false;

  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const triggerRef = useRef<HTMLAnchorElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState<{ left: number; top: number } | null>(
    null
  );

  // Update popup position
  const updateCoords = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCoords({ left: Math.ceil(rect.right), top: Math.ceil(rect.top) });
  };

  // Close popup when mouse leaves both trigger & popup
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (
        !popupRef.current ||
        !triggerRef.current ||
        popupRef.current.contains(e.target as Node) ||
        triggerRef.current.contains(e.target as Node)
      )
        return;
      setIsPopupOpen(false);
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const isActive =
    location.pathname === page.path ||
    (page.path !== "/" && location.pathname.startsWith(page.path));

  const activeClasses = isActive
    ? isChild
      ? `text-white font-bold ${
          isCollapsed ? "flex justify-center items-center" : ""
        }`
      : `${
          isDarkMode ? "bg-gray-700 text-white" : "bg-white text-[#2186d4]"
        } font-medium   px-2 ${
          isCollapsed ? "flex justify-center items-center" : ""
        }`
    : isDarkMode
    ? `text-white hover:bg-gray-600/30 ${
        isCollapsed ? "flex justify-center items-center" : ""
      }`
    : `text-white hover:bg-white/10 ${
        isCollapsed ? "flex justify-center items-center" : ""
      }`;

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (isCollapsed && hasChildren) {
          setIsPopupOpen(true);
          updateCoords();
        }
      }}
      onMouseLeave={() => {
        if (isCollapsed) setIsPopupOpen(false);
      }}
    >
      <Link
        ref={triggerRef}
        to={page.path}
        className={`group flex w-full items-center rounded transition-colors ${
          isChild ? "border-b border-gray-600" : "border-b border-gray-400/40"
        } ${activeClasses}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault();
            onToggleExpand(page.id);
            if (isCollapsed) setIsPopupOpen((prev) => !prev);
          }
        }}
        style={
          isCollapsed
            ? { padding: "11px 12px" }
            : {
                paddingTop: isChild ? "3px" : "7px",
                paddingBottom: isChild ? "3px" : "7px",
                paddingLeft: `${15 + level * 16}px`, // <-- indentation for hierarchy
                paddingRight: "15px",
              }
        }
      >
        {isChild ? (
          <span className="w-6 text-center text-gray-400">
            {isHovered ? (
              <i
                className="fas fa-caret-right text-gray-300"
                style={{ fontSize: "12px" }}
              ></i>
            ) : (
              "-"
            )}
          </span>
        ) : (
          <div className="flex items-center">
            <i className={`${page.icon} w-4 text-sm`}></i>
          </div>
        )}
        {!isCollapsed && (
          <span className="ml-2 text-[13.5px]">{page.name}</span>
        )}
        {!isCollapsed && hasChildren && (
          <i
            className={`fas ${
              isExpanded ? "fa-chevron-up" : "fa-chevron-down"
            } ml-auto text-xs opacity-70 transition-transform duration-300`}
          ></i>
        )}
      </Link>

      {/* Collapsed sidebar popup */}
      {isCollapsed && isPopupOpen && coords && hasChildren && (
        <div
          ref={popupRef}
          style={{
            position: "fixed",
            left: `${coords.left}px`,
            top: `${coords.top}px`,
            minWidth: "160px",
            maxHeight: "300px",
            overflowY: "auto",
          }}
          className="z-40 shadow-lg bg-[#235e8b] p-2"
        >
          {childrenMap?.[page.id]?.map((child) => (
            <SidebarMenuItem
              key={child.id}
              page={child}
              isChild={true}
              isCollapsed={false} // style like expanded
              childrenMap={childrenMap}
              expandedMap={expandedMap}
              onToggleExpand={onToggleExpand}
              level={level + 1} // pass depth for popup too
            />
          ))}
        </div>
      )}

      {/* Expanded children in main sidebar */}
      {!isCollapsed && hasChildren && isExpanded && (
        <div className="relative w-full">
          {/* Vertical line for direct children */}
          {!isChild && (
            <div
              className="absolute left-9.5  top-0 bottom-0 w-[2px] bg-white/20"
              // shift line according to level
            />
          )}

          <div className="flex flex-col">
            {childrenMap?.[page.id]?.map((child) => (
              <div key={child.id} className="w-full">
                <SidebarMenuItem
                  page={child}
                  isChild={true}
                  isCollapsed={false}
                  childrenMap={childrenMap}
                  expandedMap={expandedMap}
                  onToggleExpand={onToggleExpand}
                  level={level + 1} // pass depth
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarMenuItem;
