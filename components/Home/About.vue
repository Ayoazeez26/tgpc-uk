<script setup lang="ts">
</script>
<template>
  <div class="flex flex-col-reverse md:flex-row justify-between items-center my-[100px] lg:my-[200px] mx-auto w-full max-w-[1240px]">
    <div class="w-full max-w-[542px] px-4 lg:px-0 mt-6 md:mt-0">
      <p class="font-semibold text-primary text-sm md:text-xl uppercase">About Us</p>
      <h2 class="font-bold uppercase leading-snug text-xl md:text-3xl text-black">Who We Are: Guiding Businesses to Achieve Excellence</h2>
      <p class="text-grey/80 md:text-lg mt-3">O C Management Consultant is a leading management consulting company specializing in Tender, Grant, and Bid writing and management as well as developing quality assurance frameworks and enabling successful license applications. </p>
      <div class="flex flex-col md:flex-row md:gap-6">
        <nuxt-link to="/about" class="border-2 border-primary bg-primary flex gap-2 items-center justify-center mt-4 px-10 py-3 rounded-lg">
          <p class="text-white font-semibold">Read More</p>
        </nuxt-link>
        <button class="border-2 border-primary flex gap-2 items-center justify-center mt-4 px-6 py-3 rounded-lg">
          <Icon name="mdi:youtube" size="24px" color="#03989E" />
          <p class="text-primary font-semibold">Watch Our Story</p>
        </button>
      </div>
    </div>
    <div class="">
      <img src="~/assets/images/excellence.png" alt="picture of people sitting having meeting" />
    </div>
  </div>
</template>

<style scoped>

</style>