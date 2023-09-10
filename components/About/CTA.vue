<script setup lang="ts">
import { ref } from "vue";
const prevClicked = ref(false);
const nextClicked = ref(false);
const testimoinials = ref([
  {
    img: "jessie",
    title: "Senior Nurse",
    name: "Jessie Reyez",
    desc: "Wana Services helped me find a job that perfectly matched my skills and preferences. I am grateful for their support and highly recommend their serviecs.",
    stars: 5,
  },
  {
    img: "jessie",
    title: "Senior Nurse",
    name: "Jessie Reyez",
    desc: "Wana Services helped me find a job that perfectly matched my skills and preferences. I am grateful for their support and highly recommend their serviecs.",
    stars: 5,
  },
]);
const carousel = ref(null);
const next = () => {
  carousel.value.next();
};

const prev = () => {
  carousel.value.prev();
};
</script>
<template>
  <div class="pt-10 lg:py-[80px] relative">
    <div class="flex flex-col mx-auto px-4 xl:px-0 w-full max-w-[1240px]">
      <div
        class="flex flex-col justify-between lg:flex-row lg:items-center w-full"
      >
        <div class="md:w-[612px] relative">
          <div class="flex flex-col gap-6">
            <h3 class="text-2xl lg:text-[32px] font-semibold leading-8">
              We're just getting started
            </h3>
            <p class="text-lg leading-7">
              Our philosophy is simple – hire a team of diverse, passionate
              people and foster a culture that empowers people to be their best
              self despite their situations.
            </p>
            <div class="flex flex-col w-auto lg:flex-row lg:items-center gap-4">
              <nuxt-link
                to="/"
                class="bg-secondary border-2 border-secondary text-center font-medium py-3 px-10 rounded-lg text-white"
              >
                Get in Touch
              </nuxt-link>
            </div>
          </div>
        </div>
        <img
          class="w-full my-10 md:mt-0 max-w-[580px]"
          src="/img/img-group.png"
          alt="care group"
        />
      </div>
      <!-- <Swiper
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
            </div>
            <p class="text-lg font-medium text-grey mt-6">
              {{ service.title }}
            </p>
            <p class="mt-2">{{ service.desc }}</p>
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
      </Swiper> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel__item {
  align-items: start;
  text-align: left;
}
</style>
