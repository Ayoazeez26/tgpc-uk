<script setup lang="ts">
import { ref } from 'vue';
const books = ref([
  {
    title: 'best practices for Providing Domiciliary Care in supported Living scheme',
    image: 'Best-Practices1',
    tag: 'health, wellness, and Personal Development',
    author: 'oc management consultants',
    link: '#',
    desc: 'The world as we know it is never static. From media to tech, and so much more, our world is constantly undergoing change. The health sector, in particular, has gradually evolved from traditional, ethically grey methods of care and treatment to more modern, personalised and evidence-based practices. We at OCMC aspire to create a world where people—most especially those from vulnerable demographics—are able to live dignified, fulfilling lives; having access to the best facilities and resources that ensure their utmost well-being. This book serves as a comprehensive guide to social care providers, workers, and social entrepreneurs on the best practices for providing domiciliary care, particularly in supported living schemes.'
  },
  {
    title: 'social care business management explained',
    image: 'Social-Care1',
    tag: 'career development and social entrepreneurship',
    author: 'oc management consultants',
    link: '#',
    desc: 'Are you passionate about making a difference in the lives of others? Do you have a vision for a social care business that can change the world? If so, this book is for you. The Complete Guide to Social Care Business is the definitive guide to starting and running a successful social care business. From market research and business planning to marketing and financial management, this book covers everything you need to know to make your dream a reality. Whether you are a social care professional looking to start your own business or a businessperson looking to enter the social care sector, The Complete Guide to Social Care Business is the essential resource for you.'
  },
  {
    title: 'BRIDGING THE GAP - THE VITAL ROLE OF MSMEs IN REDUCING HEALTH INEQALITIES',
    image: 'Bridging-The-Gap1',
    tag: 'Community Engagement and Social Change',
    author: 'OBIAJUlu c. OKONKWO',
    link: '#',
    desc: 'The global health sector is riddled with divides and disparities. From the quality of treatment and equipment to who exactly has access to healthcare and medical services, these differences have unfortunately prevented its universal advancement. This book highlights the critical role of Micro, Small, and Medium Enterprises (MSMEs) in addressing health inequalities by providing practical insights, strategies, and recommendations for business owners in the social care sector. Key issues such as community engagement, leveraging technology, policy advocacy, and sustaining impact are addressed; and emerging trends like social impact investing and collaborative partnerships are also explored. We at OCMC believe that, with actionable and effective guidance, MSMEs can significantly reduce health inequalities and promote equitable healthcare access!'
  },
  {
    title: 'mastering tupe transfers in social care services',
    image: 'mastering',
    tag: ' Social Care Legislation and Compliance',
    author: 'oc management consultants',
    link: '#',
    desc: 'TUPE, or Transfer of Undertakings (Protection of Employment), is a complex piece of legislation that can have a significant impact on social care businesses. This book provides a comprehensive guide to TUPE transfers in social care services, covering everything from the basics of TUPE to best practices and strategies for managing transfers. Whether you are a social care business owner, manager, or employee, Mastering TUPE Transfers in Social Care Services is an essential resource for you.'
  },
  {
    title: 'THE ULTIMATE GUIDE TO TENDER WRITING',
    image: 'ultimate',
    tag: 'Proposal Writing and Business Communication',
    author: 'oc management consultants',
    link: '#',
    desc: 'The Ultimate Guide to Tender Writing for Small Healthcare Businesses is the definitive guide to writing winning tenders. From understanding the tender process to writing a compelling response, this book covers everything you need to know to increase your chances of success. With clear and concise explanations, real-world examples, and practical advice, this book will help you: Understand the tender process, Identify the right tenders to bid for, Write a compelling tender response, and Manage the tender process effectively. Whether you are a healthcare business owner with no experience in tender writing or a seasoned professional looking to improve your skills, The Ultimate Guide to Tender Writing for Small Healthcare Businesses is the essential resource for you.'
  },
]);
</script>
<template>
  <div class="mx-auto my-[60px] lg:my-[120px] w-full max-w-[1240px]">
    <div v-for="(book, index) in books" class="flex flex-col md:flex-row justify-between items-center my-[50px] lg:my-[100px] w-full">
      <div class="w-full max-w-[330px]">
        <img :src="`/img/${book.image}.png`" alt="picture of people sitting having meeting" />
      </div>
      <div class="w-full max-w-[902px] px-4 mt-6 md:mt-0">
        <p class="text-primary font-semibold text-lg uppercase mb-2">{{ book.tag }}</p>
        <h2 class="font-bold uppercase leading-snug text-xl md:text-3xl text-black">{{ book.title }}</h2>
        <p class="text-grey-4 font-semibold uppercase text-lg mt-2">{{ book.author }}</p>
        <p class="text-grey/80 md:text-lg md:leading-8 mt-2 mb-5">{{ book.desc }}</p>
        <a :href="book.link" class="border-2 border-primary font-semibold px-5 py-3 rounded-lg text-primary">Coming Soon</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>