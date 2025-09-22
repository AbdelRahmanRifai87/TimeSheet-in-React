export interface SidebarMenuItem {
  label: string;
  icon: string;
  path: string;
  order: number;
  isActive: boolean;
}

export interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SidebarContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  menuItems: SidebarMenuItem[];
}
