import React from "react";
import { Link, useLocation } from "react-router-dom";
import type { Page } from "../../Types/Page";

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

  return (
    <Link
      to={page.path}
      className={`flex items-center py-3 mb-1 rounded transition-colors
    ${
      isChild
        ? isCollapsed
          ? "px-2 justify-center" // Collapsed subitem: centered icon only
          : "pl-10 px-4" // Expanded subitem: normal indentation
        : "px-4"
    } // Parent item styling
    ${
      isActive
        ? isChild
          ? "text-white font-bold"
          : "bg-white text-[#2186d4] font-medium mx-2 rounded-md px-2"
        : "text-white hover:bg-white/10"
    }`}
      onClick={hasChildren ? handleClick : undefined}
    >
      <i
        className={`${page.icon} w-6 ${
          isCollapsed && isChild
            ? `text-center ${isActive ? "font-black text-white" : ""}`
            : ""
        }`}
      ></i>
      {/* Only show text when sidebar is not collapsed */}
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
