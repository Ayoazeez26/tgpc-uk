<script setup lang="ts">
import { ref } from 'vue';
const services = ref([
  {
    name: 'Phone Number',
    title: 'Company\'s Phone Number',
    image: 'phone'
  },
  {
    name: 'Email Address',
    title: 'Company\'s Email Address',
    image: 'mail'
  },
  {
    name: 'Office Address',
    title: 'Company\'s location',
    image: 'location'
  },
])
</script>
<template>
  <div class="flex flex-col lg:mt-[100px] lg:mb-[200px] mx-auto px-4 w-full max-w-[1240px]">
    
    <div class="flex justify-center md:justify-start flex-wrap gap-3 mt-11">
      <div v-for="(service) in services" class="border-2 border-light-green flex flex-col justify-center rounded-lg px-6 w-[390px] h-[125px]">
        <div class="flex items-center gap-3">
          <img class="w-[40px]" :src="`_nuxt/assets/icons/${service.image}.svg`">
          <div class="flex flex-col">
            <p class="text-xl font-semibold uppercase text-black">{{ service.name }}</p>
            <p class="text-sm font-medium text-black/80">{{ service.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>