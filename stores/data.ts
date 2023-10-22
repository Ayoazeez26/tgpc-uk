import { defineStore } from 'pinia';
import { useDialogStore } from './dialog';

export const useDataStore = defineStore(
  'data',
  () => {
    const { $api } = useNuxtApp();
    const dialog = useDialogStore();
    const userEmail = ref('');
    const allTenders = ref([]);
    const singleTender = ref({});

    const getUser = () => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.getUser().then((res) => {
          dialog.isLoading = false;
          console.log(res)
        });
      });
    };

    const getTenders = (data: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.searchTenders(data).then((res) => {
          dialog.isLoading = false;
          console.log('tender response is =>', res);
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
          console.log('tender response is =>', res);
          allTenders.value = res.data;
          resolve(res.data);
        });
      });
    };

    return { userEmail, getUser, searchTenders, getTenders, allTenders, singleTender };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
