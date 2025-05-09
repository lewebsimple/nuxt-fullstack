import SchemaBuilder from "@pothos/core";
import ScopeAuthPlugin from "@pothos/plugin-scope-auth";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "../prisma/generated/pothos-types";
import type { Context } from "./context";
import type { Scalars } from "./types/scalars";
import { authScopes, type AuthScopes } from "./auth-scopes";

export const builder = new SchemaBuilder<{
  AuthScopes: AuthScopes;
  Context: Context;
  PrismaTypes: PrismaTypes;
  Scalars: Scalars;
}>({
  plugins: [
    ScopeAuthPlugin, // Always first
    PrismaPlugin,
  ],
  prisma: {
    client: prisma,
    exposeDescriptions: true,
    onUnusedQuery: import.meta.dev ? "warn" : null,
  },
  scopeAuth: { authScopes },
});
