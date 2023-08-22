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
  <div class="py-20 px-4 xl:px-0 md:py-28 w-full max-w-[1240px] mx-auto">
    <div class="w-full flex mx-auto">
      <div
        class="flex flex-col justify-between lg:flex-row lg:items-center w-full max-w-[1240px]"
      >
        <img class="w-full max-w-[612px]" src="/img/medicals.png" />
        <div class="flex flex-col w-full mt-10 md:mt-0 max-w-[572px]">
          <h2
            class="font-semibold text-[26px] md:text-[32px] leading-[42px] md:leading-[48px]"
          >
            Begin your Health Care Service Journey Today!
          </h2>
          <p class="mt-2 md:mt-6 leading-[28px]">
            Our dedicated team understands the importance of finding work in
            your city or town, and we are here to help you every step of the
            way. Whether you’re a nurse, care assistant, support worker, or
            social worker, we have the connections and expertise to get you to
            work in your desired location anywhere in the UK.
          </p>
        </div>
      </div>
    </div>
    <div class="w-full pt-16">
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
    <div class="flex flex-col lg:flex-row lg:justify-between w-full mt-16 md:mt-10">
      <h2
        class="font-semibold text-[26px] md:text-[32px] leading-[42px] md:leading-[48px]"
      >
        We're all About Standing Out
      </h2>
      <p class="mt-6 md:mt-0 leading-[28px] w-full max-w-[612px]">
        We are unique in a way that our candidates are not just temporary staff but real partners and assets to Wana Services. We support you all the way so even you have never done a care job before, you will enjoy working with us as our representatives will offer you ongoing support to ensure you gain confidence and succeed in work placement.  We are not a rip-off agency like many out there. Our candidates take a lion’s share in charge rates because we value them as ones that goes out to the clients to represent Wana Services.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide-child {
  border-left: 4px solid #cb9821;
}
</style>
