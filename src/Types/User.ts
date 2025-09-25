import type { Role } from "./Role";

export interface User {
  id: number;
  username: string;
  email: string;
  roleId: number;
  role?: Role; // Optional role details
}
