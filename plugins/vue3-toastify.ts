import Vue3Toastify, { toast, type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const options = {
  position: 'top-right',
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: 'button',
  icon: true,
  rtl: false,
  toastClassName: 'custom',
  bodyClassName: ['custom'],
};

export const successToast = (message: string) => {
  // toast.clear();
  toast.success(message);
};

export const warningToast = (message: string) => {
  // toast.clear();
  toast.warning(message);
};

export const infoToast = (message: string) => {
  // toast.clear();
  toast.info(message);
};

export const errorToast = (message: string) => {
  // toast.clear();
  toast.error(message);
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    autoClose: 3000,
    position: 'top-center',
    theme: 'dark',
    toastClassName: 'custom',
    bodyClassName: 'custom'
  } as ToastContainerOptions);
  return {
    provide: {
      toast,
    },
  };
});
