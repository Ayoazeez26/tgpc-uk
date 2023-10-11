import { storeToRefs } from "pinia"
import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { authenticated } = storeToRefs(useAuthStore());
  const { token } = useAuthStore();

  // if (token) {
  //   authenticated.value = true;
  // }

  // if (token && to?.name === 'login') {
  //   return navigateTo('/dashboard');
  // }

  // if (!token && to?.name !== 'login' || to?.name !== 'register') {
  //   abortNavigation();
  //   return navigateTo('/login');
  // }
})