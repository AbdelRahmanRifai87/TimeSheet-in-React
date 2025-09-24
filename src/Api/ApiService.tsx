import type { Page } from "../Types/Page";
import type { UserPagePermission } from "../Types/UserPagePermission";
import type { Role } from "../Types/Role";
import type { User } from "../Types/User";

const mockPages: Page[] = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    icon: "fas fa-tachometer-alt",
    order: 1,
    isActive: true,
  },
  {
    id: 2,
    name: "Yours Details",
    path: "/details",
    icon: "fas fa-id-card",
    order: 2,
    isActive: true,
  },
  {
    id: 21,
    name: "General",
    path: "/details/general",
    icon: "fas fa-user",
    order: 1,
    isActive: true,
    parentId: 2,
  },
  {
    id: 22,
    name: "Switch to Details",
    path: "/details/switchtodetails",
    icon: "fas fa-user-cog",
    order: 1,
    isActive: true,
    parentId: 2,
  },
  {
    id: 3,
    name: "Task Manager",
    path: "/tasks-manager",
    icon: "fas fa-tasks",
    order: 3,
    isActive: true,
  },
  {
    id: 4,
    name: "Users",
    path: "/users",
    icon: "fas fa-users",
    order: 4,
    isActive: true,
  },
  {
    id: 5,
    name: "Locations",
    path: "/locations",
    icon: "fas fa-map-marker-alt",
    order: 5,
    isActive: true,
  },
  {
    id: 6,
    name: "Mobile",
    path: "/mobile",
    icon: "fas fa-mobile-alt",
    order: 6,
    isActive: true,
  },
  {
    id: 7,
    name: "Supported living",
    path: "/supported-living",
    icon: "fas fa-user",
    order: 7,
    isActive: true,
  },
  {
    id: 8,
    name: "Reports",
    path: "/reports",
    icon: "fas fa-file",
    order: 8,
    isActive: true,
  },
  {
    id: 9,
    name: "Rosters",
    path: "/rosters",
    icon: "fas fa-calendar",
    order: 9,
    isActive: true,
  },
  {
    id: 10,
    name: "Timesheets",
    path: "/timesheets",
    icon: "fas fa-clock",
    order: 10,
    isActive: true,
  },
  {
    id: 11,
    name: "IR's & Logs",
    path: "/irs-logs",
    icon: "fas fa-book",
    order: 11,
    isActive: true,
  },
  {
    id: 12,
    name: "Documents",
    path: "/documents",
    icon: "fas fa-file",
    order: 12,
    isActive: true,
  },
  {
    id: 13,
    name: "Messaging",
    path: "/messaging",
    icon: "fas fa-comments",
    order: 13,
    isActive: true,
  },
];
const mockRoles: Role[] = [
  {
    id: 1,
    name: "Admin",
    description: "Administrator with full access",
    permissions: ["view_users", "edit_users", "delete_users", "view_reports"],
  },
  {
    id: 2,
    name: "Manager",
    description: "Manager with limited access",
    permissions: ["view_users", "edit_users"],
  },
  {
    id: 3,
    name: "User",
    description: "Regular user with basic access",
    permissions: ["view_users"],
  },
];

const mockUsers: User[] = [
  {
    id: 1,
    username: "admin",
    email: "admin@example.com",
    role: mockRoles[0],
    roleId: 1,
  },
  {
    id: 2,
    username: "manager",
    email: "manager@example.com",
    role: mockRoles[1],
    roleId: 2,
  },
  {
    id: 3,
    username: "user",
    email: "user@example.com",
    role: mockRoles[2],
    roleId: 3,
  },
];

//define API base URL
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";
/**
 * Service for handling API Requests
 */
export const ApiService = {
  /**
   * PAGES
   */

  // get all menu pages
  getMenuPages: async (): Promise<Page[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockPages), 500); // Simulate network delay
      });
    }

    //for production, fetch from API
    try {
      const response = await fetch(`${API_BASE_URL}/pages`);
      if (!response.ok) {
        throw new Error("Failed to fetch pages");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching pages:", error);
      throw error;
    }
  },

  //Get pages by user role
  getPagesByUserRole: async (roleId: number): Promise<Page[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
      return new Promise((resolve) => {
        //admin see all pages, other sees limited
        const pages =
          roleId === 1
            ? mockPages
            : mockPages.filter((_p, index) => index < 10); //first 10 pages
        setTimeout(() => resolve(pages), 300); // Simulate network delay
      });
    }
    // for production , with real API
    try {
      const response = await fetch(`${API_BASE_URL}/roles/${roleId}/pages`);
      if (!response.ok) {
        throw new Error("Failed to fetch pages for role");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching pages for role:", error);
      throw error;
    }
  },

  /**
   * Create a new page
   */
  createPage: async (page: Omit<Page, "id">): Promise<Page> => {
    // For Production with real API
    try {
      const response = await fetch(`${API_BASE_URL}/pages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(page),
      });
      if (!response.ok) {
        throw new Error("Failed to create page");
      }
      return await response.json();
    } catch (error) {
      console.error("Error creating page:", error);
      throw error;
    }
  },

  /**
   * Update an existing page
   */
  updatePage: async (id: number, page: Partial<Page>): Promise<Page> => {
    try {
      const response = await fetch(`${API_BASE_URL}/pages/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(page),
      });
      if (!response.ok) {
        throw new Error("Failed to update page");
      }
      return await response.json();
    } catch (error) {
      console.error("Error updating page:", error);
      throw error;
    }
  },

  /**
   * DELETE a page
   */
  deletePage: async (id: number): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/pages/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete page");
      }
      return;
    } catch (error) {
      console.error("Error deleting page:", error);
      throw error;
    }
  },

  /**
   * USERS
   */
  /**
   * Get user by Credentials (username & password)
   */
  loginUser: async (username: string, password: string): Promise<User> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = mockUsers.find(
            (u) => u.username === username /* && u.password === password */
          );
          if (user) {
            resolve(user);
          } else {
            reject(new Error("Invalid credentials"));
          }
        }, 500); // Simulate network delay
      });
    }

    // For production with real API
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }
      return await response.json();
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  },
  /**
   * Get user Permissions
   */
  getUserPermissions: async (userId: number): Promise<UserPagePermission[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
      return new Promise((resolve) => {
        const permissions: UserPagePermission[] = mockPages.map((page) => ({
          userId,
          pageId: page.id,
          canView: true,
          canEdit: userId === 1, // Only admin can edit
          canDelete: userId === 1, // Only admin can delete
        }));
        setTimeout(() => resolve(permissions), 300); // Simulate network delay
      });
    }
    // For production with real API
    try {
      const response = await fetch(
        `${API_BASE_URL}/users/${userId}/permissions`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user permissions");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching user permissions:", error);
      throw error;
    }
  },
  //Roles
  /**
   * Get all roles
   */
  getRoles: async (): Promise<Role[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockRoles), 300); // Simulate network delay
      });
    }

    // For production with real API
    try {
      const response = await fetch(`${API_BASE_URL}/roles`);
      if (!response.ok) {
        throw new Error("Failed to fetch roles");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching roles:", error);
      throw error;
    }
  },
};
export default ApiService;
