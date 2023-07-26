<script setup lang="ts">
import { ref } from "vue";
const services = ref([
  {
    title: "CQC Regulation 13: Good Governance",
    image: "https://www.youtube.com/embed/Rtp4sPBRHGU",
  },
  {
    title: "CQC Regulation 17: Good Governance",
    image: "https://www.youtube.com/embed/6cFfbToNJL0",
  },
  {
    title: "CQC Regulation 20: Duty of Candour",
    image: "https://www.youtube.com/embed/lnuSV4x19Qs",
  },
  {
    title: 'CQC Regulation 11: Why is "Need For Consent" important?',
    image: "https://www.youtube.com/embed/8uxOulPNetA",
  },
]);
</script>
<template>
  <div
    class="flex flex-col items-center mb-[100px] lg:mb-[200px] mx-auto px-4 md:px-0 w-full max-w-[1240px]"
  >
    <div class="flex flex-col md:flex-row items-center justify-between w-full">
      <div class="w-full">
        <p class="font-semibold text-primary md:text-xl ">
          Videos that simplify complex concepts
        </p>
        <h2
          class="font-bold  leading-snug text-2xl md:text-3xl text-black"
        >
          Discover key concepts through captivating explainer videos
        </h2>
      </div>
      <a
        href="https://www.youtube.com/@ocmanagementconsultants7800"
        target="_blank"
        class="hidden md:flex min-w-max gap-2 items-center self-start mt-2"
      >
        <p class="text-primary font-semibold">See All</p>
        <Icon
          name="ic:baseline-arrow-forward-ios"
          size="24px"
          color="#03989E"
        />
      </a>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-4 mt-4">
      <div
        v-for="(service, index) in services"
        class="flex flex-col items-center w-full md:w-[298px]"
      >
        <!-- <img class="w-full md:w-auto" :src="`/img/${service.image}.png`"> -->
        <iframe
          width="100%"
          height="auto"
          :src="service.image"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p class="text-lg font-medium text-grey text-center my-2">
          {{ service.title }}
        </p>
      </div>
    </div>
    <div class="flex w-full md:hidden">
      <a
        href="https://www.youtube.com/@ocmanagementconsultants7800"
        target="_blank"
        class="border-2 border-primary bg-primary flex justify-center gap-2 items-center mt-4 px-10 py-4 rounded-lg w-full md:w-auto"
      >
        <p class="text-white font-semibold">See All</p>
        <Icon
          name="ic:baseline-arrow-forward-ios"
          size="24px"
          color="#FFFFFF"
        />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
