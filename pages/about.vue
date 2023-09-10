<template>
  <div class="body">
    <main class="text-primary">
      <AboutHeader />
      <!-- <JobDropdown v-if="dataStore.job" /> -->
      <AboutHero />
      <AboutSecondSection />
      <AboutValues />
      <AboutCTA/>
      <HomeCTA />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '@/stores/data'

const dataStore = useDataStore();
</script>

<style scoped></style>
