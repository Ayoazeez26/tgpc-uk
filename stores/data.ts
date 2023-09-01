import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const job = ref(false);
  const clientStart = ref(false);
  const candidateStart = ref(false);

  return { job, clientStart, candidateStart }
})