<script setup lang="ts">
import { ref } from 'vue';
const services = ref([
  {
    name: 'Phone Number',
    title: '+44 2074 594519 / +44 7720 185252',
    image: 'phone'
  },
  {
    name: 'Email Address',
    title: 'hello@ocmanagementconsultants.co.uk',
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
      <div v-for="(service) in services" class="border-2 border-light-green flex flex-col justify-center rounded-lg px-6 w-full md:w-[390px] h-[125px]">
        <div class="flex break-words relative items-center gap-3">
          <img class="w-[40px]" :src="`/svg/${service.image}.svg`">
          <div class="flex flex-col w-full pr-6 md:pr-0">
            <p class="text-xl font-semibold uppercase text-black">{{ service.name }}</p>
            <p class="text-lg font-medium break-words pr-10 text-grey">{{ service.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>