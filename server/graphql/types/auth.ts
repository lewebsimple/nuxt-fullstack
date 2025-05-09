import { UserRole } from "~~/server/prisma/generated";

export const UserRoleEnum = builder.enumType(UserRole, { name: "UserRole" });

export const UserObject = builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    email: t.exposeString("email"),
    name: t.exposeString("name"),
    role: t.expose("role", { type: UserRoleEnum }),
    createdAt: t.expose("createdAt", { type: "DateTime" }),
    updatedAt: t.expose("updatedAt", { type: "DateTime" }),
  }),
});

export const AuthQueries = builder.queryFields((t) => ({
  me: t.field({
    type: UserObject,
    nullable: true,
    resolve: async (_parent, _args, { session }) => {
      return session.user ? await prisma.user.findUnique({ where: { id: session.user.id } }) : null;
    },
  }),
}));
