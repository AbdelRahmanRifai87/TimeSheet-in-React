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
      className={`flex items-center px-4 py-3 mb-1 rounded transition-colors
    ${isChild ? "pl-10" : ""}
    ${
      isActive
        ? isChild
          ? "text-white font-bold hover:bg-white/10" // Active subitem: bold white text, no bg
          : hasChildren
          ? "text-white font-medium mx-2 rounded-md px-2" // Active parent: white bg
          : "bg-white text-[#2186d4] mt-1 mx-2 rounded-md px-2" // Active item with no children: white bg
        : "text-white/70 hover:bg-white/10  "
    }`}
      onClick={hasChildren ? handleClick : undefined}
    >
      <i className={`${page.icon} w-6`}></i>
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
