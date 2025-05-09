import { writeFileSync } from "fs";
import { printSchema, lexicographicSortSchema } from "graphql";

import * as allTypes from "./types";

Function.prototype(allTypes);
builder.queryType();
// builder.mutationType();
// builder.subscriptionType();

export const schema = builder.toSchema();

// Save GraphQL schema to file
if (import.meta.dev) {
  const schemaAsString = printSchema(lexicographicSortSchema(schema));
  writeFileSync("server/graphql/schema.graphql", schemaAsString);
}
