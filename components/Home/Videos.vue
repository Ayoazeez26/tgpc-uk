<script setup lang="ts">
import { ref } from 'vue';
const services = ref([
  {
    title: 'CQC Regulation 13: Good Governance',
    image: 'video-placeholder'
  },
  {
    title: 'CQC Regulation 17: Good Governance',
    image: 'video-placeholder'
  },
  {
    title: 'CQC Regulation 20: Duty of Candour',
    image: 'video-placeholder'
  },
  {
    title: 'CQC Regulation 11: Why is "Need For Consent" important?',
    image: 'video-placeholder'
  },
])
</script>
<template>
  <div class="flex flex-col items-center mb-[100px] lg:mb-[200px] mx-auto px-4 md:px-0 w-full max-w-[1240px]">
    <div class="flex flex-col md:flex-row items-center justify-between w-full">
      <div class="w-full">
        <p class="font-semibold text-primary text-sm md:text-xl uppercase">Videos that simplify complex concepts</p>
        <h2 class="font-bold uppercase leading-snug text-xl md:text-3xl text-black">Discover key concepts through captivating explainer videos</h2>
      </div>
      <nuxt-link to="/" class="flex min-w-max gap-2 items-center self-start mt-2">
        <p class="text-primary font-semibold">See All</p>
        <Icon name="ic:baseline-arrow-forward-ios" size="24px" color="#03989E" />
      </nuxt-link>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-4 mt-4">
      <div v-for="(service, index) in services" class="flex flex-col items-center w-[298px]">
        <img class="" :src="`_nuxt/assets/images/${service.image}.png`">
        <p class="text-lg font-medium text-grey text-center my-2">{{ service.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>