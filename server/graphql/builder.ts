import SchemaBuilder from "@pothos/core";
import ScopeAuthPlugin from "@pothos/plugin-scope-auth";
import type { Context } from "./context";
import { authScopes, type AuthScopes } from "./auth-scopes";

export const builder = new SchemaBuilder<{
  AuthScopes: AuthScopes;
  Context: Context;
}>({
  plugins: [
    ScopeAuthPlugin, // Always first
  ],
  scopeAuth: { authScopes },
});
