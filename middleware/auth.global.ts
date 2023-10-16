import { storeToRefs } from "pinia"
import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to);
  const { authenticated } = storeToRefs(useAuthStore());
  const { token } = useAuthStore();

  if (token) {
    authenticated.value = true;
  }

  if (token && to?.name === 'login') {
    return navigateTo('/dashboard');
  }

  if (token && to?.name === 'index') {
    return navigateTo('/dashboard');
  }

  if (to?.name !== 'login' && !token) {
    if (to?.name !== 'confirmEmail') {
      if (to?.name !== 'register') {
        if (to?.name !== 'index') {
          abortNavigation();
          return navigateTo('/login');
        }
      }
    }
  }
})