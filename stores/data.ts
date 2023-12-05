import { defineStore } from 'pinia';
import { useDialogStore } from './dialog';
import type { RequestTenderInput, contactUsInput } from '~/types';
import { successToast } from '~/plugins/vue3-toastify';

export const useDataStore = defineStore(
  'data',
  () => {
    const { $api } = useNuxtApp();
    const dialog = useDialogStore();
    const router = useRouter();
    const userEmail = ref('');
    const totalCount = ref(0);
    let loggedIn = ref(false);
    const allTenders = ref([]);
    const singleTender = ref({});
    const searchTerm = ref('');
    const enumList = ref(null);
    const location = ref('');
    const startDate = ref('');
    const endDate = ref('');
    const minValue = ref(0);
    const maxValue = ref(90000000);
    const from = ref(0);
    const perPage = ref(10);

    const getGenericEnums = () => {
      // dialog.isLoading = true;
      // return new Promise((resolve, reject) => {
      $api.data.getGenericEnums().then((res) => {
        // dialog.isLoading = false;
        enumList.value = res;
        // resolve(res);
      });
      // });
    };

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

    const contactUs = (data: contactUsInput) => {
      dialog.isLoading = true;
      $api.data.contactUs(data).then((res) => {
        console.log(res);
        dialog.isLoading = false;
        successToast('Your message has been sent successfully!');
        router.push('/dashboard');
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
      searchTerm,
      getGenericEnums,
      enumList,
      contactUs,
      maxValue,
      minValue,
      endDate,
      startDate,
      location,
      perPage,
      from
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
