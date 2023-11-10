import { defineStore } from 'pinia';
import { UserEmailOTPInput, UserLoginInput, OtpValue } from '~/types';
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
    const user = ref(null);
    const signupData = reactive({});
    const token = ref<string | null>(localStorage.getItem('user-token'));

    const signup = (payload: UserLoginInput) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.auth
          .signup(payload)
          .then((res) => {
            dialog.isLoading = false;
            console.log(res);
            Object.assign(signupData, res)
            // signupData.value = res;
            // useProfile().setToken(res.token);
            // const token = useCookie('token');
            // token.value = null;
            // token.value = res.token;
            // authenticated.value = true;
            // localStorage.setItem('user-token', res.token);
            successToast('Account created successfully!');
            router.push('/confirmEmail');
            console.log(signupData.result);
            console.log(signupData.account);
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
            token.value = res.accessToken;
            user.value = res;
            authenticated.value = true;
            localStorage.setItem('user-token', res.accessToken);
            router.push('/dashboard');
          })
      });
    };

    const verifyEmail = (payload: OtpValue) => {
      dialog.isLoading = true;
      // const token = useCookie('token');
      // console.log(token);
      console.log(signupData);
      const data = {
        userId: signupData.account.id,
        otp: {
          id: signupData.result.id,
          code: payload.code
        }
      }
      // console.log(token);
      return new Promise((resolve, reject) => {
        $api.auth
          .verifyEmail(data)
          .then((res) => {
            dialog.isLoading = false;
            console.log(res);
            user.value = res;
            authenticated.value = true;
            successToast(res.message);
            router.push('/dashboard');
          })
      });
    };

    const logout = () => {
      // const token = useCookie('token');
      // token.value = null;
      dataStore.loggedIn = false;
      authenticated.value = false;
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
