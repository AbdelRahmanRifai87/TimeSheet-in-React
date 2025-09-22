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

  // Toggle parent expansion
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

  return (
    <nav className="sideBar-menu flex-1 overflow-y-auto scrollbar-hide scroll-smooth ease-in-out relativeease-in-out relative">
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

            {/* Wrapper div with transition for children items */}
            <div
              className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
                !isCollapsed &&
                expandedParents.includes(page.id) &&
                childrenMap[page.id]
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {childrenMap[page.id] && (
                <>
                  {/* Vertical divider line beside subitems */}
                  <div
                    className="absolute left-8 top-0 bottom-0 w-px bg-white/30"
                    style={{ zIndex: 0 }}
                  />
                  {childrenMap[page.id].map((childPage) => {
                    const isActiveChild =
                      location.pathname === childPage.path ||
                      (childPage.path !== "/" &&
                        location.pathname.startsWith(childPage.path));
                    return (
                      <div key={childPage.id} className="relative">
                        {/* White highlight for active subitem's vertical line portion */}
                        {isActiveChild && (
                          <div
                            className="absolute left-8 w-px bg-white"
                            style={{ top: "0", height: "50px", zIndex: 1 }}
                          />
                        )}
                        <SidebarMenuItem
                          key={childPage.id}
                          page={childPage}
                          isCollapsed={isCollapsed}
                          isChild={true}
                        />
                      </div>
                    );
                  })}
                </>
              )}
            </div>

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
