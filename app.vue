<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { useDialogStore } from '@/stores/dialog';

const dialogStore = useDialogStore();
</script>
<template>
  <div>
    <Loading v-if="dialogStore.isLoading" class="loader" />
    <Dialog v-if="dialogStore.showDialog" class="loader" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
html {
  height: 100%;
}
.body {
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
}

main {
  flex: 1 0;
}
footer {
  flex: 0 0;
}
</style>