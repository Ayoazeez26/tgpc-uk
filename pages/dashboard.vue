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
import { useDataStore } from '~/stores/data';
const data = useDataStore();

const getUserData = () => {
  const userData = data.getUser();

}

getUserData();
</script>

<style scoped></style>
