import type { Context } from "./context";

export type AuthScopes = {
  public: boolean;
  isLoggedIn: boolean;
  hasUserRole: UserRole;
};

// Initialize Pothos auth scopes
export const authScopes = async (context: Context) => ({
  public: true,
  isLoggedIn: Boolean(context.session.user),
  hasUserRole: (role: UserRole) => Boolean(context.session.user && ["ADMIN", role].includes(context.session.user.role)),
});
