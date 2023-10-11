import { defineStore } from 'pinia';
import { useDialogStore } from './dialog';

export const useDataStore = defineStore(
  'data',
  () => {
    const { $api } = useNuxtApp();
    const dialog = useDialogStore();
    const userEmail = ref('');

    const getUser = () => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.getUser().then((res) => {
          dialog.isLoading = false;
          console.log(res)
          // token.value = res.token;
          // authenticated.value = true;
          // localStorage.setItem('user-token', res.token);
          // successToast('Account created successfully!');
          // router.push('/dashboard');
        });
      });
    };

    return { userEmail, getUser };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
