<script setup lang="ts"></script>
<template>
  <div
    class="md:bg-hero-bg md:bg-no-repeat md:bg-cover md:bg-black/40 md:bg-blend-multiply md:h-[85vh] pt-20 md:py-28 w-full md:mt-[120px]"
  >
    <div
      class="w-full max-w-[1240px] flex h-full items-end justify-end mx-auto"
    >
      <div class="hidden md:block text-white w-full max-w-[542px]">
        <h1 class="font-bold uppercase leading-snug text-2xl lg:text-4xl">
          Ignite Growth & Success with Expert Management Consulting.
        </h1>
        <p class="font-medium text-white/80 lg:text-lg md:w-11/12">
          Experience the power of our comprehensive approach, where we
          seamlessly handle tenders, grants, and license applications.
        </p>
        <button
          class="bg-primary flex gap-2 items-center mt-4 px-6 py-3 rounded-lg"
        >
          <Icon name="mdi:youtube" size="24px" />
          <p class="text-white font-semibold">Watch Our Story</p>
        </button>
      </div>
      <div
        class="flex md:hidden flex-col md:flex-row justify-between items-center mx-auto w-full"
      >
        <div class="w-full px-4 mt-6 md:mt-0">
          <h2
            class="font-bold uppercase leading-snug text-2xl md:text-3xl text-black"
          >
            Ignite Growth & Success with
            <span class="text-primary">Expert Management Consulting.</span>
          </h2>
          <p class="text-grey/80 md:text-lg mt-3">
            Experience the power of our comprehensive approach, where we
            seamlessly handle tenders, grants, and license applications.
          </p>
        </div>
        <div class="bg-hero-bg-mob bg-contain bg-black/40 bg-blend-multiply flex items-end justify-stretch w-full mt-4 p-4 h-[249px]">
          <button
            class="bg-primary flex gap-2 justify-center items-center mt-4 px-6 py-3 w-full rounded-lg"
          >
            <Icon name="mdi:youtube" size="24px" color="#FFFFFF" />
            <p class="text-white font-semibold">Watch Our Story</p>
          </button>
          
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
