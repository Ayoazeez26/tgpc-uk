<script setup lang="ts">
import { ref } from 'vue';
const services = ref([
  {
    title: 'Ebook Title',
    image: 'book-cover'
  },
  {
    title: 'Ebook Title',
    image: 'book-cover'
  },
  {
    title: 'Ebook Title',
    image: 'book-cover'
  },
  {
    title: 'Ebook Title',
    image: 'book-cover'
  },
  {
    title: 'Ebook Title',
    image: 'book-cover'
  },
])
</script>
<template>
  <div class="flex flex-col items-center mb-[100px] lg:mb-[200px] mx-auto w-full max-w-[1240px]">
    <div class="text-center px-4 px-sm-0 w-full">
      <p class="font-semibold text-primary text-sm md:text-xl uppercase">Download our Exclusive Ebooks</p>
      <h2 class="font-bold uppercase leading-snug text-xl md:text-3xl text-black">Enhance Your Expertise and Gain a Competitive Edge with Our eBooks</h2>
    </div>
    <div class="flex justify-center flex-wrap gap-10 mt-4">
      <div v-for="(service, index) in services" class="flex flex-col items-center w-[196px]">
        <img class="" :src="`/img/${service.image}.png`">
        <p class="text-xl font-semibold text-grey uppercase my-2">{{ service.title }}</p>
        <button class="border-2 border-primary mt-2 px-6 py-3 rounded-lg">
          <p class="text-primary font-semibold">Get eBook</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>