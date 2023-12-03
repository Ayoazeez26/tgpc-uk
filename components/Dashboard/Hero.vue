<script setup lang="ts"></script>
<template>
  <div
    class="pt-20 px-4 xl:px-0 md:pt-28 mt-10 w-full max-w-[1296px] flex flex-col xl:flex-row items-start gap-10 mx-auto"
  >
    <div
      class="w-full flex justify-between items-center relative bg-black text-grey-5 "
    >
      <div class="flex flex-col gap-6 w-full px-10 py-16">
        <h1
          class="font-medium text-[24px] md:text-[32px] md:leading-[140%] leading-[140%] min-w-max"
        >
          Welcome to HSCT!
        </h1>
        <p class="text-grey-5 font-light text-xl">
          Search for tenders in your local area
        </p>
      </div>
      <img class="absolute hidden md:block right-0 top-0 h-full" src="/img/banner.png" alt="" />
      <!-- <img class="rounded-r-3xl" src="/img/grey-semi.png" /> -->
    </div>
    <div
      class="bg-white p-8 rounded-lg border border-grey-2 gap-6 flex flex-col w-[328px] xl:w-auto"
    >
      <h4 class="text-secondary font-medium text-lg leading-[36px]">
        Need help understanding tender acquistion?
      </h4>
      <div class="flex flex-col gap-2 w-full md:items-center">
        <nuxt-link
          to="/contact"
          class="bg-grey-5 border-2 border-grey-2 flex items-center justify-center w-full gap-2 font-medium py-4 px-8 rounded text-secondary"
        >
          <p class=" text-sm tracking-[0.028px]">Contact us</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide-child {
  border-left: 4px solid #cb9821;
}
</style>
