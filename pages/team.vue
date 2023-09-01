<template>
  <nuxt-layout name="team">
    <main>
      <TeamHeader />
      <!-- <JobDropdown v-if="dataStore.job" /> -->
      <TeamHero />
      <TeamJobs />
      <HomeTestimonials />
      <AppFooter />
    </main>
  </nuxt-layout>
</template>

<script setup lang="ts">
import { useDataStore } from '@/stores/data'

const dataStore = useDataStore();
</script>

<style scoped></style>
