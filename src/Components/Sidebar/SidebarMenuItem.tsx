import React from "react";
import { Link, useLocation } from "react-router-dom";
import type { Page } from "../../Types/Page";
import { useDarkModeStore } from "../../Theme/useDarkModeStore";

interface SidebarMenuItemProps {
  page: Page;
  isCollapsed: boolean;
  isChild?: boolean;
  childrenMap?: Record<number, Page[]>;
  onToggleExpand?: () => void;
  isExpanded?: boolean;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  page,
  isCollapsed,
  isChild = false,
  childrenMap,
  onToggleExpand,
  isExpanded = false,
}) => {
  const location = useLocation();
  const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
  const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

  const isActive =
    location.pathname === page.path ||
    (page.path !== "/" && location.pathname.startsWith(page.path));

  const hasChildren = childrenMap && childrenMap[page.id]?.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren && onToggleExpand) {
      e.preventDefault();
      onToggleExpand();
    }
  };

  const baseClasses = isChild
    ? isCollapsed
      ? "px-2 justify-center"
      : "pl-10 px-4"
    : "px-4";

  const activeClasses = isActive
    ? isChild
      ? "text-white font-bold"
      : `${
          isDarkMode ? "bg-gray-700 text-white" : "bg-white text-[#2186d4]"
        } font-medium mx-2 rounded-md px-2`
    : isDarkMode
    ? "text-white hover:bg-gray-600/30"
    : "text-white hover:bg-white/10";

  return (
    <Link
      to={page.path}
      className={`flex items-center py-3 mb-1 rounded transition-colors ${baseClasses} ${activeClasses}`}
      onClick={hasChildren ? handleClick : undefined}
    >
      <i
        className={`${page.icon} w-6 ${
          isCollapsed && isChild
            ? `text-center ${isActive ? "font-black text-white" : ""}`
            : ""
        }`}
      ></i>
      {!isCollapsed && <span className="ml-2">{page.name}</span>}
      {!isCollapsed && !isChild && hasChildren && (
        <i
          className={`fas ${
            isExpanded ? "fa-chevron-up" : "fa-chevron-down"
          } ml-auto text-xs opacity-70 transition-transform duration-300`}
        ></i>
      )}
    </Link>
  );
};

export default SidebarMenuItem;
