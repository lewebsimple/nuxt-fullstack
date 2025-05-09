import { createYoga } from "graphql-yoga";
import { getContext } from "../graphql/context";
import { schema } from "../graphql/schema";

export default defineEventHandler(async (event) => {
  const yoga = createYoga({
    context: await getContext(event),
    graphqlEndpoint: "/api/graphql",
    schema,
  });
  const { req, res } = event.node;
  return yoga.handle(req, res);
});
