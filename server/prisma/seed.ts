import type { PrismaClient } from "./generated/client";
import * as seeds from "./seeds";

// Prisma database seed functions
export type SeedFn = (prisma: PrismaClient) => Promise<string>;

// Seed the Prisma database
export async function seed() {
  const results: Record<string, string> = {};
  for (const [name, seedFn] of Object.entries(seeds)) {
    results[name] = await seedFn(prisma);
  }
  return results;
}
