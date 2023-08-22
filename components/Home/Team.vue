<script setup lang="ts">
const services = ref(["surrey", "agri", "anchor", "trust", "point"]);

const carousel = ref(null);
const next = () => {
  carousel.value.next();
};

const prev = () => {
  carousel.value.prev();
}
const breakpoints = ref({
  150: {
    itemsToShow: 2,
    snapAlign: 'center'
  },
  768: {
    itemsToShow: 3,
    snapAlign: 'center'
  },
  1000: {
    itemsToShow: 5,
    snapAlign: 'center'
  }
});
</script>
<template>
  <div class="w-full pt-[80px] lg:pt-[120px]">
    <div class="flex flex-col mx-auto w-full max-w-[1240px]">
      <div class="w-full flex flex-col items-center text-center px-4">
        <div class="w-full max-w-[588px] mb-10">
          <h2 class="text-2xl lg:text-[32px] font-semibold mb-4">
            We're a Distributed Team
          </h2>
          <p class="leading-[28px]">
            We have experienced and qualified health care professionals
            available. We cover most UK cities and towns. Majorly in
          </p>
        </div>
        <img src="/svg/location.svg" alt="team location" />
        <div class="w-full pt-16">
          <p class="mb-10">We are trusted by amazing companies</p>
          <Carousel ref="carousel" :breakpoints="breakpoints" class="w-full">
            <Slide v-for="(service, index) in services" :key="index">
              <div class="carousel__item h-14">
                <img class="h-14 w-auto" :src="`/img/${service}.png`" alt="" />
              </div>
            </Slide>
            <template #addons>
              <Navigation class="invisible md:visible" />
            </template>
          </Carousel>
          <div class="flex md:hidden gap-6 justify-center">
            <button
              @click="prev"
              class="flex min-w-max bg-white border border-grey-3 w-16 h-16 rounded-lg items-center justify-center mt-2"
            >
              <Icon name="mdi:arrow-left" size="32" />
            </button>
            <button
              @click="next"
              class="flex min-w-max bg-white border border-grey-3 w-16 h-16 rounded-lg items-center justify-center mt-2"
            >
              <Icon name="mdi:arrow-right" size="32"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="about" />
  </div>
</template>

<style lang="scss"></style>
