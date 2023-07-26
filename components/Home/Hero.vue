<script setup lang="ts"></script>
<template>
  <div
    class="bg-hero-bg bg-no-repeat bg-cover bg-center bg-bg-blur/60 bg-blend-multiply h-screen pt-20 px-4 xl:px-0 md:py-28 w-full"
  >
    <div
      class="w-full max-w-[1240px] flex h-full items-end justify-start mx-auto"
    >
      <div class="block text-neutral-2 w-full max-w-[750px]">
        <p class="text-lg font-semibold mb-4">Welcome to Crystallisecare</p>
        <h1 class="font-bold leading-snug text-[40px] lg:leading-snug lg:text-[80px]">
          Excellence in Care and Family Services
        </h1>
        <p class="font-medium text-white/80 mt-6 text-lg md:w-11/12">
          Welcome to Crystalize Care Services, where we are committed to excellence in healthcare. Better Health, Better You.
        </p>
        <div class="flex mt-10 mb-24 md:mb-0">
          <nuxt-link
            to="#footer"
            class="bg-primary mt-4 p-6 w-full md:w-auto text-center"
          >
            <p class="text-white font-semibold">Book Assessment Now</p>
        </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-hero-bg {
  background-position: center;
  @media screen and (max-width: 768px) {
    background-position: center left -350px;
  }
}
</style>
