<script setup lang="ts">
import { ref } from 'vue';
const books = ref([
  {
    title: 'Unlocking Success: A Guide to Effective Management Consultancy',
    image: 'book-cover',
    tag: 'Our best seller',
    author: 'Ebook Author',
    link: '#',
    desc: 'In today\'s dynamic business landscape, organizations are faced with complex challenges that demand strategic expertise and innovative solutions. This eBook serves as your comprehensive guide to effective management consultancy, offering valuable insights and practical strategies to drive success.Whether you\'re an independent consultant, part of a consultancy firm, or a business leader seeking to maximize your organization\'s potential, "Unlocking Success: A Guide to Effective Management Consultancy" is your roadmap to achieving excellence in the field. Unlock new opportunities, drive sustainable growth, and become a trusted advisor for organizations seeking to thrive in today\'s competitive marketplace.'
  },
  {
    title: 'Unlocking Success: A Guide to Effective Management Consultancy',
    image: 'book-cover',
    tag: 'ebook genre',
    author: 'Ebook Author',
    link: '#',
    desc: 'In today\'s dynamic business landscape, organizations are faced with complex challenges that demand strategic expertise and innovative solutions. This eBook serves as your comprehensive guide to effective management consultancy, offering valuable insights and practical strategies to drive success.Whether you\'re an independent consultant, part of a consultancy firm, or a business leader seeking to maximize your organization\'s potential, "Unlocking Success: A Guide to Effective Management Consultancy" is your roadmap to achieving excellence in the field. Unlock new opportunities, drive sustainable growth, and become a trusted advisor for organizations seeking to thrive in today\'s competitive marketplace.'
  },
  {
    title: 'Unlocking Success: A Guide to Effective Management Consultancy',
    image: 'book-cover',
    tag: 'ebook genre',
    author: 'Ebook Author',
    link: '#',
    desc: 'In today\'s dynamic business landscape, organizations are faced with complex challenges that demand strategic expertise and innovative solutions. This eBook serves as your comprehensive guide to effective management consultancy, offering valuable insights and practical strategies to drive success.Whether you\'re an independent consultant, part of a consultancy firm, or a business leader seeking to maximize your organization\'s potential, "Unlocking Success: A Guide to Effective Management Consultancy" is your roadmap to achieving excellence in the field. Unlock new opportunities, drive sustainable growth, and become a trusted advisor for organizations seeking to thrive in today\'s competitive marketplace.'
  },
  {
    title: 'Unlocking Success: A Guide to Effective Management Consultancy',
    image: 'book-cover',
    tag: 'ebook genre',
    author: 'Ebook Author',
    link: '#',
    desc: 'In today\'s dynamic business landscape, organizations are faced with complex challenges that demand strategic expertise and innovative solutions. This eBook serves as your comprehensive guide to effective management consultancy, offering valuable insights and practical strategies to drive success.Whether you\'re an independent consultant, part of a consultancy firm, or a business leader seeking to maximize your organization\'s potential, "Unlocking Success: A Guide to Effective Management Consultancy" is your roadmap to achieving excellence in the field. Unlock new opportunities, drive sustainable growth, and become a trusted advisor for organizations seeking to thrive in today\'s competitive marketplace.'
  },
]);
</script>
<template>
  <div class="mx-auto my-[60px] lg:my-[120px] w-full max-w-[1240px]">
    <div v-for="(book, index) in books" class="flex flex-col md:flex-row justify-between items-center my-[50px] lg:my-[100px] w-full">
      <div class="w-full max-w-[298px]">
        <img :src="`/img/${book.image}.png`" alt="picture of people sitting having meeting" />
      </div>
      <div class="w-full max-w-[902px] px-4 mt-6 md:mt-0">
        <p class="text-primary font-semibold text-lg uppercase mb-2">{{ book.tag }}</p>
        <h2 class="font-bold uppercase leading-snug text-xl md:text-3xl text-black">{{ book.title }}</h2>
        <p class="text-grey-4 font-semibold uppercase text-lg mt-2">{{ book.author }}</p>
        <p class="text-grey/80 md:text-lg md:leading-8 mt-2 mb-5">{{ book.desc }}</p>
        <a :href="book.link" class="border-2 border-primary font-semibold px-5 py-3 rounded-lg text-primary">Get eBook</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>