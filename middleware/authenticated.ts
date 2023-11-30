import { storeToRefs } from "pinia"
import { useAuthStore } from "~/stores/auth";
import { useDataStore } from "~/stores/data";

export default defineNuxtRouteMiddleware((to, from) => {
  // console.log(to);
  const { authenticated } = storeToRefs(useAuthStore());
  // const { token } = useAuthStore();
  // const { loggedIn } = useDataStore();

  // if (token) {
  //   authenticated.value = true;
  // }

  // if (loggedIn && to?.name === 'login') {
  //   return navigateTo('/dashboard');
  // }

  // if (loggedIn && to?.name === 'index') {
  //   return navigateTo('/dashboard');
  // }

  // if (!authenticated && to?.name === 'dashboard') {
  //   abortNavigation();
  //   return navigateTo('/login');
  // }

  if (!authenticated.value) {
    abortNavigation();
    return navigateTo('/');
  }
})