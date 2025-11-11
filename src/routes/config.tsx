import type { ReactElement } from "react";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import General from "../pages/General";
import TaskManager from "../pages/TaskManager";
import Users from "../pages/Users";

export type RouteMeta = {
  path: string;
  label: string;
  element: ReactElement;
  closable?: boolean; // default true
};

export const ROUTES: RouteMeta[] = [
  {
    path: "/dashboard",
    label: "Dashboard",
    element: <Dashboard />,
    closable: false,
  },
  { path: "/details", label: "Details", element: <Details /> },
  { path: "/details/general", label: "General", element: <General /> },
  { path: "/tasks-manager/create", label: "Rosters", element: <TaskManager /> },
  { path: "/users", label: "Users", element: <Users /> },
];

export const findRouteMeta = (pathname: string) =>
  ROUTES.find((r) => r.path === pathname);
