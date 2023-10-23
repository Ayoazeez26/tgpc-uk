import { storeToRefs } from "pinia"
import { useAuthStore } from "~/stores/auth";
import { useDataStore } from "~/stores/data";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to);
  const { authenticated } = storeToRefs(useAuthStore());
  const { token } = useAuthStore();
  const { loggedIn } = useDataStore();

  if (token) {
    authenticated.value = true;
  }

  if (loggedIn && to?.name === 'login') {
    return navigateTo('/dashboard');
  }

  if (loggedIn && to?.name === 'index') {
    return navigateTo('/dashboard');
  }

  if (to?.name !== 'dashboard' && authenticated) {
    if (to?.name !== 'login' && !loggedIn) {
      if (to?.name !== 'confirmEmail') {
        if (to?.name !== 'register') {
          if (to?.name !== 'index') {
            abortNavigation();
            return navigateTo('/login');
          }
        }
      }
    }
  }
})