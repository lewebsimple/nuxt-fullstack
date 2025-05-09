import type { H3Event } from "h3";

// Get GraphQL context from H3 event
export async function getContext(event: H3Event) {
  return {
    session: await getUserSession(event),
  };
}

export type Context = Awaited<ReturnType<typeof getContext>>;
