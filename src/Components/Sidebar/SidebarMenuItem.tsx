import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type { Page } from "../../Types/Page";

interface SidebarMenuItemProps {
  page: Page;
  isCollapsed: boolean;
  isChild?: boolean;
  childrenMap?: Record<number, Page[]>;
  expandedMap: Record<number, boolean>;
  onToggleExpand: (id: number) => void;
  level?: number; // depth of the item
  customTheme?: {
    background: string;
    text: string;
    button: string;
    hover?: string;
  };
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  page,
  isCollapsed,
  isChild = false,
  childrenMap,
  expandedMap,
  onToggleExpand,
  level = 0,
  customTheme,
}) => {
  const location = useLocation();

  const hasChildren = childrenMap && childrenMap[page.id]?.length > 0;
  const isExpanded = expandedMap[page.id] || false;

  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const triggerRef = useRef<HTMLAnchorElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState<{ left: number; top: number } | null>(
    null
  );

  const updateCoords = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCoords({ left: Math.ceil(rect.right), top: Math.ceil(rect.top) });
  };

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

  // -------------------------------
  // Use theme from props
  // -------------------------------
  const textColor = customTheme?.text || "#ffffff";
  // const btnBg = customTheme?.button || "rgba(255,255,255,0.1)";
  const hoverBg = "rgba(255,255,255,0.1)";
  const activeBg = isActive ? hoverBg : "transparent";
  const activeText = isActive ? textColor : textColor;
  const hoverEffect = isHovered ? hoverBg : activeBg;

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
          isChild
            ? "border-b border-gray-400/40"
            : "border-b border-gray-400/40"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault();
            onToggleExpand(page.id);
            if (isCollapsed) setIsPopupOpen((prev) => !prev);
          }
        }}
        style={{
          backgroundColor: hoverEffect, // ← use hoverEffect
          color: activeText, // always follow theme
          paddingLeft: `${15 + level * 16}px`,
          paddingRight: "15px",
          paddingTop: isChild ? "3px" : "7px",
          paddingBottom: isChild ? "3px" : "7px",
        }}
      >
        {/* Icon / Dash */}
        {level === 0 ? (
          // Parent: show main icon
          <div className="flex items-center w-6 justify-center">
            <i className={`${page.icon} w-4 text-sm`}></i>
          </div>
        ) : level === 1 ? (
          // First-level child: dash, change to caret on hover
          <span className="w-6 text-center text-gray-400">
            {isHovered ? (
              <i
                className="fas fa-caret-right text-gray-300"
                style={{ fontSize: "12px" }}
              />
            ) : (
              "-"
            )}
          </span>
        ) : (
          // Levels >= 2: always show caret-right icon
          <span className="w-6 text-center text-gray-400">
            <i
              className="fas fa-caret-right text-gray-300"
              style={{ fontSize: "12px" }}
            />
          </span>
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
            backgroundColor: customTheme?.background || "#235e8b",
            color: customTheme?.text || "#ffffff",
            zIndex: 40,
            padding: "0.5rem",
          }}
          className="shadow-lg "
        >
          {childrenMap?.[page.id]?.map((child) => (
            <SidebarMenuItem
              key={child.id}
              page={child}
              isChild={true}
              isCollapsed={false}
              childrenMap={childrenMap}
              expandedMap={expandedMap}
              onToggleExpand={onToggleExpand}
              level={level + 1}
              customTheme={customTheme}
            />
          ))}
        </div>
      )}

      {/* Expanded children in main sidebar */}
      {!isCollapsed && hasChildren && isExpanded && (
        <div className="relative w-full">
          {!isChild && (
            <div
              className="absolute left-9.5 top-0 bottom-0 w-[2px]"
              style={{ backgroundColor: hoverBg }}
            />
          )}
          <div className="flex flex-col">
            {childrenMap?.[page.id]?.map((child) => (
              <div key={child.id} className="w-full relative">
                <hr
                  style={{
                    border: "none",
                    borderTop: `1px solid ${hoverBg}`,
                    opacity: 0.3,
                    margin: 0,
                  }}
                />
                <SidebarMenuItem
                  customTheme={customTheme}
                  page={child}
                  isChild={true}
                  isCollapsed={false}
                  childrenMap={childrenMap}
                  expandedMap={expandedMap}
                  onToggleExpand={onToggleExpand}
                  level={level + 1}
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
