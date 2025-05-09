export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession();

  if (loggedIn.value) {
    return navigateTo({
      path: "/auth",
      query: { redirect: to.fullPath },
    });
  }
});
