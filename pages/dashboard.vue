<template>
  <div class="body">
    <main class="text-primary bg-grey-3">
      <DashHeader />
      <DashboardHero />
      <DashboardSearch />
      <!-- <HomeCTA /> -->
      <!-- <HomeQandA /> -->
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '@/stores/data'

const dataStore = useDataStore();
</script>

<style scoped></style>
