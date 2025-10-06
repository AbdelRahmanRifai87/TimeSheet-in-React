
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
  const [expandedParents, setExpandedParents] = useState<number[]>([]);
  const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
  const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

  // Find which parent should be expanded based on current path
  useEffect(() => {
    const currentPath = location.pathname;
    const activeChildPage = pages.find(
      (page) => page.path === currentPath && page.parentId
    );

    if (activeChildPage && activeChildPage.parentId) {
      setExpandedParents((prev) =>
        prev.includes(activeChildPage.parentId!)
          ? prev
          : [...prev, activeChildPage.parentId!]
      );
    }
  }, [location.pathname, pages]);

  // Toggle parent expansion
  const toggleParentExpansion = (parentId: number) => {
    setExpandedParents((prev) =>
      prev.includes(parentId)
        ? prev.filter((id) => id !== parentId)
        : [...prev, parentId]
    );
  };

  const dividerAfterItems = [
    "Dashboard",
    "Users",
    "Supported living",
    "IR's & Logs",
    "Documents",
  ];

  const parentItems = pages.filter((page) => !page.parentId);

  const childrenMap: Record<number, Page[]> = {};
  pages
    .filter((page) => page.parentId)
    .forEach((page) => {
      if (!childrenMap[page.parentId!]) {
        childrenMap[page.parentId!] = [];
      }
      childrenMap[page.parentId!].push(page);
    });

  const hasActiveChild = (parentId: number) => {
    return childrenMap[parentId]?.some(
      (child) =>
        location.pathname === child.path ||
        (child.path !== "/" && location.pathname.startsWith(child.path))
    );
  };

  return (
    <nav className="sideBar-menu flex-1 overflow-y-auto scrollbar-hide scroll-smooth">
      {parentItems.length > 0 ? (
        parentItems.map((page) => (
          <React.Fragment key={page.id}>
            <SidebarMenuItem
              page={page}
              isCollapsed={isCollapsed}
              childrenMap={childrenMap}
              onToggleExpand={() => toggleParentExpansion(page.id)}
              isExpanded={expandedParents.includes(page.id)}
            />

            {childrenMap[page.id] &&
              (expandedParents.includes(page.id) ||
                (isCollapsed && hasActiveChild(page.id))) && (
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isCollapsed
                      ? isDarkMode
                        ? "bg-gray-800 mx-1 rounded-md"
                        : "bg-[#1659a3] mx-1 rounded-md"
                      : "relative"
                  }`}
                  style={{
                    maxHeight:
                      expandedParents.includes(page.id) ||
                      (isCollapsed && hasActiveChild(page.id))
                        ? `${
                            childrenMap[page.id]?.length *
                              (isCollapsed ? 44 : 48) +
                            8
                          }px`
                        : "0px",
                    opacity:
                      expandedParents.includes(page.id) ||
                      (isCollapsed && hasActiveChild(page.id))
                        ? 1
                        : 0,
                  }}
                >
                  {!isCollapsed && (
                    <div
                      className="absolute left-8 top-0 bottom-0 w-px bg-white/30"
                      style={{ zIndex: 0 }}
                    />
                  )}

                  {childrenMap[page.id].map((childPage) => {
                    const isActiveChild =
                      location.pathname === childPage.path ||
                      (childPage.path !== "/" &&
                        location.pathname.startsWith(childPage.path));

                    return (
                      <div key={childPage.id} className="relative">
                        {!isCollapsed && isActiveChild && (
                          <div
                            className="absolute left-8 w-px bg-white"
                            style={{ top: "0", height: "48px", zIndex: 1 }}
                          />
                        )}
                        <SidebarMenuItem
                          page={childPage}
                          isCollapsed={isCollapsed}
                          isChild={true}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

            {dividerAfterItems.includes(page.name) && <SidebarDivider />}
          </React.Fragment>
        ))
      ) : (
        <div
          className={`p-4 text-center ${
            isDarkMode ? "text-white/70" : "text-white/70"
          }`}
        >
          Loading menu items...
        </div>
      )}
    </nav>
  );
};

export default SidebarMenu;
