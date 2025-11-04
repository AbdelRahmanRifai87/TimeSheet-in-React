import type { Page } from "../Types/Page";
import type { UserPagePermission } from "../Types/UserPagePermission";
import type { Role } from "../Types/Role";
import type { User } from "../Types/User";
import {
  IconAlertHexagon,
  IconCalendarWeek,
  IconClipboardList,
  IconDeviceMobile,
  IconFileAnalytics,
  IconFileDescription,
  IconHome,
  IconLayoutDashboard,
  IconLogout,
  IconMail,
  IconMapPin,
  IconReport,
  IconUser,
  IconUsers,
  IconLayoutDashboardFilled,
} from "@tabler/icons-react";

// const mockPages: Page[] = [
//   {
//     id: 1,
//     name: "Dashboard",
//     path: "/dashboard",
//     icon: "fas fa-tachometer-alt",
//     order: 1,
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: "Yours Details",
//     path: "/details",
//     icon: "fas fa-id-card",
//     order: 2,
//     isActive: true,
//   },
//   {
//     id: 21,
//     name: "General",
//     path: "/details/general",
//     icon: "fas fa-user",
//     order: 1,
//     isActive: true,
//     parentId: 2,
//   },
//   {
//     id: 22,
//     name: "Switch to Details",
//     path: "/details/switchtodetails",
//     icon: "fas fa-user-cog",
//     order: 1,
//     isActive: true,
//     parentId: 2,
//   },
//   {
//     id: 3,
//     name: "Task Manager",
//     path: "/tasks-manager",
//     icon: "fas fa-tasks",
//     order: 3,
//     isActive: true,
//   },
//   {
//     id: 4,
//     name: "Users",
//     path: "/users",
//     icon: "fas fa-users",
//     order: 4,
//     isActive: true,
//   },
//   {
//     id: 5,
//     name: "Locations",
//     path: "/locations",
//     icon: "fas fa-map-marker-alt",
//     order: 5,
//     isActive: true,
//   },
//   {
//     id: 6,
//     name: "Mobile",
//     path: "/mobile",
//     icon: "fas fa-mobile-alt",
//     order: 6,
//     isActive: true,
//   },
//   {
//     id: 7,
//     name: "Supported living",
//     path: "/supported-living",
//     icon: "fas fa-user",
//     order: 7,
//     isActive: true,
//   },
//   {
//     id: 8,
//     name: "Reports",
//     path: "/reports",
//     icon: "fas fa-file",
//     order: 8,
//     isActive: true,
//   },
//   {
//     id: 9,
//     name: "Rosters",
//     path: "/rosters",
//     icon: "fas fa-calendar",
//     order: 9,
//     isActive: true,
//   },
//   {
//     id: 10,
//     name: "Timesheets",
//     path: "/timesheets",
//     icon: "fas fa-clock",
//     order: 10,
//     isActive: true,
//   },
//   {
//     id: 11,
//     name: "IR's & Logs",
//     path: "/irs-logs",
//     icon: "fas fa-book",
//     order: 11,
//     isActive: true,
//   },
//   {
//     id: 12,
//     name: "Documents",
//     path: "/documents",
//     icon: "fas fa-file",
//     order: 12,
//     isActive: true,
//   },
//   {
//     id: 13,
//     name: "Messaging",
//     path: "/messaging",
//     icon: "fas fa-comments",
//     order: 13,
//     isActive: true,
//   },
// ];
// const mockPages: Page[] = [
//   {
//     id: 1,
//     name: "Dashboard",
//     path: "/dashboard",
//     icon: "fas fa-tachometer-alt",
//     order: 1,
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: "Your Details",
//     path: "/details",
//     icon: "fas fa-id-card",
//     order: 2,
//     isActive: true,
//   },
//   // Children of Your Details
//   {
//     id: 21,
//     name: "General",
//     path: "/details/general",
//     icon: "fas fa-user",
//     order: 1,
//     isActive: true,
//     parentId: 2,
//   },
//   {
//     id: 22,
//     name: "Switch to Personnel",
//     path: "/details/switch-to-personnel",
//     icon: "fas fa-user-cog",
//     order: 2,
//     isActive: true,
//     parentId: 2,
//   },

//   {
//     id: 3,
//     name: "Task Manager",
//     path: "/tasks-manager",
//     icon: "fas fa-tasks",
//     order: 3,
//     isActive: true,
//   },
//   // Children of Task Manager
//   {
//     id: 31,
//     name: "Create New Task",
//     path: "/tasks-manager/create-new-task",
//     icon: "fas fa-plus-circle",
//     order: 1,
//     isActive: true,
//     parentId: 3,
//   },
//   {
//     id: 32,
//     name: "Tasks Set by You",
//     path: "/tasks-manager/tasks-set-by-you",
//     icon: "fas fa-tasks",
//     order: 2,
//     isActive: true,
//     parentId: 3,
//   },
//   {
//     id: 33,
//     name: "Tasks Assigned to You",
//     path: "/tasks-manager/tasks-assigned-to-you",
//     icon: "fas fa-user-check",
//     order: 3,
//     isActive: true,
//     parentId: 3,
//   },
//   {
//     id: 34,
//     name: "Open Task Report",
//     path: "/tasks-manager/open-task-report",
//     icon: "fas fa-file-alt",
//     order: 4,
//     isActive: true,
//     parentId: 3,
//   },
//   {
//     id: 35,
//     name: "Add/Edit Classifications",
//     path: "/tasks-manager/add-edit-classifications",
//     icon: "fas fa-edit",
//     order: 5,
//     isActive: true,
//     parentId: 3,
//   },

