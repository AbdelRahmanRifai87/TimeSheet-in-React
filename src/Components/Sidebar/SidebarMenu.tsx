import React, { useState, useEffect } from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarDivider from "./SidebarDivider";
import type { Page } from "../../Types/Page";
import { useLocation } from "react-router-dom";
import { useDarkModeStore } from "../../Theme/useDarkModeStore";

interface SidebarMenuProps {
  pages: Page[];
  isCollapsed: boolean;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ pages, isCollapsed }) => {
  const location = useLocation();
  const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
  const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

  // Centralized expansion state
  const [expandedMap, setExpandedMap] = useState<Record<number, boolean>>({});

  const toggleExpand = (id: number) => {
    setExpandedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Build children map
  const childrenMap: Record<number, Page[]> = {};
  pages.forEach((page) => {
    if (page.parentId) {
      if (!childrenMap[page.parentId]) childrenMap[page.parentId] = [];
      childrenMap[page.parentId].push(page);
    }
  });

  // Expand parents if current path is nested
  useEffect(() => {
    const expandParents = (pageId?: number) => {
      if (!pageId) return;
      const parentPage = pages.find((p) => p.id === pageId)?.parentId;
      if (parentPage) {
        setExpandedMap((prev) => ({ ...prev, [parentPage]: true }));
        expandParents(parentPage);
      }
    };

    const activePage = pages.find((p) => location.pathname.startsWith(p.path));
    if (activePage) expandParents(activePage.id);
  }, [location.pathname, pages]);

  const parentItems = pages.filter((page) => !page.parentId);

  const dividerAfterItems = [
    "Dashboard",
    "Users",
    "Supported living",
    "IR's & Logs",
    "Documents",
  ];

  return (
    <nav className="sideBar-menu flex-1 scroll-smooth">
      {parentItems.length > 0 ? (
        parentItems.map((page) => (
          <React.Fragment key={page.id}>
            <SidebarMenuItem
              page={page}
              isCollapsed={isCollapsed}
              childrenMap={childrenMap}
              expandedMap={expandedMap}
              onToggleExpand={toggleExpand}
            />

            {dividerAfterItems.includes(page.name) && <SidebarDivider />}
          </React.Fragment>
        ))
      ) : (
        <div
          className={`p-4 text-center ${
            isDarkMode ? "text-white/70" : "text-black/70"
          }`}
        >
          Loading menu items...
        </div>
      )}
    </nav>
  );
};

export default SidebarMenu;
