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
}
</script>
<template>
  <div class="py-[120px] lg:pb-[240px] relative">
    <div class="flex flex-col mx-auto px-4 xl:px-0 w-full max-w-[1240px]">
      <div class="flex flex-col justify-between lg:flex-row lg:items-center w-full">
        <div class="md:w-[572px] relative">
          <div class="absolute bottom-0 right-0 gap-4 flex z-[1]">
            <button
              @click="prev"
              class="flex min-w-max bg-white border border-grey-3 w-14 md:w-16 h-14 md:h-16 rounded-lg items-center justify-center mt-2"
            >
              <Icon name="mdi:arrow-left" size="28" />
            </button>
            <button
              @click="next"
              class="flex min-w-max bg-white border border-grey-3 w-14 md:w-16 h-14 md:h-16 rounded-lg items-center justify-center mt-2"
            >
              <Icon name="mdi:arrow-right" size="28"/>
            </button>
          </div>
          <Carousel ref="carousel" :items-to-show="1" class="w-full">
            <Slide v-for="(person, index) in testimoinials" :key="index">
              <div
                class="carousel__item max-w-[528px] flex flex-col items-start"
              >
                <img class="w-16" src="/img/quote.png" alt="quote">
                <p class="text-xl leading-[32px] md:text-[22px] mt-10 font-semibold">{{ person.desc }}</p>
                <div class="flex mt-6 mb-10 gap-2">
                  <div class="" v-for="star in person.stars" :key="star">
                    <img class="w-6" src="/svg/star.svg" alt="star" />
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="relative max-w-fit">
                    <img class="w-[56px]" :src="`/img/${person.img}.png`" />
                  </div>
                  <div class="flex flex-col gap-2">
                    <p class="font-bold text-base">
                      {{ person.name }}
                    </p>
                    <p class="text-sm">
                      {{ person.title }}
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
            <template #addons>
              <Navigation class="invisible" />
            </template>
          </Carousel>
        </div>
        <img
          class="w-full my-10 md:mt-0 max-w-[612px]"
          src="/img/care-group.png"
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
