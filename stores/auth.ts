import { defineStore } from 'pinia';
import type {
  UserEmailOTPInput,
  UserLoginInput,
  OtpValue,
  ConfirmResetOTPInput,
  NewPasswordInput,
  UpdateProfileInput,
  updatePasswordInput,
} from '~/types';
import { successToast } from '~/plugins/vue3-toastify';
import { useDialogStore } from './dialog';
import { useDataStore } from './data';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const { $api } = useNuxtApp();
    // const { token } = useProfile();
    const router = useRouter();
    let { loggedIn } = useDataStore();
    const dialog = useDialogStore();
    const dataStore = useDataStore();
    const authenticated = ref(false);
    const resetId = ref('');
    const tempEmail = ref('');
    const user = ref(null);
    const signupData = reactive({});
    const token = ref<string | null>();
    const refreshToken = ref<string | null>(null);

    const signup = (payload: UserLoginInput) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.auth
          .signup(payload)
          .then((res) => {
            dialog.isLoading = false;
            console.log(res);
            Object.assign(signupData, res)
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
            refreshToken.value = res.refreshToken;
            user.value = res;
            authenticated.value = true;
            loggedIn = true;
            // localStorage.setItem('user-token', res.accessToken);
            router.push('/dashboard');
            dataStore.getGenericEnums();
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

    const resetPasswordEmail = (payload: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.auth.resetPasswordEmail(payload).then((res) => {
          dialog.isLoading = false;
          tempEmail.value = payload;
          successToast('An OTP has been sent to your email account');
          resetId.value = res.id;
          console.log(resetId.value);
          router.push('/password/emailOTP')
        })
      })
    };

    const confirmResetPassword = (payload: string) => {
      dialog.isLoading = true;
      const data = {
        id: resetId.value,
        code: payload
      }
      return new Promise((resolve, reject) => {
        $api.auth.confirmResetPassword(data).then((res) => {
          dialog.isLoading = false;
          router.push('/password/newPassword');
        })
      })
    }

    const setNewPassword = (payload: NewPasswordInput) => {
      dialog.isLoading = true;
      // const data = {
      //   id: resetId.value,
      //   code: payload,
      // };
      return new Promise((resolve, reject) => {
        $api.auth.setNewPassword(payload).then((res) => {
          dialog.isLoading = false;
          router.push('/login');
        });
      });
    };

    const updateProfile = (payload: UpdateProfileInput) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.auth.updateProfile(payload).then((res) => {
          dialog.isLoading = false;
          successToast('Profile Updated Successfully')
          user.value = res;
        });
      });
    };

    const updatePassword = (payload: updatePasswordInput) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.auth.updatePassword(payload).then((res) => {
          dialog.isLoading = false;
          successToast('Password Updated Successfully');
          // user.value = res;
          resolve(res);
        });
      });
    };

    const logout = () => {
      // const token = useCookie('token');
      // token.value = null;
      dataStore.loggedIn = false;
      dataStore.searchTerm = '';
      authenticated.value = false;
      user.value = null;
      token.value = null;
      refreshToken.value = null;
      router.push('/login');
    };

    return {
      signup,
      logout,
      verifyEmail,
      authenticated,
      token,
      login,
      resetPasswordEmail,
      confirmResetPassword,
      setNewPassword,
      tempEmail,
      resetId,
      user,
      refreshToken,
      updateProfile,
      updatePassword
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
