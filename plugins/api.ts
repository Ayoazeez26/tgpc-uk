import { ofetch, $fetch, FetchOptions } from 'ofetch';
import AuthModule from '~/repository/modules/auth';
import DataModule from '~/repository/modules/data';
import { useAuthStore } from '~/stores/auth';
import { errorToast } from './vue3-toastify';
import { useDialogStore } from '~/stores/dialog';

interface IApiInstance {
  auth: AuthModule;
  data: DataModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const dialog = useDialogStore();
  // // const { token } = useProfile();

  // const fetchOptions: FetchOptions = {
  //   baseURL: config.public.baseUrl,
  //   // headers: {
  //   //   Authorization: token.value ? `Bearer ${token.value}` : '',
  //   // },
  // };

  // // console.log(token.value, fetchOptions);

  // const apiFetcher = $fetch.create(fetchOptions);

  const fetchOptions: FetchOptions = {
    baseURL: config.public.baseUrl,
    onRequest({ request, options }) {
      const authStore = useAuthStore();
      console.log('something is being logged');
      if (authStore.authenticated) {
        options.headers = { Authorization: `${authStore.token}` };
        console.log(options);
      } else {
        console.log('Not authenticated');
      }
    },
    onRequestError({ error }) {
      dialog.isLoading = false;
      console.log(error);
      errorToast(
        error.data && error.data.message
          ? error.data.message
          : 'Something went wrong, try again!'
      );
    },
  };

  const apiFetcher = $fetch.create(fetchOptions);

  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
    data: new DataModule(apiFetcher)
  };

  return {
    provide: {
      api: modules,
    },
  };
});
