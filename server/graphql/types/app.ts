import { version } from "~~/package.json";

// App queries
export const AppQueries = builder.queryFields((t) => ({
  appVersion: t.field({ type: "String", nullable: false, resolve: () => version }),
}));