//   {
//     id: 4,
//     name: "Users",
//     path: "/users",
//     icon: "fas fa-users",
//     order: 4,
//     isActive: true,
//   },
//   // Children of Users
//   {
//     id: 41,
//     name: "Search Users",
//     path: "/users/search-users",
//     icon: "fas fa-search",
//     order: 1,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 42,
//     name: "Personnel Privileges",
//     path: "/users/personnel-privileges",
//     icon: "fas fa-user-shield",
//     order: 2,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 43,
//     name: "Quick Add User",
//     path: "/users/quick-add-user",
//     icon: "fas fa-user-plus",
//     order: 3,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 44,
//     name: "Onboarder",
//     path: "/users/onboarder",
//     icon: "fas fa-user-cog",
//     order: 4,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 45,
//     name: "Daily Availability",
//     path: "/users/daily-availability",
//     icon: "fas fa-calendar-check",
//     order: 5,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 46,
//     name: "Change Access",
//     path: "/users/change-access",
//     icon: "fas fa-user-lock",
//     order: 6,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 47,
//     name: "Personnel Licenses",
//     path: "/users/personnel-licenses",
//     icon: "fas fa-id-badge",
//     order: 7,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 48,
//     name: "Req'd Licences",
//     path: "/users/required-licenses",
//     icon: "fas fa-id-card-alt",
//     order: 8,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 49,
//     name: "Enter Blockout",
//     path: "/users/enter-blockout",
//     icon: "fas fa-ban",
//     order: 9,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 410,
//     name: "Set No Block Dates",
//     path: "/users/set-no-block-dates",
//     icon: "fas fa-calendar-minus",
//     order: 10,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 411,
//     name: "Rank By Personnel",
//     path: "/users/rank-by-personnel",
//     icon: "fas fa-sort",
//     order: 11,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 412,
//     name: "Rank By Location",
//     path: "/users/rank-by-location",
//     icon: "fas fa-map-marker-alt",
//     order: 12,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 413,
//     name: "Contractors",
//     path: "/users/contractors",
//     icon: "fas fa-users-cog",
//     order: 13,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 414,
//     name: "Check a Security Licence",
//     path: "/users/check-security-license",
//     icon: "fas fa-id-card",
//     order: 14,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 415,
//     name: "Search ID Numbers",
//     path: "/users/search-id-numbers",
//     icon: "fas fa-search",
//     order: 15,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 416,
//     name: "Roles",
//     path: "/users/roles",
//     icon: "fas fa-user-tag",
//     order: 16,
//     isActive: true,
//     parentId: 4,
//   },
//   {
//     id: 417,
//     name: "HR Reports",
//     path: "/users/hr-reports",
//     icon: "fas fa-file-alt",
//     order: 17,
//     isActive: true,
//     parentId: 4,
//   },

//   {
//     id: 5,
//     name: "Locations",
//     path: "/locations",
//     icon: "fas fa-map-marker-alt",
//     order: 5,
//     isActive: true,
//   },
//   // Children of Locations
//   {
//     id: 51,
//     name: "Add a Location",
//     path: "/locations/add-location",
//     icon: "fas fa-plus-circle",
//     order: 1,
//     isActive: true,
//     parentId: 5,
//   },
//   {
//     id: 52,
//     name: "Locations",
//     path: "/locations/locations",
//     icon: "fas fa-map-marker-alt",
//     order: 2,
//     isActive: true,
//     parentId: 5,
//   },
//   {
//     id: 53,
//     name: "Location Groups",
//     path: "/locations/location-groups",
//     icon: "fas fa-layer-group",
//     order: 3,
//     isActive: true,
//     parentId: 5,
//   },
//   {
//     id: 54,
//     name: "Location Categories",
//     path: "/locations/location-categories",
//     icon: "fas fa-list",
//     order: 4,
//     isActive: true,
//     parentId: 5,
//   },
//   {
//     id: 55,
//     name: "Location Regions",
//     path: "/locations/location-regions",
//     icon: "fas fa-globe",
//     order: 5,
//     isActive: true,
//     parentId: 5,
//   },
//   {
//     id: 56,
//     name: "Local Public Holidays",
//     path: "/locations/local-public-holidays",
//     icon: "fas fa-calendar-alt",
//     order: 6,
//     isActive: true,
//     parentId: 5,
//   },
//   {
//     id: 57,
//     name: "Events",
//     path: "/locations/events",
//     icon: "fas fa-calendar",
//     order: 7,
//     isActive: true,
//     parentId: 5,
//   },
//   {
//     id: 58,
//     name: "Import Event",
//     path: "/locations/import-event",
//     icon: "fas fa-file-import",
//     order: 8,
//     isActive: true,
//     parentId: 5,
//   },
//   {
//     id: 59,
//     name: "Resources Config",
//     path: "/locations/resources-config",
//     icon: "fas fa-cogs",
//     order: 9,
//     isActive: true,
//     parentId: 5,
//   },
//   {
//     id: 510,
//     name: "Resources Outstanding",
//     path: "/locations/resources-outstanding",
//     icon: "fas fa-exclamation-circle",
//     order: 10,
//     isActive: true,
//     parentId: 5,
//   },
//   {
//     id: 511,
//     name: "Key Register",
//     path: "/locations/key-register",
//     icon: "fas fa-key",
//     order: 11,
//     isActive: true,
//     parentId: 5,
//   },
//   {
//     id: 512,
//     name: "Purchase Orders",
//     path: "/locations/purchase-orders",
//     icon: "fas fa-file-invoice",
//     order: 12,
//     isActive: true,
//     parentId: 5,
//   },

