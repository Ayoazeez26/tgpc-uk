import { ofetch, $fetch, FetchOptions } from 'ofetch';
import AuthModule from '~/repository/modules/auth';
import DataModule from '~/repository/modules/data';
import { useAuthStore } from '~/stores/auth';
import { errorToast } from './vue3-toastify';
import { useDialogStore } from '~/stores/dialog';
import type { RefreshTokenInput } from '~/types';

interface IApiInstance {
  auth: AuthModule;
  data: DataModule;
}

// Example POST method implementation:
export async function refreshToken(config: any, data: RefreshTokenInput) {
  // Default options are marked with *
  try {
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
    if (response.ok) {
      console.log(response);
      return response.json();
    } else {
      throw new Error(response);
    }
  } catch (response) {
    throw new Error(response);
  }
  // return response.json(); // parses JSON response into native JavaScript objects
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const dialog = useDialogStore();
  const router = useRouter();
  let opt = {};
  const fetchOptions: FetchOptions = {
    retryStatusCodes: [451],
    retry: 3,
    retryDelay: 1000, // ms
    baseURL: config.public.baseUrl,
    onRequest({ request, options }) {
      const authStore = useAuthStore();
      // console.log(authStore.authenticated);
      if (authStore.authenticated && authStore.user.accessToken) {
        // console.log(authStore.token);
        opt = { Authorization: `Bearer ${authStore.user.accessToken}` };
        options.headers = opt;
      } else {
        // console.log('Not authenticated');
        opt = { Authorization: '' };
      }
    },
    onResponseError(error) {
      const authStore = useAuthStore();
      const { $api } = useNuxtApp();
      dialog.isLoading = false;
      console.log(error);
      if (error.response.status === 451) {
        const payload: RefreshTokenInput = {
          expiredToken: authStore.user.accessToken as string,
          refreshToken: authStore.user.refreshToken as string,
        };
        // opt = { Authorization: '' };
        // const refreshUserToken = refreshToken(config, payload);
        // if (!refreshUserToken) {
        //   errorToast('Session has expired, please login again!');
        //   setTimeout(() => {
        //     authStore.logout();
        //   }, 1000);
        // } else {
        //   console.log(refreshUserToken);
        //   opt = { Authorization: `Bearer ${refreshUserToken.data.token}` };
        //   authStore.user.accessToken = refreshUserToken.data.token;
        //   authStore.user.refreshToken = refreshUserToken.data.refreshToken;
        // }
        refreshToken(config, payload)
          .then((data) => {
            console.log(data);
            opt = { Authorization: `Bearer ${data.token}` };
            authStore.user.accessToken = data.token;
            authStore.user.refreshToken = data.refreshToken;
          })
          .catch((err) => {
            console.log(err);
            errorToast('Session has expired, please login again!');
            setTimeout(() => {
              authStore.logout();
            }, 1000);
          });
        // $api.auth.refreshToken(payload).then((res) => {
        //   console.log(res);
        // });
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
