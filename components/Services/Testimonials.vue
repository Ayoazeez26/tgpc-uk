<script setup lang="ts">
import { ref } from 'vue';
const services = ref([
  {
    name: 'I. Afone',
    title: 'DIVINE 24/7 RECRUITMENT LTD',
    desc: '“Thinking of applying for a tender, OCMC is the go-to. If you require Business Consultation OCMC has the solution. If you require strategic business advice, go to OCMC any time any day, and they will deliver. This has been my experience.”',
    image: 'afone'
  },
  {
    name: 'J. Katsande',
    title: 'Company Director of Haven Healthcare Services',
    desc: '“OCMC has been absolutely helpful in the process of being awarded our tender. Oby especially has also offered invaluable support and key information for business sustainability. Excellent service!”',
    image: 'kat'
  },
  {
    name: 'Chris Dube',
    title: 'Executive Director of Relief Professionals Group',
    desc: '“I don’t hesitate to recommend anyone to OCMC. They are the best tender writers I have worked with so far. They made everything very easy for us. We have commissioned the writing of another 3, after winning 2.”',
    image: 'chris'
  },
])
</script>
<template>
  <div class="flex flex-col lg:mb-[200px] mx-auto px-4 w-full max-w-[1240px]">
    <div class="flex lg:items-center justify-between w-full">
      <div class="">
        <p class="font-semibold text-primary text-sm md:text-lg uppercase">our clients’ testimonials</p>
        <h2 class="font-bold uppercase leading-snug text-xl md:text-3xl text-black w-full max-w-[497px]">real stories, real results.</h2>
      </div>
      <div class="flex">
        <button class="flex min-w-max gap-2 items-center self-start mt-2">
          <Icon name="ic:baseline-arrow-back-ios" size="24px" color="#03989E" />
        </button>
        <button class="flex min-w-max gap-2 items-center self-start mt-2">
          <Icon name="ic:baseline-arrow-forward-ios" size="24px" color="#03989E" />
        </button>
      </div>
    </div>
    <div class="flex justify-center md:justify-start flex-wrap gap-[22px] mt-11">
      <div v-for="(service) in services" class="border-2 border-light-green flex flex-col justify-between rounded-lg px-6 py-11 w-[380px] h-[399px]">
        <p class="text-center text-grey-4/80 mb-6">{{ service.desc }}</p>
        <div class="flex items-center gap-3">
          <img class="w-[100px]" :src="`_nuxt/assets/images/${service.image}.png`">
          <div class="flex flex-col">
            <p class="text-xl font-semibold text-primary">{{ service.name }}</p>
            <p class="text-sm font-medium text-black/80 uppercase">{{ service.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>