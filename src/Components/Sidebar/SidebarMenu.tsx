import React, { useState } from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarDivider from "./SidebarDivider";
import type { Page } from "../../Types/Page";
import { useLocation } from "react-router-dom";

interface SidebarMenuProps {
  pages: Page[];
  isCollapsed: boolean;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ pages, isCollapsed }) => {
  const location = useLocation();
  const [expandedParents, setExpandedParents] = useState<number[]>([]);

  // Find which parent should be expanded based on current path
  React.useEffect(() => {
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

  // Toggle parent expansion - works for both collapsed and expanded sidebar
  const toggleParentExpansion = (parentId: number) => {
    setExpandedParents((prev) =>
      prev.includes(parentId)
        ? prev.filter((id) => id !== parentId)
        : [...prev, parentId]
    );
  };

  // Define the menu items after which a divider should appear
  const dividerAfterItems = [
    "Dashboard",
    "Users",
    "Supported living",
    "IR's & Logs",
    "Documents",
  ];

  // Group items by parent ID
  const parentItems = pages.filter((page) => !page.parentId);

  // Create map of parent IDs to child items
  const childrenMap: Record<number, Page[]> = {};
  pages
    .filter((page) => page.parentId)
    .forEach((page) => {
      if (!childrenMap[page.parentId!]) {
        childrenMap[page.parentId!] = [];
      }
      childrenMap[page.parentId!].push(page);
    });

  // Check if a parent has an active child
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

            {/* Show subitems inline when:
                1. Parent is expanded (for both collapsed and expanded sidebar), OR
                2. Sidebar is collapsed and parent has an active child */}
            {childrenMap[page.id] &&
              (expandedParents.includes(page.id) ||
                (isCollapsed && hasActiveChild(page.id))) && (
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isCollapsed ? "bg-[#1659a3]/30 mx-1 rounded-md" : "relative"
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
                  {/* Vertical line only for expanded sidebar */}
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
                        {/* White highlight for active subitem (only when sidebar is expanded) */}
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

            {/* Add divider after specific items */}
            {dividerAfterItems.includes(page.name) && <SidebarDivider />}
          </React.Fragment>
        ))
      ) : (
        <div className="text-white/70 p-4 text-center">
          Loading menu items...
        </div>
      )}
    </nav>
  );
};

export default SidebarMenu;
