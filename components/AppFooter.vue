<template>
  <footer
    id="footer"
    class="bg-blue-2 text-white min-h-[298px] py-12 flex flex-col justify-between px-4"
  >
    <div class="w-full max-w-[1240px] mx-auto">
      <div
        class="flex flex-col-reverse text-grey md:flex-row items-center justify-between w-full"
      >
        <div class="flex flex-col items-center text-center lg:text-left lg:items-start w-full md:max-w-[464px]">
          <nuxt-link to="/">
            <img class="w-[170px]" src="/svg/logo-footer.svg" />
          </nuxt-link>
          <p class="mt-6">We are a domiciliary care provider established to offer home based quality care and support to service-users who require care and support in their own familiar environment and surroundings.</p>
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
        <div class="flex flex-col md:flex-row flex-wrap items-center mb-14 lg:mb-0 lg:pt-5 md:items-start gap-y-10 gap-x-[64px]">
          <div class="flex flex-col text-center items-center">
            <h6 class="text-xl font-semibold uppercase text-white mb-4">Quick Links</h6>
            <nuxt-link class="mb-4" to="/">Home</nuxt-link>
            <nuxt-link class="mb-4" to="/about">About Us</nuxt-link>
            <nuxt-link class="mb-4" to="/service">Services</nuxt-link>
          </div>
          <div class="flex flex-col text-center items-center">
            <h6 class="text-xl font-semibold uppercase text-white mb-4">Contact Us</h6>
            <p class="mb-4">+44 1484 506700</p>
            <p class="mb-4 tracking-[0.2px] break-words">info@dependablehealth.co.uk</p>
          </div>
          
        </div>
      </div>
      <!-- <div class="border-t border-white mt-10 text-sm pt-10">
        <p class="text-center leading-snug font-medium mb-4">
          Designed by TGPC Media
        </p>
        <p class="text-center leading-snug font-medium">
          © {{ new Date().getFullYear() }} Wana Services. All Rights Reserved.
        </p>
      </div> -->
    </div>
  </footer>
</template>

<script setup lang="ts">
const email = ref("");
</script>

<style scoped></style>
