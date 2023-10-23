import { defineStore } from 'pinia';
import { UserEmailOTPInput, UserLoginInput } from '~/types';
import { successToast } from '~/plugins/vue3-toastify';
import { useDialogStore } from './dialog';
import { useDataStore } from './data';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const { $api } = useNuxtApp();
    // const { token } = useProfile();
    const router = useRouter();
    const dialog = useDialogStore();
    const dataStore = useDataStore();
    const authenticated = ref(false);
    const token = ref<string | null>(localStorage.getItem('user-token'));

    const signup = (payload: UserLoginInput) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.auth
          .signup(payload)
          .then((res) => {
            dialog.isLoading = false;
            console.log(res.token);
            // useProfile().setToken(res.token);
            // const token = useCookie('token');
            // token.value = null;
            token.value = res.token;
            authenticated.value = true;
            localStorage.setItem('user-token', res.token);
            successToast('Account created successfully!');
            router.push('/confirmEmail');
          })
      });
    };

    const login = (payload: UserLoginInput) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.auth
          .login(payload)
          .then((res) => {
            dialog.isLoading = false;
            token.value = res.token;
            authenticated.value = true;
            localStorage.setItem('user-token', res.token);
            // successToast('Account created successfully!');
            router.push('/dashboard');
          })
      });
    };

    const verifyEmail = (payload: UserEmailOTPInput) => {
      dialog.isLoading = true;
      // const token = useCookie('token');
      // console.log(token);
      console.log(token);
      return new Promise((resolve, reject) => {
        $api.auth
          .verifyEmail(payload)
          .then((res) => {
            dialog.isLoading = false;
            console.log(res);
            successToast(res.message);
            router.push('/dashboard');
          })
      });
    };

    const logout = () => {
      // const token = useCookie('token');
      token.value = null;
      dataStore.loggedIn = false;
      router.push('/login');
    };

    return { signup, logout, verifyEmail, authenticated, token, login };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
