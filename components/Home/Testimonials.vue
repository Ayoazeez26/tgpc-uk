<script setup lang="ts">
import { ref } from "vue";
const prevClicked = ref(false);
const nextClicked = ref(false);

const services = ref([
  {
    title: "Gary. G Essex - Domicillary care",
    desc: "“Highly recommended! Crystalize Care Services excelled in communication, personalized care, and building a strong rapport with my Aunt. They went above and beyond, showing genuine care and dedication to their job.”",
    image: "gary",
  },
  {
    title: "Gary. G Essex - Domicillary care",
    desc: "“Highly recommended! Crystalize Care Services excelled in communication, personalized care, and building a strong rapport with my Aunt. They went above and beyond, showing genuine care and dedication to their job.”",
    image: "essex",
  },
  {
    title: "Gary. G Essex - Domicillary care",
    desc: "“Highly recommended! Crystalize Care Services excelled in communication, personalized care, and building a strong rapport with my Aunt. They went above and beyond, showing genuine care and dedication to their job.”",
    image: "carer",
  },
]);

const getSlidesPerView = computed(() => {
  if (window.innerWidth <= 768) {
    return 1;
  } else if (window.innerWidth <= 1190) {
    return 2;
  } else {
    return 3;
  }
});

const getSpaceBetween = computed(() => {
  if (window.innerWidth >= 768) {
    return 20;
  } else {
    return undefined;
  }
});

const resetBtnValues = () => {
  prevClicked.value = false;
  nextClicked.value = false;
};
</script>
<template>
  <div class="bg-light-red py-[60px] lg:py-[120px] relative">
    <img class="absolute top-0 right-0 z-0" src="/svg/arrowhead.svg" alt="arrow head">
    <div class="flex flex-col mx-auto px-4 xl:px-0 w-full max-w-[1240px]">
      <div class="flex lg:items-center justify-between w-full mb-6 md:mb-24">
        <div class="">
          <h2
            class="font-semibold leading-snug text-2xl md:text-3xl lg:text-5xl text-black mb-3 w-full max-w-[497px]"
          >
            Patients Have Said
          </h2>
          <div class="hidden gap-6 md:flex">
            <button
              @click="prevClicked = true"
              class="flex min-w-max bg-red-1 w-20 h-20 rounded-full items-center justify-center mt-2"
            >
              <img src="/svg/left.svg" alt="right icon" />
            </button>
            <button
              @click="nextClicked = true"
              class="flex min-w-max bg-red-1 w-20 h-20 rounded-full items-center justify-center mt-2"
            >
              <img src="/svg/right.svg" alt="right icon" />
            </button>
          </div>
        </div>
      </div>
      <Swiper
        :modules="[SwiperFreeMode]"
        :height="400"
        :loop="true"
        :effect="'freemode'"
        :slides-per-view="getSlidesPerView"
        :space-between="getSpaceBetween"
      >
        <SwiperSlide
          v-for="(service, idx) in services"
          :key="idx"
          :style="'font-size: 16px'"
        >
          <div
            class="flex flex-col justify-between rounded-lg pr-6 w-full md:w-[397px]"
          >
            <div class="relative max-w-fit">
              <img class="w-[64px]" :src="`/img/${service.image}.png`" />
              <img
                class="absolute -right-3 top-5 w-6"
                src="/img/quotes.png"
                alt="quotes"
              />
            </div>
            <p class="text-lg font-medium text-grey mt-6">
              {{ service.title }}
            </p>
            <p class="text-grey-2 text-lg mt-2">{{ service.desc }}</p>
          </div>
        </SwiperSlide>
        <SwiperControls
          class="hidden"
          :clickPrev="prevClicked"
          :clickNext="nextClicked"
          @resetBtnValues="resetBtnValues"
        />
        <div class="md:hidden gap-6 flex">
          <button
            @click="prevClicked = true"
            class="flex min-w-max bg-blue-2 w-20 h-20 rounded-full items-center justify-center mt-2"
          >
            <img src="/svg/left.svg" alt="right icon" />
          </button>
          <button
            @click="nextClicked = true"
            class="flex min-w-max bg-blue-2 w-20 h-20 rounded-full items-center justify-center mt-2"
          >
            <img src="/svg/right.svg" alt="right icon" />
          </button>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
