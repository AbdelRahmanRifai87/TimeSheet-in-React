import type { ReactNode } from "react";

export interface Page {
  id: number;
  name: string;
  path: string;
  icon: ReactNode;
  parentId?: number; // Optional parent page ID for nested pages
  order: number; // Order for sorting
  isActive: boolean; // Indicates if the page is active
  requiredRoles?: number[]; // Optional array of role IDs that can access this page
  iconActive?: React.ReactNode;
}
