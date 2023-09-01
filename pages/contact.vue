<template>
  <div class="body text-primary">
    <main>
      <AppHeader />
      <!-- <JobDropdown v-if="dataStore.job" /> -->
      <Contact />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '@/stores/data'

const dataStore = useDataStore();
</script>

<style scoped></style>
