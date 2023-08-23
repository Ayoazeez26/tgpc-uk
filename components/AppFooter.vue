<template>
  <footer
    id="footer"
    class="bg-blue-3 text-white min-h-[575px] py-20 flex flex-col justify-between px-4"
  >
    <div class="w-full max-w-[1240px] mx-auto">
      <div
        class="bg-blue-2 flex flex-col items-center md:justify-between md:flex-row rounded-2xl p-12 md:p-16 -mt-[180px] md:-mt-[calc(80px+10%)] px-8 w-full"
      >
        <div class="">
          <h3 class="text-2xl md:text-[28px] text-white font-semibold">
            Find Your Dream Healthcare Job
          </h3>
          <p class="font-medium mt-3">
            Join over 500+ people passionate about helping and taking care of
            people
          </p>
        </div>
        <div class="flex flex-col lg:flex-row lg:items-center mt-6 md:mt-0 w-full md:w-auto items-stretch gap-4">
          <button class="bg-white border-2 border-secondary font-semibold px-4 py-3 md:w-[160px] rounded-lg text-secondary">Learn More</button>        
          <button class="bg-secondary border-2 border-secondary font-semibold px-4 py-3 md:w-[160px] rounded-lg text-white">Contact</button>        
          </div>
      </div>
      <div
        class="flex flex-col-reverse md:flex-row items-center justify-center md:mt-[120px] w-full"
      >
        <div class="flex flex-col items-center mt-24 md:mt-10">
          <nuxt-link to="/">
            <img class="w-[170px]" src="/img/logo.png" />
          </nuxt-link>
          <div
            class="text-sm w-full flex flex-col md:flex-row gap-10 max-w-full md:max-w-[333px] mt-10 md:mt-6 text-center md:text-left font-medium"
          >
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/about">About Us</nuxt-link>
            <nuxt-link class="min-w-max" to="/service">Services</nuxt-link>
            <nuxt-link class="min-w-max" to="/job">Find Jobs</nuxt-link>
          </div>
          <!-- <div class="mt-6 flex justify-center md:justify-start gap-3">
            <a href="#" target="_blank"
              ><Icon name="ic:round-facebook" size="24px" color="#FFFFFF"
            /></a>
            <a href="#" target="_blank"
              ><Icon name="mdi:linkedin" size="24px" color="#FFFFFF"
            /></a>
            <a href="#" target="_blank"
              ><Icon name="mdi:twitter-box" size="24px" color="#FFFFFF"
            /></a>
            <a href="#" target="_blank"
              ><Icon name="ri:instagram-fill" size="24px" color="#FFFFFF"
            /></a>
          </div> -->
        </div>
      </div>
      <div class="border-t border-white mt-10 text-sm pt-10">
        <p class="text-center leading-snug font-medium mb-4">
          Designed by TGPC Media
        </p>
        <p class="text-center leading-snug font-medium">
          © {{ new Date().getFullYear() }} Wana Services. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const email = ref("");
</script>

<style scoped></style>
