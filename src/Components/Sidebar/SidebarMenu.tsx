
import React, { useState, useEffect } from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarDivider from "./SidebarDivider";
import type { Page } from "../../Types/Page";
import { useLocation } from "react-router-dom";
import { useDarkModeStore } from "../../Theme/useDarkModeStore";

interface SidebarMenuProps {
  pages: Page[];
  isCollapsed: boolean;
  customTheme?: {
    background: string;
    text: string;
    button: string;
    hover?: string;
  };
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  pages,
  isCollapsed,
  customTheme,
}) => {
  const location = useLocation();

  // --------------------
  // Get sidebar styles from store
  // --------------------
  const styles = useDarkModeStore((state) => state.styles);

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

  // Expand parents of active page
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

  // const parentItems = pages.filter((page) => !page.parentId);
  const parentItems = pages.filter(
    (page) =>
      !page.parentId && page.id !== 2 && page.id !== 15 && page.id !== 14
  );

  const dividerAfterItems = [
    "Dashboard",
    "Users",
    "Supported living",
    "IR's & Logs",
    "Documents",
  ];

  return (
    <nav
      className="sideBar-menu flex-1 scroll-smooth"
      style={{ backgroundColor: customTheme?.background || styles.sidebarBg }}
    >
      {parentItems.length > 0 ? (
        parentItems.map((page, index) => (
          <React.Fragment key={page.id}>
            <SidebarMenuItem
              page={page}
              isCollapsed={isCollapsed}
              childrenMap={childrenMap}
              expandedMap={expandedMap}
              onToggleExpand={toggleExpand}
              customTheme={
                customTheme || {
                  background: styles.sidebarBg,
                  text: styles.sidebarText,
                  button: styles.sidebarBtn,
                  hover: styles.sidebarHover,
                }
              }
            />
            {index < parentItems.length - 1 && (
              <hr
                style={{
                  border: "none",
                  borderTop: `1px solid ${styles.sidebarBtn}`, // use button color for subtle line
                  // spacing
                  opacity: 0.3,
                }}
              />
            )}
          </React.Fragment>
        ))
      ) : (
        <div
          className="p-4 text-center"
          style={{
            color: customTheme?.text || styles.sidebarText,
          }}
        >
          Loading menu items...
        </div>
      )}
    </nav>
  );
};

export default SidebarMenu;
