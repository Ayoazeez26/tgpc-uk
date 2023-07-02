<script setup lang="ts">
import { ref } from 'vue';

const blogs = ref([
  {
    img: 'fund',
    title: '£500 million fund to make patients top priority',
    author: 'admin',
    date: 'april 23, 2023',
    to: '/blog/id',
    shortText: 'We are excited about the new cabinet ministers appointed by Liz Truss. The Secretary of State for Health and Social Care, Thérèse...'
  },
  {
    img: 'work',
    title: 'workforce development fund: adult social care',
    author: 'admin',
    date: 'april 14, 2023',
    to: '/blog/id',
    shortText: 'The care sector is one of the most important sectors in our society, yet it is also one of the most underfunded and understaffed...'
  },
  {
    img: 'supported',
    title: 'supported living: the economical benefits',
    author: 'admin',
    date: 'april 23, 2023',
    to: '/blog/id',
    shortText: 'With the release of the UK Government’s ‘Plan for Patients’, Thérèse Coffey MP has announced a package of measures to increase...'
  },
  {
    img: 'impact',
    title: 'making an impact with your investments',
    author: 'admin',
    date: 'april 23, 2023',
    to: '/blog/id',
    shortText: 'Impact investment is defined as an investment made with the intention to generate positive, measurable social and environmental impact alongside...'
  },
  {
    img: 'investment',
    title: 'Supported Living: The Perfect Investment For Your Real Estate Portfolio',
    author: 'admin',
    date: 'april 23, 2023',
    to: '/blog/id',
    shortText: 'If you’re like most people, when you think of investing in housing, you probably think of buying a house or an apartment and renting it...'
  },
  {
    img: 'social',
    title: 'social value: a crucial contributor to healthcare services',
    author: 'admin',
    date: 'april 23, 2023',
    to: '/blog/id',
    shortText: 'In the public, corporate, and nonprofit sectors, the term “social value” is frequently used, but what does it actually mean?...'
  },
  {
    img: 'care',
    title: 'Personalized Care – Disability in the heart of care.',
    author: 'admin',
    date: 'april 23, 2023',
    to: '/blog/id',
    shortText: 'Health inequality is still a great challenge in the UK, and the outbreak of the Covid-19 pandemic provided shocking evidence...'
  },
])
</script>
<template>
  <div class="mx-auto w-full max-w-[1240px]">
        <p class="font-semibold text-primary text-sm md:text-xl uppercase mb-4">
          OTHER STORIES
        </p>
    <div
      class="flex flex-wrap justify-between items-center mb-[60px] lg:mb-[120px] w-full"
    >
      <div v-for="(blog, index) in blogs" class="md:w-1/2 max-w-[588px] md:px-4 xl:px-0 mb-10 lg:mb-20">
        <img
        :src="`_nuxt/assets/images/${blog.img}.png`"
        :alt="blog.img"
        />
        <div class="px-4 lg:px-0 mt-6">
        <h2
          class="font-bold uppercase leading-snug text-xl md:text-3xl text-black"
        >
          {{ blog.title }}
        </h2>
        <div class="text-grey-6 font-semibold uppercase flex">
          <span>By {{ blog.author }} </span>
          <p class="h-[16px] mx-2 w-px bg-primary"></p>
          <span> {{ blog.date }}</span>
        </div>
        <p class="text-grey-4/80 md:text-lg mt-3">
          {{ blog.shortText }}
          <nuxt-link to="/blog/id" class="text-primary text-lg font-semibold">Read more...</nuxt-link>
        </p>
      </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped></style>
