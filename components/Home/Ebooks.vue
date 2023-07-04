<script setup lang="ts">
import { ref } from 'vue';
const services = ref([
  {
    title: 'Best Practices For Providing Domicillary Care',
    image: 'Best-Practices1'
  },
  {
    title: 'Social Care Business Management Explained',
    image: 'Social-Care1'
  },
  {
    title: 'Bridging The Gap - Obiajulu C. Okonkwo',
    image: 'Bridging-The-Gap1'
  },
  {
    title: 'Mastering TUPE Transfers in Social Care Services',
    image: 'mastering'
  },
]);
</script>
<template>
  <div class="flex flex-col items-center mb-[100px] lg:mb-[200px] mx-auto w-full max-w-[1240px]">
    <div class="flex flex-col md:flex-row items-center justify-between w-full">
      <div class="w-full">
        <p class="font-semibold text-primary text-sm md:text-xl uppercase">Download our Exclusive Ebooks</p>
        <h2 class="font-bold uppercase leading-snug text-xl md:text-3xl text-black">Enhance Your Expertise with Our UPCOMING eBooks</h2>
      </div>
      <nuxt-link to="/ebooks" class="flex min-w-max gap-2 items-center self-start mt-2 lg:mt-0">
        <p class="text-primary font-semibold">See All</p>
        <Icon name="ic:baseline-arrow-forward-ios" size="24px" color="#03989E" />
      </nuxt-link>
    </div>
    <div class="flex justify-center flex-wrap gap-8 mt-4">
      <div v-for="(service, index) in services" class="flex flex-col items-center w-[284px]">
        <img class="" :src="`/img/${service.image}.png`">
        <p class="text-lg font-semibold text-grey text-center my-2">{{ service.title }}</p>
        <button class="border-2 border-primary mt-2 px-6 py-3 rounded-lg">
          <p class="text-primary font-semibold">Coming Soon</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>