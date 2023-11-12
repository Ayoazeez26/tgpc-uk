import { defineStore } from 'pinia';
import { useDialogStore } from './dialog';

export const useDataStore = defineStore(
  'data',
  () => {
    const { $api } = useNuxtApp();
    const dialog = useDialogStore();
    const userEmail = ref('');
    let loggedIn = ref(false);
    const allTenders = ref([]);
    const singleTender = ref({});

    const getTenders = (data: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.searchTenders(data).then((res) => {
          dialog.isLoading = false;
          console.log('tender response is =>', res);
          allTenders.value = res;
          resolve(res);
        });
      });
    };

    const searchTenders = (data: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.searchTenders(data).then((res) => {
          dialog.isLoading = false;
          // console.log('tender response is =>', res);
          // allTenders.value = res.data;
          resolve(res);
        });
      });
    };

    const searchTendersByLocation = (data: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.searchTendersByLocation(data).then((res) => {
          dialog.isLoading = false;
          // console.log('tender response is =>', res);
          allTenders.value = res;
          resolve(res);
        });
      });
    };

    const searchTendersByValue = (data: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.searchTendersByValue(data).then((res) => {
          dialog.isLoading = false;
          // console.log('tender response is =>', res);
          allTenders.value = res;
          resolve(res);
        });
      });
    };

    return {
      userEmail,
      searchTenders,
      searchTendersByLocation,
      getTenders,
      allTenders,
      singleTender,
      loggedIn,
      searchTendersByValue
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
