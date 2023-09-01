<template>
  <div class="body text-primary">
    <main>
      <AppHeader />
      <!-- <JobDropdown v-if="dataStore.job" /> -->
      <JobClientFirst v-if="!dataStore.clientStart"/>
      <JobClientSecond v-else/>
      <ServiceTrust />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '@/stores/data'

const dataStore = useDataStore();
</script>

<style scoped></style>
