<script setup lang="ts">
</script>
<template>
  <div class="bg-hero-bg bg-no-repeat bg-cover bg-black/40 bg-blend-multiply h-[89vh] md:h-[85vh] py-28 w-full mt-24 md:mt-[120px]">
    <div class="w-full max-w-[1240px] flex h-full items-end justify-end px-4 px-md-0 mx-auto">
      <div class="text-white w-full max-w-[542px]">
        <h1 class="font-bold uppercase leading-snug text-2xl lg:text-4xl">Ignite Growth & Success with Expert Management Consulting.</h1>
        <p class="font-medium text-white/80 lg:text-lg md:w-11/12">Experience the power of our comprehensive approach, where we seamlessly handle tender, grant, and bid writing and management.</p>
        <button class="bg-primary flex gap-2 items-center mt-4 px-6 py-3 rounded-lg">
          <Icon name="mdi:youtube" size="24px" />
          <p class="text-white font-semibold">Watch Our Story</p>
        </button>
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