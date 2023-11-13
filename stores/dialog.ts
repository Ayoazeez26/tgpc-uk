import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', () => {
  const isLoading = ref(false);
  const showDialog = ref(false);

  return { isLoading, showDialog }
})