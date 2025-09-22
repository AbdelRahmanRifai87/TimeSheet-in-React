import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import type { Page } from "../Types/Page";

interface SidebarContextType {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  menuPages: Page[];
  setMenuPages: React.Dispatch<React.SetStateAction<Page[]>>;
}

// Create context with default values
const SidebarContext = createContext<SidebarContextType>({
  isCollapsed: false,
  setIsCollapsed: () => {},
  menuPages: [],
  setMenuPages: () => {},
});

// Custom hook to use the sidebar context
export const useSidebarContext = () => useContext(SidebarContext);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [menuPages, setMenuPages] = useState<Page[]>([]);
  const value = {
    isCollapsed,
    setIsCollapsed,
    menuPages,
    setMenuPages,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
export default SidebarContext;
