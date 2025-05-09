export default defineNuxtRouteMiddleware((to) => {
  const { user } = useUserSession();

  if (!user.value) {
    return navigateTo({
      path: "/auth",
      query: { redirect: to.fullPath },
    });
  }

  if (!["ADMIN", to.meta.hasUserRole].includes(user.value.role)) {
    return abortNavigation({ statusCode: 403 });
  }
});

declare module "#app" {
  interface PageMeta {
    hasUserRole?: UserRole;
  }
}
