<script setup lang="ts">
const services = ref([
  {
    img: "care",
    name: "Health Care Assistance",
  },
  {
    img: "carers",
    name: "Carers",
  },
]);
const breakpoints = ref({
  150: {
    itemsToShow: 1,
    snapAlign: 'center'
  },
  1000: {
    itemsToShow: 2,
    snapAlign: 'center'
  }
});

const carousel = ref(null);
const next = () => {
  carousel.value.next();
};

const prev = () => {
  carousel.value.prev();
}
</script>
<template>
  <div class="w-full pt-[80px] lg:pt-[64px]">
    <div class="flex flex-col mx-auto w-full max-w-[1240px]">
      <div class="w-full flex flex-col items-center text-center px-4">
        <div class="w-full mb-14 max-w-[434px]">
          <h2 class="text-2xl lg:text-[32px] font-semibold mb-4">
            Our Recruitment Services
          </h2>
          <p>
            You can Recruit or Become Nurse, Care Assistants, Support Workers,
            and Social Workers
          </p>
        </div>
        <div class="w-full">
          <Carousel ref="carousel" :breakpoints="breakpoints" class="w-full">
            <Slide v-for="(service, index) in services" :key="index">
              <div class="carousel__item max-w-[528px]">
                <div class="md:p-6 flex flex-col">
                  <img :src="`/img/${service.img}.png`" alt="" />
                  <p class="mt-8">{{ service.name }}</p>
                </div>
              </div>
            </Slide>
            <template #addons>
              <Navigation class="invisible md:visible" />
            </template>
          </Carousel>
          <div class="flex md:hidden gap-6 mt-5 justify-center">
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
