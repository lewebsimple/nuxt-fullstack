import { version } from "~~/package.json";

// App version queries
export const appVersionQueries = builder.queryFields((t) => ({
  appVersion: t.field({ type: "String", resolve: () => version }),
}));
