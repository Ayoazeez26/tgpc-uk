<script setup lang="ts">
import { ref } from "vue";
const services = ref([
  {
    title: "Best Practices For Providing Domicillary Care",
    image: "Best-Practices1",
  },
  {
    title: "Social Care Business Management Explained",
    image: "Social-Care1",
  },
  {
    title: "Bridging The Gap - Obiajulu C. Okonkwo",
    image: "Bridging-The-Gap1",
  },
  {
    title: "Mastering TUPE Transfers in Social Care Services",
    image: "mastering",
  },
]);
</script>
<template>
  <div
    class="flex flex-col items-center mb-[100px] lg:mb-[200px] mx-auto w-full max-w-[1240px]"
  >
    <div
      class="flex flex-col md:flex-row items-center justify-between w-full px-4"
    >
      <div class="w-full">
        <p class="font-semibold text-primary md:text-xl uppercase">
          Download our Exclusive Ebooks
        </p>
        <h2
          class="font-bold uppercase leading-snug text-2xl md:text-3xl text-black"
        >
          Enhance Your Expertise with Our eBooks
        </h2>
      </div>
      <nuxt-link
        to="/ebooks"
        class="hidden md:flex min-w-max gap-2 items-center self-start mt-2 lg:mt-0"
      >
        <p class="text-primary font-semibold">See All</p>
        <Icon
          name="ic:baseline-arrow-forward-ios"
          size="24px"
          color="#03989E"
        />
      </nuxt-link>
    </div>
    <div class="flex justify-center flex-wrap gap-4 md:gap-8 mt-4">
      <div
        v-for="(service, index) in services"
        class="flex flex-col items-center w-5/12 md:w-[284px]"
      >
        <img class="" :src="`/img/${service.image}.png`" />
        <!-- <p class="text-lg font-semibold text-grey text-center my-2">
          {{ service.title }}
        </p> -->
        <!-- <nuxt-link to="/ebooks" class="border-2 border-primary mt-2 px-6 py-3 rounded-lg">
          <p class="text-primary font-semibold">Coming Soon</p>
        </nuxt-link> -->
      </div>
    </div>
    <div class="flex w-full px-4 md:hidden">
      <nuxt-link
        to="/about"
        class="border-2 border-primary bg-primary flex justify-center gap-2 items-center mt-4 px-10 py-4 rounded-lg w-full md:w-auto"
      >
        <p class="text-white font-semibold">See All</p>
        <Icon
          name="ic:baseline-arrow-forward-ios"
          size="24px"
          color="#FFFFFF"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped></style>
