import { createSchema } from "graphql-yoga";
import type { Context } from "./context";

// TODO: Refactor schema with Pothos GraphQL
export const schema = createSchema<Context>({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => "world",
    },
  },
});
