import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const userEmail = ref("");

  return { userEmail }
})