import type { UserRole as _UserRole } from "~~/server/prisma/generated/enums";

declare global {
  type UserRole = _UserRole;
}

declare module "#auth-utils" {
  interface User {
    id: number;
    role: UserRole;
  }

  // interface UserSession {
  // }

  // interface SecureSessionData {
  // }
}

export { };
