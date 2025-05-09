import { seed } from "../prisma/seed";

export default defineTask({
  meta: {
    name: "seed",
    description: "Seed the database with initial data",
  },
  async run() {
    return await seed();
  },
});
