import type { UserCreateInput } from "../generated/models";
import type { SeedFn } from "../seed";

export const seedAuthAdminUser: SeedFn = async (prisma) => {
  const data: UserCreateInput = {
    email: process.env.SEED_AUTH_USER_EMAIL || "pascal@lewebsimple.ca",
    password: await hashPassword(process.env.SEED_AUTH_USER_PASSWORD || "changeme"),
    role: "ADMIN",
    name: process.env.SEED_AUTH_USER_NAME || "Pascal Martineau",
  };
  if (await prisma.user.findUnique({ where: { email: data.email } })) {
    await prisma.user.update({ where: { email: data.email }, data });
    return `User ${data.email} updated`;
  }
  else {
    await prisma.user.create({ data });
    return `User ${data.email} created`;
  }
};
