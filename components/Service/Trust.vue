<script setup lang="ts">
const services = ref(["surrey", "agri", "anchor", "trust", "point"]);

const carousel = ref(null);
const next = () => {
  carousel.value.next();
};

const prev = () => {
  carousel.value.prev();
};
const breakpoints = ref({
  150: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  768: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  1000: {
    itemsToShow: 5,
    snapAlign: "center",
  },
});
</script>
<template>
  <div class="py-20 md:py-16 mx-auto w-full max-w-[1240px] px-4 xl:px-0">
    <div class="w-full pb-36">
      <p class="text-center">We are trusted by amazing companies</p>
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
          <Icon name="mdi:arrow-right" size="32" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  width: 392px;
  padding: 32px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
</style>
