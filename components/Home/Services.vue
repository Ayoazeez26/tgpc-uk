<script setup lang="ts">
import { ref } from 'vue';
const services = ref([
  {
    title: 'Grants',
    desc: 'We help organizations identify and secure funding opportunities, develop winning proposals, and ensure compliance with relevant regulations and standards.',
    image: 'grant'
  },
  {
    title: 'BIDS/ TENDERS PROCUREMENT',
    desc: 'We assist organizations in responding to bids and tenders, and in developing successful procurement applications.',
    image: 'bids'
  },
  {
    title: 'Quality Assurance',
    desc: 'We work with organizations to develop & implement quality assurance plans that meet regulatory requirements and ensure that products meet the highest standards.',
    image: 'qa'
  },
  {
    title: 'License Applications',
    desc: 'We help organizations navigate the complex process of applying for licenses, ensuring compliance with relevant regulations and standards.',
    image: 'license'
  },
])
</script>
<template>
  <div class="flex flex-col lg:mb-[200px] mx-auto px-4 lg:px-0 w-full max-w-[1240px]">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between w-full">
      <div class="">
        <p class="font-semibold text-primary text-sm md:text-xl uppercase">Our Services</p>
        <h2 class="font-bold uppercase leading-snug text-2xl md:text-3xl text-black w-full max-w-[497px]">WHAT OC Management Consultancy can do for you</h2>
      </div>
      <p class="text-grey/80 mt-3 lg:mt-0 md:text-lg w-full max-w-[553px]">Expertly crafted proposals that maximize your chances of winning contracts, grants, and bids. Establishing excellence through tailored quality assurance frameworks.</p>
    </div>
    <div class="flex justify-center md:justify-start flex-wrap gap-[13px] mt-11">
      <div v-for="(service) in services" class="border-2 border-light-green flex flex-col rounded-lg p-6 w-full md:w-[300px]">
        <img class="w-[66px]" :src="`/img/${service.image}.png`">
        <p class="text-xl font-bold text-primary uppercase my-2">{{ service.title }}</p>
        <p class="">{{ service.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>