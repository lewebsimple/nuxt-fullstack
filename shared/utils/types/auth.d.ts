import type { UserRole } from "~~/server/prisma/generated/enums";

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
