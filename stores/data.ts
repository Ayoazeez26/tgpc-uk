import { defineStore } from 'pinia';
import { useDialogStore } from './dialog';
import { RequestTenderInput } from '~/types';

export const useDataStore = defineStore(
  'data',
  () => {
    const { $api } = useNuxtApp();
    const dialog = useDialogStore();
    const userEmail = ref('');
    const totalCount = ref(0);
    let loggedIn = ref(false);
    const allTenders = ref([]);
    const singleTender = ref({});
    const searchTerm = ref('');

    const getTenders = (data: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.searchTenders(data).then((res) => {
          dialog.isLoading = false;
          // console.log('tender response is =>', res);
          allTenders.value = res.mappedResults;
          totalCount.value = res.total;
          resolve(res);
        });
      });
    };

    const searchTenders = (data: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.searchTenders(data).then((res) => {
          dialog.isLoading = false;
          // console.log('tender response is =>', res.total);
          allTenders.value = res.mappedResults;
          totalCount.value = res.total;
          resolve(res);
        });
      });
    };

    const filterTenders = (data: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.filterTenders(data).then((res) => {
          dialog.isLoading = false;
          // console.log('tender response is =>', res);
          allTenders.value = res.mappedResults;
          totalCount.value = res.total;
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

    const requestTender = (data: RequestTenderInput) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.requestTender(data).then((res) => {
          dialog.isLoading = false;
          resolve(res);
        });
      });
    };

    const requestWriter = (data: RequestTenderInput) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.requestWriter(data).then((res) => {
          console.log(res);
          dialog.isLoading = false;
          resolve(res);
        });
      });
    };

    return {
      userEmail,
      searchTenders,
      filterTenders,
      getTenders,
      allTenders,
      singleTender,
      loggedIn,
      searchTendersByValue,
      requestTender,
      requestWriter,
      totalCount,
      searchTerm
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