//   {
//     id: 6,
//     name: "Mobile",
//     path: "/mobile",
//     icon: "fas fa-mobile-alt",
//     order: 6,
//     isActive: true,
//   },
//   // Children of Mobile
//   {
//     id: 61,
//     name: "Mobile Routes",
//     path: "/mobile/mobile-routes",
//     icon: "fas fa-route",
//     order: 1,
//     isActive: true,
//     parentId: 6,
//   },
//   {
//     id: 62,
//     name: "Mobile Bulk Functions",
//     path: "/mobile/mobile-bulk-functions",
//     icon: "fas fa-layer-group",
//     order: 2,
//     isActive: true,
//     parentId: 6,
//   },
//   {
//     id: 63,
//     name: "Mobile Route Reports",
//     path: "/mobile/mobile-route-reports",
//     icon: "fas fa-file-alt",
//     order: 3,
//     isActive: true,
//     parentId: 6,
//   },
//   {
//     id: 64,
//     name: "Mobile Route Replay",
//     path: "/mobile/mobile-route-replay",
//     icon: "fas fa-redo",
//     order: 4,
//     isActive: true,
//     parentId: 6,
//   },
//   {
//     id: 65,
//     name: "Locations",
//     path: "/mobile/locations",
//     icon: "fas fa-map-marker-alt",
//     order: 5,
//     isActive: true,
//     parentId: 6,
//   },
//   {
//     id: 66,
//     name: "Service Type Config",
//     path: "/mobile/service-type-config",
//     icon: "fas fa-cogs",
//     order: 6,
//     isActive: true,
//     parentId: 6,
//   },
//   {
//     id: 67,
//     name: "Patrols On Shift",
//     path: "/mobile/patrols-on-shift",
//     icon: "fas fa-user-shield",
//     order: 7,
//     isActive: true,
//     parentId: 6,
//   },
//   {
//     id: 68,
//     name: "Log Emergency Response",
//     path: "/mobile/log-emergency-response",
//     icon: "fas fa-exclamation-triangle",
//     order: 8,
//     isActive: true,
//     parentId: 6,
//   },
//   {
//     id: 69,
//     name: "Emergency Response",
//     path: "/mobile/emergency-response",
//     icon: "fas fa-phone",
//     order: 9,
//     isActive: true,
//     parentId: 6,
//   },
// ];
const mockPages: Page[] = [
  // Dashboard
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    // icon: "fas fa-tachometer-alt",
    icon: <IconLayoutDashboard size={20} stroke={1.5} />,
    order: 1,
    isActive: true,
    iconActive: <IconLayoutDashboardFilled size={20} stroke={1.5} />,
  },

  // Your Details
  {
    id: 2,
    name: "Your Details",
    path: "/details",
    icon: "fas fa-id-card",
    order: 2,
    isActive: true,
  },
  {
    id: 21,
    name: "My details",
    path: "/details/general",
    icon: "fas fa-user",
    order: 1,
    isActive: true,
    parentId: 2,
  },
  {
    id: 22,
    name: "Switch to Personnel",
    path: "/details/switch-to-personnel",
    icon: "fas fa-user-cog",
    order: 2,
    isActive: true,
    parentId: 2,
  },

  // Task Manager
  {
    id: 3,
    name: "Task Manager",
    path: "/tasks-manager",
    icon: <IconClipboardList size={20} stroke={1.5} />,
    order: 3,
    isActive: true,
  },
  {
    id: 31,
    name: "Create New Task",
    path: "/tasks-manager/create-new-task",
    icon: "fas fa-plus-circle",
    order: 1,
    isActive: true,
    parentId: 3,
  },
  {
    id: 32,
    name: "Tasks Set by You",
    path: "/tasks-manager/tasks-set-by-you",
    icon: "fas fa-tasks",
    order: 2,
    isActive: true,
    parentId: 3,
  },
  {
    id: 33,
    name: "Tasks Assigned to You",
    path: "/tasks-manager/tasks-assigned-to-you",
    icon: "fas fa-user-check",
    order: 3,
    isActive: true,
    parentId: 3,
  },
  {
    id: 34,
    name: "Open Task Report",
    path: "/tasks-manager/open-task-report",
    icon: "fas fa-file-alt",
    order: 4,
    isActive: true,
    parentId: 3,
  },
  {
    id: 35,
    name: "Add/Edit Classifications",
    path: "/tasks-manager/add-edit-classifications",
    icon: "fas fa-edit",
    order: 5,
    isActive: true,
    parentId: 3,
  },

  // Users
  {
    id: 4,
    name: "Users",
    path: "/users",
    icon: <IconUsers size={20} stroke={1.5} />,
    order: 4,
    isActive: true,
  },
  // Children of Users
  {
    id: 4232,
    name: "Users",
    path: "/users/Users",
    icon: "fas fa-search",
    order: 1,
    isActive: true,
    parentId: 4,
  },
  {
    id: 42321,
    name: "Personnel",
    path: "/users/Users/personnel",
    icon: "fas fa-user",
    order: 1,
    isActive: true,
    parentId: 4232,
  },
  {
    id: 42322,
    name: "Venue Management",
    path: "/users/Users/venue-management",
    icon: "fas fa-building",
    order: 2,
    isActive: true,
    parentId: 4232,
  },
  {
    id: 42323,
    name: "Client Managers",
    path: "/users/Users/client-managers",
    icon: "fas fa-user-tie",
    order: 3,
    isActive: true,
    parentId: 4232,
  },
  {
    id: 42324,
    name: "Stadium Managers",
    path: "/users/Users/stadium-managers",
    icon: "fas fa-futbol",
    order: 4,
    isActive: true,
    parentId: 4232,
  },
  {
    id: 42325,
    name: "Subcontractor Managers",
    path: "/users/Users/subcontractor-managers",
    icon: "fas fa-users-cog",
    order: 5,
    isActive: true,
    parentId: 4232,
  },
  {
    id: 42326,
    name: "Admins",
    path: "/users/Users/admins",
    icon: "fas fa-user-shield",
    order: 6,
    isActive: true,
    parentId: 4232,
  },
  {
    id: 42327,
    name: "Your Management",
    path: "/users/Users/your-management",
    icon: "fas fa-briefcase",
    order: 7,
    isActive: true,
    parentId: 4232,
  },
  {
    id: 42328,
    name: "Deleted Users",
    path: "/users/Users/deleted-users",
    icon: "fas fa-user-times",
    order: 8,
    isActive: true,
    parentId: 4232,
  },
  {
    id: 42329,
    name: "Banned Personnel",
    path: "/users/Users/banned-personnel",
    icon: "fas fa-ban",
    order: 9,
    isActive: true,
    parentId: 4232,
  },

  {
    id: 41,
    name: "Search Users",
    path: "/users/search-users",
    icon: "fas fa-search",
    order: 2,
    isActive: true,
    parentId: 4,
  },
  {
    id: 42,
    name: "Personnel Privileges",
    path: "/users/personnel-privileges",
    icon: "fas fa-user-shield",
    order: 3,
    isActive: true,
    parentId: 4,
  },
  {
    id: 43,
    name: "Quick Add User",
    path: "/users/quick-add-user",
    icon: "fas fa-user-plus",
    order: 4,
    isActive: true,
    parentId: 4,
  },
  {
    id: 44,
    name: "Onboarder",
    path: "/users/onboarder",
    icon: "fas fa-user-cog",
    order: 5,
    isActive: true,
    parentId: 4,
  },
  {
    id: 45,
    name: "Daily Availability",
    path: "/users/daily-availability",
    icon: "fas fa-calendar-check",
    order: 6,
    isActive: true,
    parentId: 4,
  },
  {
    id: 46,
    name: "Change Access",
    path: "/users/change-access",
    icon: "fas fa-user-lock",
    order: 7,
    isActive: true,
    parentId: 4,
  },
  {
    id: 47,
    name: "Personnel Licenses",
    path: "/users/personnel-licenses",
    icon: "fas fa-id-badge",
    order: 8,
    isActive: true,
    parentId: 4,
  },
  {
    id: 48,
    name: "Req'd Licences",
    path: "/users/required-licenses",
    icon: "fas fa-id-card-alt",
    order: 9,
    isActive: true,
    parentId: 4,
  },
  {
    id: 49,
    name: "Enter Blockout",
    path: "/users/enter-blockout",
    icon: "fas fa-ban",
    order: 10,
    isActive: true,
    parentId: 4,
  },
  {
    id: 410,
    name: "Set No Block Dates",
    path: "/users/set-no-block-dates",
    icon: "fas fa-calendar-minus",
    order: 11,
    isActive: true,
    parentId: 4,
  },
  {
    id: 411,
    name: "Rank By Personnel",
    path: "/users/rank-by-personnel",
    icon: "fas fa-sort",
    order: 12,
    isActive: true,
    parentId: 4,
  },
  {
    id: 412,
    name: "Rank By Location",
    path: "/users/rank-by-location",
    icon: "fas fa-map-marker-alt",
    order: 13,
    isActive: true,
    parentId: 4,
  },
  {
    id: 413,
    name: "Contractors",
    path: "/users/contractors",
    icon: "fas fa-users-cog",
    order: 14,
    isActive: true,
    parentId: 4,
  },
  {
    id: 414,
    name: "Check a Security Licence",
    path: "/users/check-security-license",
    icon: "fas fa-id-card",
    order: 15,
    isActive: true,
    parentId: 4,
  },
  {
    id: 415,
    name: "Search ID Numbers",
    path: "/users/search-id-numbers",
    icon: "fas fa-search",
    order: 16,
    isActive: true,
    parentId: 4,
  },
  {
    id: 416,
    name: "Roles",
    path: "/users/roles",
    icon: "fas fa-user-tag",
    order: 17,
    isActive: true,
    parentId: 4,
  },
  {
    id: 417,
    name: "HR Reports",
    path: "/users/hr-reports",
    icon: "fas fa-file-alt",
    order: 18,
    isActive: true,
    parentId: 4,
  },
  {
    id: 4171,
    name: "Build HR Report",
    path: "/users/hr-reports/build",
    icon: "fas fa-file-signature",
    order: 1,
    isActive: true,
    parentId: 417, // 👈 child of HR Reports
  },
  {
    id: 4172,
    name: "File a HR Report",
    path: "/users/hr-reports/file",
    icon: "fas fa-file-upload",
    order: 2,
    isActive: true,
    parentId: 417,
  },
  {
    id: 4173,
    name: "View by Personnel",
    path: "/users/hr-reports/view-by-personnel",
    icon: "fas fa-users",
    order: 3,
    isActive: true,
    parentId: 417,
  },
  {
    id: 4174,
    name: "View by Report",
    path: "/users/hr-reports/view-by-report",
    icon: "fas fa-file-alt",
    order: 4,
    isActive: true,
    parentId: 417,
  },
  {
    id: 4175,
    name: "Your HR Reports",
    path: "/users/hr-reports/your-reports",
    icon: "fas fa-user-file",
    order: 5,
    isActive: true,
    parentId: 417,
  },

  // Locations
  {
    id: 5,
    name: "Locations",
    path: "/locations",
    icon: <IconMapPin size={20} stroke={1.5} />, //map-pin
    order: 5,
    isActive: true,
  },
  {
    id: 51,
    name: "Add a Location",
    path: "/locations/add-location",
    icon: "fas fa-plus-circle",
    order: 1,
    isActive: true,
    parentId: 5,
  },
  {
    id: 52,
    name: "Locations",
    path: "/locations/locations",
    icon: "fas fa-map-marker-alt",
    order: 2,
    isActive: true,
    parentId: 5,
  },
  {
    id: 53,
    name: "Location Groups",
    path: "/locations/location-groups",
    icon: "fas fa-layer-group",
    order: 3,
    isActive: true,
    parentId: 5,
  },
  {
    id: 54,
    name: "Location Categories",
    path: "/locations/location-categories",
    icon: "fas fa-list",
    order: 4,
    isActive: true,
    parentId: 5,
  },
  {
    id: 55,
    name: "Location Regions",
    path: "/locations/location-regions",
    icon: "fas fa-globe",
    order: 5,
    isActive: true,
    parentId: 5,
  },
  {
    id: 56,
    name: "Local Public Holidays",
    path: "/locations/local-public-holidays",
    icon: "fas fa-calendar-alt",
    order: 6,
    isActive: true,
    parentId: 5,
  },
  {
    id: 57,
    name: "Events",
    path: "/locations/events",
    icon: "fas fa-calendar",
    order: 7,
    isActive: true,
    parentId: 5,
  },
  {
    id: 58,
    name: "Import Event",
    path: "/locations/import-event",
    icon: "fas fa-file-import",
    order: 8,
    isActive: true,
    parentId: 5,
  },
  {
    id: 59,
    name: "Resources Config",
    path: "/locations/resources-config",
    icon: "fas fa-cogs",
    order: 9,
    isActive: true,
    parentId: 5,
  },
  {
    id: 510,
    name: "Resources Outstanding",
    path: "/locations/resources-outstanding",
    icon: "fas fa-exclamation-circle",
    order: 10,
    isActive: true,
    parentId: 5,
  },
  {
    id: 511,
    name: "Key Register",
    path: "/locations/key-register",
    icon: "fas fa-key",
    order: 11,
    isActive: true,
    parentId: 5,
  },
  {
    id: 512,
    name: "Purchase Orders",
    path: "/locations/purchase-orders",
    icon: "fas fa-file-invoice",
    order: 12,
    isActive: true,
    parentId: 5,
  },

  // Mobile
  {
    id: 6,
    name: "Mobile",
    path: "/mobile",
    icon: <IconDeviceMobile size={20} stroke={1.5} />, //device-mobile 1
    order: 6,
    isActive: true,
  },
  {
    id: 61,
    name: "Mobile Routes",
    path: "/mobile/mobile-routes",
    icon: "fas fa-route",
    order: 1,
    isActive: true,
    parentId: 6,
  },
  {
    id: 62,
    name: "Mobile Bulk Functions",
    path: "/mobile/mobile-bulk-functions",
    icon: "fas fa-layer-group",
    order: 2,
    isActive: true,
    parentId: 6,
  },
  {
    id: 63,
    name: "Mobile Route Reports",
    path: "/mobile/mobile-route-reports",
    icon: "fas fa-file-alt",
    order: 3,
    isActive: true,
    parentId: 6,
  },
  {
    id: 64,
    name: "Mobile Route Replay",
    path: "/mobile/mobile-route-replay",
    icon: "fas fa-redo",
    order: 4,
    isActive: true,
    parentId: 6,
  },
  {
    id: 65,
    name: "Locations",
    path: "/mobile/locations",
    icon: "fas fa-map-marker-alt",
    order: 5,
    isActive: true,
    parentId: 6,
  },
  {
    id: 66,
    name: "Service Type Config",
    path: "/mobile/service-type-config",
    icon: "fas fa-cogs",
    order: 6,
    isActive: true,
    parentId: 6,
  },
  {
    id: 67,
    name: "Patrols On Shift",
    path: "/mobile/patrols-on-shift",
    icon: "fas fa-user-shield",
    order: 7,
    isActive: true,
    parentId: 6,
  },
  {
    id: 68,
    name: "Log Emergency Response",
    path: "/mobile/log-emergency-response",
    icon: "fas fa-exclamation-triangle",
    order: 8,
    isActive: true,
    parentId: 6,
  },
  {
    id: 69,
    name: "Emergency Response",
    path: "/mobile/emergency-response",
    icon: "fas fa-phone",
    order: 9,
    isActive: true,
    parentId: 6,
  },

  // Supported Living
  {
    id: 7,
    name: "Supported Living",
    path: "/supported-living",
    icon: <IconHome size={20} stroke={1.5} />,
    order: 7,
    isActive: true,
  },
  {
    id: 71,
    name: "Clients",
    path: "/supported-living/clients",
    icon: "fas fa-users",
    order: 1,
    isActive: true,
    parentId: 7,
  },
  {
    id: 72,
    name: "Add Clients to Clinicians",
    path: "/supported-living/add-clients",
    icon: "fas fa-user-plus",
    order: 2,
    isActive: true,
    parentId: 7,
  },
  {
    id: 73,
    name: "Enter Into Comms Book",
    path: "/supported-living/enter-comms-book",
    icon: "fas fa-book",
    order: 3,
    isActive: true,
    parentId: 7,
  },
  {
    id: 74,
    name: "View Comms Book",
    path: "/supported-living/view-comms-book",
    icon: "fas fa-book-open",
    order: 4,
    isActive: true,
    parentId: 7,
  },

  // Reports
  {
    id: 8,
    name: "Reports",
    path: "/reports",
    icon: <IconFileAnalytics size={20} stroke={1.5} />,
    order: 8,
    isActive: true,
  },
  {
    id: 81,
    name: "View Summary Report",
    path: "/reports/summary",
    icon: "fas fa-file-alt",
    order: 1,
    isActive: true,
    parentId: 8,
  },
  {
    id: 82,
    name: "View Individual Reports",
    path: "/reports/individual",
    icon: "fas fa-file",
    order: 2,
    isActive: true,
    parentId: 8,
  },
  {
    id: 82,
    name: "View Individual Reports",
    path: "/reports/individual",
    icon: "fas fa-file",
    order: 2,
    isActive: true,
    parentId: 8,
  },

  // 👇 Children of "View Individual Reports"
  {
    id: 8201,
    name: "Car Inspect",
    path: "/reports/individual/car-inspect",
    icon: "fas fa-car",
    order: 1,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8202,
    name: "Daily Report",
    path: "/reports/individual/daily-report",
    icon: "fas fa-calendar-day",
    order: 2,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8203,
    name: "Dave's Report",
    path: "/reports/individual/daves-report",
    icon: "fas fa-user-edit",
    order: 3,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8204,
    name: "Day 1 Report",
    path: "/reports/individual/day1-report",
    icon: "fas fa-file-alt",
    order: 4,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8205,
    name: "ert",
    path: "/reports/individual/ert",
    icon: "fas fa-file-alt",
    order: 5,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8206,
    name: "Kitchen Report",
    path: "/reports/individual/kitchen-report",
    icon: "fas fa-utensils",
    order: 6,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8207,
    name: "kjh",
    path: "/reports/individual/kjh",
    icon: "fas fa-file-alt",
    order: 7,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8208,
    name: "Lighting",
    path: "/reports/individual/lighting",
    icon: "fas fa-lightbulb",
    order: 8,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8209,
    name: "Lionheart Day Start",
    path: "/reports/individual/lionheart-day-start",
    icon: "fas fa-sun",
    order: 9,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8210,
    name: "New",
    path: "/reports/individual/new",
    icon: "fas fa-file-plus",
    order: 10,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8211,
    name: "New Assessment",
    path: "/reports/individual/new-assessment",
    icon: "fas fa-tasks",
    order: 11,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8212,
    name: "New Report",
    path: "/reports/individual/new-report",
    icon: "fas fa-file-alt",
    order: 12,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8213,
    name: "Pub Complete Report",
    path: "/reports/individual/pub-complete-report",
    icon: "fas fa-beer",
    order: 13,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8214,
    name: "Remote Report",
    path: "/reports/individual/remote-report",
    icon: "fas fa-wifi",
    order: 14,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8215,
    name: "Sample One2One",
    path: "/reports/individual/sample-one2one",
    icon: "fas fa-user-friends",
    order: 15,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8216,
    name: "Staff",
    path: "/reports/individual/staff",
    icon: "fas fa-users",
    order: 16,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8217,
    name: "Staff Assessment",
    path: "/reports/individual/staff-assessment",
    icon: "fas fa-user-check",
    order: 17,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8218,
    name: "Test",
    path: "/reports/individual/test",
    icon: "fas fa-vial",
    order: 18,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8219,
    name: "Test HR",
    path: "/reports/individual/test-hr",
    icon: "fas fa-user-tie",
    order: 19,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8220,
    name: "Test Report",
    path: "/reports/individual/test-report",
    icon: "fas fa-file-alt",
    order: 20,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8221,
    name: "TestCats",
    path: "/reports/individual/testcats",
    icon: "fas fa-cat",
    order: 21,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8222,
    name: "This is a Self Serve HR Report",
    path: "/reports/individual/self-serve-hr",
    icon: "fas fa-hand-holding",
    order: 22,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8223,
    name: "Visitor Registration",
    path: "/reports/individual/visitor-registration",
    icon: "fas fa-id-badge",
    order: 23,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8224,
    name: "WCG Test",
    path: "/reports/individual/wcg-test",
    icon: "fas fa-vials",
    order: 24,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8225,
    name: "Welfare Check",
    path: "/reports/individual/welfare-check",
    icon: "fas fa-heartbeat",
    order: 25,
    isActive: true,
    parentId: 82,
  },
  {
    id: 8226,
    name: "xdgh",
    path: "/reports/individual/xdgh",
    icon: "fas fa-file-alt",
    order: 26,
    isActive: true,
    parentId: 82,
  },

  {
    id: 83,
    name: "Build a Report",
    path: "/reports/build",
    icon: "fas fa-edit",
    order: 3,
    isActive: true,
    parentId: 8,
  },
  {
    id: 84,
    name: "Your Reports",
    path: "/reports/your-reports",
    icon: "fas fa-user-file",
    order: 4,
    isActive: true,
    parentId: 8,
  },

  // Rosters
  {
    id: 9,
    name: "Rosters",
    path: "/rosters",
    icon: <IconCalendarWeek size={20} stroke={1.5} />,
    order: 9,
    isActive: true,
  },
  {
    id: 91,
    name: "Rosters",
    path: "/rosters/rosters",
    icon: "fas fa-calendar",
    order: 1,
    isActive: true,
    parentId: 9,
  },
  {
    id: 92,
    name: "RunSheets",
    path: "/rosters/runsheets",
    icon: "fas fa-list",
    order: 2,
    isActive: true,
    parentId: 9,
  },
  {
    id: 93,
    name: "Unaccepted Shifts",
    path: "/rosters/unaccepted-shifts",
    icon: "fas fa-times-circle",
    order: 3,
    isActive: true,
    parentId: 9,
  },
  {
    id: 94,
    name: "Unaccept a Shift",
    path: "/rosters/unaccept-shift",
    icon: "fas fa-undo",
    order: 4,
    isActive: true,
    parentId: 9,
  },
  {
    id: 95,
    name: "Unfilled Contractor Shifts",
    path: "/rosters/unfilled-contractor-shifts",
    icon: "fas fa-user-clock",
    order: 5,
    isActive: true,
    parentId: 9,
  },
  {
    id: 96,
    name: "Shifts by Personnel",
    path: "/rosters/shifts-by-personnel",
    icon: "fas fa-users",
    order: 6,
    isActive: true,
    parentId: 9,
  },
  {
    id: 97,
    name: "Commit All Shifts",
    path: "/rosters/commit-all-shifts",
    icon: "fas fa-check-circle",
    order: 7,
    isActive: true,
    parentId: 9,
  },
  {
    id: 98,
    name: "Hardcap Exception Report",
    path: "/rosters/hardcap-exception-report",
    icon: "fas fa-exclamation-triangle",
    order: 8,
    isActive: true,
    parentId: 9,
  },
  {
    id: 99,
    name: "View All Rosters",
    path: "/rosters/view-all-rosters",
    icon: "fas fa-eye",
    order: 9,
    isActive: true,
    parentId: 9,
  },
  {
    id: 99,
    name: "View All Rosters",
    path: "/rosters/view-all-rosters",
    icon: "fas fa-eye",
    order: 9,
    isActive: true,
    parentId: 9,
  },

  // 👇 Children of "View All Rosters"
  {
    id: 9901,
    name: "Filled",
    path: "/rosters/view-all-rosters/filled",
    icon: "fas fa-check-circle",
    order: 1,
    isActive: true,
    parentId: 99,
  },
  {
    id: 9902,
    name: "Unfilled by Location",
    path: "/rosters/view-all-rosters/unfilled-by-location",
    icon: "fas fa-map-marker-alt",
    order: 2,
    isActive: true,
    parentId: 99,
  },
  {
    id: 9903,
    name: "Unfilled List View",
    path: "/rosters/view-all-rosters/unfilled-list-view",
    icon: "fas fa-list",
    order: 3,
    isActive: true,
    parentId: 99,
  },
  {
    id: 9904,
    name: "Declined Shifts",
    path: "/rosters/view-all-rosters/declined-shifts",
    icon: "fas fa-times-circle",
    order: 4,
    isActive: true,
    parentId: 99,
  },
  {
    id: 9905,
    name: "All",
    path: "/rosters/view-all-rosters/all",
    icon: "fas fa-layer-group",
    order: 5,
    isActive: true,
    parentId: 99,
  },
  {
    id: 9906,
    name: "By Personnel (Week)",
    path: "/rosters/view-all-rosters/by-personnel-week",
    icon: "fas fa-user-clock",
    order: 6,
    isActive: true,
    parentId: 99,
  },
  {
    id: 9907,
    name: "By Personnel (Fortnight)",
    path: "/rosters/view-all-rosters/by-personnel-fortnight",
    icon: "fas fa-user-calendar",
    order: 7,
    isActive: true,
    parentId: 99,
  },
  {
    id: 9908,
    name: "By Location Group",
    path: "/rosters/view-all-rosters/by-location-group",
    icon: "fas fa-map",
    order: 8,
    isActive: true,
    parentId: 99,
  },

  {
    id: 910,
    name: "Roster Summary",
    path: "/rosters/roster-summary",
    icon: "fas fa-clipboard-list",
    order: 10,
    isActive: true,
    parentId: 9,
  },
  {
    id: 911,
    name: "Today's Status",
    path: "/rosters/todays-status",
    icon: "fas fa-calendar-check",
    order: 11,
    isActive: true,
    parentId: 9,
  },
  {
    id: 912,
    name: "Static Shift Location",
    path: "/rosters/static-shift-location",
    icon: "fas fa-map-marker-alt",
    order: 12,
    isActive: true,
    parentId: 9,
  },
  {
    id: 913,
    name: "NOC Board",
    path: "/rosters/noc-board",
    icon: "fas fa-tv",
    order: 13,
    isActive: true,
    parentId: 9,
  },
  {
    id: 914,
    name: "Ad-Hoc Shift",
    path: "/rosters/ad-hoc-shift",
    icon: "fas fa-user-plus",
    order: 14,
    isActive: true,
    parentId: 9,
  },
  {
    id: 915,
    name: "View Blockouts",
    path: "/rosters/view-blockouts",
    icon: "fas fa-ban",
    order: 15,
    isActive: true,
    parentId: 9,
  },
  {
    id: 916,
    name: "Bulk Replace Personnel",
    path: "/rosters/bulk-replace-personnel",
    icon: "fas fa-exchange-alt",
    order: 16,
    isActive: true,
    parentId: 9,
  },
  {
    id: 917,
    name: "Who's Free",
    path: "/rosters/whos-free",
    icon: "fas fa-user-check",
    order: 17,
    isActive: true,
    parentId: 9,
  },
  // Timesheets
  {
    id: 10,
    name: "Timesheets",
    path: "/timesheets",
    icon: <IconReport size={20} stroke={1.5} />,
    order: 10,
    isActive: true,
  },

  // Children of Timesheets
  {
    id: 101,
    name: "By Location",
    path: "/timesheets/by-location",
    icon: "fas fa-map-marker-alt",
    order: 1,
    isActive: true,
    parentId: 10,
  },
  {
    id: 102,
    name: "By Location Group",
    path: "/timesheets/by-location-group",
    icon: "fas fa-layer-group",
    order: 2,
    isActive: true,
    parentId: 10,
  },
  {
    id: 103,
    name: "By Personnel",
    path: "/timesheets/by-personnel",
    icon: "fas fa-user",
    order: 3,
    isActive: true,
    parentId: 10,
  },
  {
    id: 104,
    name: "By Contractor",
    path: "/timesheets/by-contractor",
    icon: "fas fa-user-tie",
    order: 4,
    isActive: true,
    parentId: 10,
  },
  {
    id: 1041,
    name: "Additional Security P/L",
    path: "/timesheets/by-contractor/additional-security-pl",
    icon: "fas fa-shield-alt",
    order: 1,
    isActive: true,
    parentId: 104,
  },
  {
    id: 1042,
    name: "BCF Contracting",
    path: "/timesheets/by-contractor/bcf-contracting",
    icon: "fas fa-briefcase",
    order: 2,
    isActive: true,
    parentId: 104,
  },
  {
    id: 1043,
    name: "External Contracting P/L",
    path: "/timesheets/by-contractor/external-contracting-pl",
    icon: "fas fa-industry",
    order: 3,
    isActive: true,
    parentId: 104,
  },
  {
    id: 1044,
    name: "Internal Contractor",
    path: "/timesheets/by-contractor/internal-contractor",
    icon: "fas fa-users",
    order: 4,
    isActive: true,
    parentId: 104,
  },

  {
    id: 105,
    name: "Location Invoicing",
    path: "/timesheets/location-invoicing",
    icon: "fas fa-file-invoice",
    order: 5,
    isActive: true,
    parentId: 10,
  },
  {
    id: 106,
    name: "All Locations",
    path: "/timesheets/all-locations",
    icon: "fas fa-globe",
    order: 6,
    isActive: true,
    parentId: 10,
  },
  {
    id: 107,
    name: "By Single User",
    path: "/timesheets/by-single-user",
    icon: "fas fa-user-circle",
    order: 7,
    isActive: true,
    parentId: 10,
  },
  {
    id: 108,
    name: "Single Location Spreadsheet",
    path: "/timesheets/single-location-spreadsheet",
    icon: "fas fa-file-excel",
    order: 8,
    isActive: true,
    parentId: 10,
  },
  {
    id: 109,
    name: "Location Group Spreadsheet",
    path: "/timesheets/location-group-spreadsheet",
    icon: "fas fa-file-alt",
    order: 9,
    isActive: true,
    parentId: 10,
  },
  {
    id: 110,
    name: "Active Users",
    path: "/timesheets/active-users",
    icon: "fas fa-users",
    order: 10,
    isActive: true,
    parentId: 10,
  },
  {
    id: 111,
    name: "Static Location Tracking",
    path: "/timesheets/static-location-tracking",
    icon: "fas fa-map-marked-alt",
    order: 11,
    isActive: true,
    parentId: 10,
  },
  {
    id: 112,
    name: "Event Package",
    path: "/timesheets/event-package",
    icon: "fas fa-box-open",
    order: 12,
    isActive: true,
    parentId: 10,
  },
  {
    id: 113,
    name: "No Show Report",
    path: "/timesheets/no-show-report",
    icon: "fas fa-user-times",
    order: 13,
    isActive: true,
    parentId: 10,
  },
  // IR's & Logs
  {
    id: 11,
    name: "IR's & Logs",
    path: "/irs-logs",
    icon: <IconAlertHexagon size={20} stroke={1.5} />,
    order: 11,
    isActive: true,
  },
  {
    id: 111,
    name: "Search IR's",
    path: "/irs-logs/search-irs",
    icon: "fas fa-search",
    order: 1,
    isActive: true,
    parentId: 11,
  },
  {
    id: 112,
    name: "Activity Logs",
    path: "/irs-logs/activity-logs",
    icon: "fas fa-list-alt",
    order: 2,
    isActive: true,
    parentId: 11,
  },

  // Documents
  {
    id: 12,
    name: "Documents",
    path: "/documents",
    icon: <IconFileDescription size={20} stroke={1.5} />,
    order: 12,
    isActive: true,
  },
  {
    id: 121,
    name: "Add/Edit Categories",
    path: "/documents/add-edit-categories",
    icon: "fas fa-edit",
    order: 1,
    isActive: true,
    parentId: 12,
  },
  {
    id: 122,
    name: "Add/Edit Documents",
    path: "/documents/add-edit-documents",
    icon: "fas fa-file-edit",
    order: 2,
    isActive: true,
    parentId: 12,
  },
  {
    id: 123,
    name: "Search by Personnel",
    path: "/documents/search-by-personnel",
    icon: "fas fa-search",
    order: 3,
    isActive: true,
    parentId: 12,
  },
  {
    id: 124,
    name: "Your Documents",
    path: "/documents/your-documents",
    icon: "fas fa-folder",
    order: 4,
    isActive: true,
    parentId: 12,
  },
  {
    id: 125,
    name: "Master License",
    path: "/documents/master-license",
    icon: "fas fa-id-badge",
    order: 5,
    isActive: true,
    parentId: 12,
  },

  // Messaging
  {
    id: 13,
    name: "Messaging",
    path: "/messaging",
    icon: <IconMail size={20} stroke={1.5} />,
    order: 13,
    isActive: true,
  },
  {
    id: 131,
    name: "Send a Message",
    path: "/messaging/send-message",
    icon: "fas fa-paper-plane",
    order: 1,
    isActive: true,
    parentId: 13,
  },
  {
    id: 132,
    name: "Send Messages",
    path: "/messaging/send-messages",
    icon: "fas fa-paper-plane",
    order: 2,
    isActive: true,
    parentId: 13,
  },
  {
    id: 133,
    name: "Enter into Comms Book",
    path: "/messaging/enter-comms-book",
    icon: "fas fa-book",
    order: 3,
    isActive: true,
    parentId: 13,
  },
  {
    id: 134,
    name: "View Comms Book",
    path: "/messaging/view-comms-book",
    icon: "fas fa-book-open",
    order: 4,
    isActive: true,
    parentId: 13,
  },

  // What's New (no children)
  {
    id: 14,
    name: "What's New",
    path: "/whats-new",
    icon: <IconMapPin size={20} stroke={1.5} />,
    order: 14,
    isActive: true,
  },
  // Help & Support
  {
    id: 15,
    name: "Help & Support",
    path: "/help-support",
    icon: <IconMapPin size={20} stroke={1.5} />,
    order: 15,
    isActive: true,
  },
  {
    id: 151,
    name: "Help",
    path: "/help-support/help",
    icon: "fas fa-question-circle",
    order: 1,
    isActive: true,
    parentId: 15,
  },
  {
    id: 152,
    name: "Open Tickets",
    path: "/help-support/open-tickets",
    icon: "fas fa-ticket-alt",
    order: 2,
    isActive: true,
    parentId: 15,
  },
  {
    id: 153,
    name: "Closed Tickets",
    path: "/help-support/closed-tickets",
    icon: "fas fa-check-circle",
    order: 3,
    isActive: true,
    parentId: 15,
  },
  {
    id: 154,
    name: "New Ticket",
    path: "/help-support/new-ticket",
    icon: "fas fa-plus-circle",
    order: 4,
    isActive: true,
    parentId: 15,
  },
  {
    id: 155,
    name: "Admin Open Tickets",
    path: "/help-support/admin-open-tickets",
    icon: "fas fa-user-shield",
    order: 5,
    isActive: true,
    parentId: 15,
  },
  {
    id: 156,
    name: "Admin Closed Tickets",
    path: "/help-support/admin-closed-tickets",
    icon: "fas fa-user-check",
    order: 6,
    isActive: true,
    parentId: 15,
  },
  {
    id: 157,
    name: "Securecy Stats",
    path: "/help-support/securecy-stats",
    icon: "fas fa-chart-line",
    order: 7,
    isActive: true,
    parentId: 15,
  },

  // Logout (no children)
  {
    id: 16,
    name: "Logout",
    path: "/logout",
    icon: <IconLogout size={20} stroke={1.5} />,
    order: 16,
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
