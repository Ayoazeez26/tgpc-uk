import { defineStore } from 'pinia';
import { UserLoginInput } from '~/types';
import { successToast, errorToast } from '~/plugins/vue3-toastify';
import { useDialogStore } from './dialog';

export const useAuthStore = defineStore('auth', () => {
  const { $api } = useNuxtApp();
  const router = useRouter();
  const dialog = useDialogStore();
  const token = ref<string | null>(JSON.parse(localStorage.getItem('token')));

  const signup = (payload: UserLoginInput) => {
    dialog.isLoading = true;
    return new Promise((resolve, reject) => {
      $api.auth
        .signup(payload)
        .then((res) => {
          dialog.isLoading = false;
          console.log(res);
          successToast('Account created successfully!');
          router.push('/confirmEmail');
        })
        .catch((err) => {
          dialog.isLoading = false;
          errorToast(err.data.message);
          console.log(err.data.message);
        });
    });
  };

  return { token, signup };
});
