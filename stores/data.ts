import { defineStore } from 'pinia';
import { useDialogStore } from './dialog';

export const useDataStore = defineStore(
  'data',
  () => {
    const { $api } = useNuxtApp();
    const dialog = useDialogStore();
    const userEmail = ref('');
    const loggedIn = ref(false);
    const allTenders = ref([]);
    const singleTender = ref({});

    const getTenders = (data: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.searchTenders(data).then((res) => {
          dialog.isLoading = false;
          // console.log('tender response is =>', res);
          allTenders.value = res.data;
          resolve(res.data);
        })
      })
    }

    const searchTenders = (data: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.searchTenders(data).then((res) => {
          dialog.isLoading = false;
          // console.log('tender response is =>', res);
          // allTenders.value = res.data;
          resolve(res.data);
        });
      });
    };

    return { userEmail, searchTenders, getTenders, allTenders, singleTender, loggedIn };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
