import { ofetch, $fetch, FetchOptions } from 'ofetch';
import AuthModule from '~/repository/modules/auth';
import DataModule from '~/repository/modules/data';
import { useAuthStore } from '~/stores/auth';
import { errorToast } from './vue3-toastify';
import { useDialogStore } from '~/stores/dialog';

interface IApiInstance {
  auth: AuthModule;
  data: DataModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const dialog = useDialogStore();
  const router = useRouter();
  const fetchOptions: FetchOptions = {
    baseURL: config.public.baseUrl,
    onRequest({ request, options }) {
      const authStore = useAuthStore();
      if (authStore.authenticated) {
        options.headers = { Authorization: `Bearer ${authStore.token}` };
      } else {
        console.log('Not authenticated');
        options.headers = { Authorization: '' };
      }
    },
    onResponseError(error) {
      const authStore = useAuthStore();
      console.log('dialog is =>', dialog);
      dialog.isLoading = false;
      console.log(error);
      if (error.response._data.message === 'jwt expired') {
        console.log('jwt has expired innit');
        errorToast('Session has expired, please login again!');
        authStore.logout();
      } else {
        errorToast(
          error.response && error.response._data
            ? error.response._data.message
            : 'Something went wrong, try again!'
        );
      }
    },
  };

  const apiFetcher = $fetch.create(fetchOptions);

  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
    data: new DataModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
