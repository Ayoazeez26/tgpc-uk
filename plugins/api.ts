import { ofetch, $fetch, FetchOptions } from 'ofetch';
import AuthModule from '~/repository/modules/auth';
import DataModule from '~/repository/modules/data';
import { useAuthStore } from '~/stores/auth';
import { errorToast } from './vue3-toastify';
import { useDialogStore } from '~/stores/dialog';
import { RefreshTokenInput } from '~/types';

interface IApiInstance {
  auth: AuthModule;
  data: DataModule;
}

let refreshTokenPromise = null;

const getRefreshToken = () => {};

// Example POST method implementation:
export async function refreshToken(config: any, data: RefreshTokenInput) {
  // Default options are marked with *
  const response = await fetch(
    `${config.public.baseUrl}/account/refresh-token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: '',
      },
      body: JSON.stringify(data),
    }
  );
  return response.json(); // parses JSON response into native JavaScript objects
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const dialog = useDialogStore();
  const router = useRouter();
  let opt = {

  }
  const fetchOptions: FetchOptions = {
    retryStatusCodes: [451],
    retry: 3,
    retryDelay: 500, // ms
    baseURL: config.public.baseUrl,
    onRequest({ request, options }) {
      const authStore = useAuthStore();
      console.log(authStore.authenticated);
      if (authStore.authenticated && authStore.token) {
        console.log(authStore.token);
        opt = { Authorization: `Bearer ${authStore.token}` };
        options.headers = opt;
      } else {
        console.log('Not authenticated');
        opt = { Authorization: '' };
      }
    },
    onResponseError(error) {
      const authStore = useAuthStore();
      const { $api } = useNuxtApp();
      console.log('dialog is =>', dialog);
      dialog.isLoading = false;
      console.log(error);
      if (error.response.status === 451) {
        const payload: RefreshTokenInput = {
          expiredToken: authStore.token as string,
          refreshToken: authStore.refreshToken as string,
        };
        // opt = { Authorization: '' };

        refreshToken(config, payload)
          .then((data) => {
            console.log(data);
            opt = { Authorization: `Bearer ${data.token}` };
            authStore.token = data.token;
            authStore.refreshToken = data.refreshToken;
          })
          .catch((err) => {
            errorToast('Session has expired, please login again!');
            setTimeout(() => {
              authStore.logout();
            }, 1000);
          });
        // $api.auth.refreshToken(payload).then((res) => {
        //   console.log(res);
        // })
      } else if (error.response.status === 456) {
        errorToast('Session has expired, please login again!');
        setTimeout(() => {
          authStore.logout();
        }, 1000);
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
