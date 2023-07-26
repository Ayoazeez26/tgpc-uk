<template>
  <footer
    id="footer"
    class="bg-neutral min-h-[747px] py-20 flex flex-col justify-between px-4"
  >
    <div class="w-full max-w-[1240px] mx-auto">
      <div
        class="bg-blue-2 flex flex-col items-center text-center rounded-2xl py-8 md:py-10 px-8 w-full"
      >
        <h3 class="text-2xl md:text-4xl font-semibold text-grey">
          Want To Book An Assessment Session?
        </h3>
        <div class="mt-6 flex flex-col md:flex-row gap-4 md:gap-0 justify-center w-full md:w-auto">
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            required
            class="border border-grey-7 text-white/70 bg-transparent p-6 pr-2 focus:outline-none w-full md:w-[373px]"
            placeholder="Enter your email address"
          />
          <button
            class="bg-primary p-6 w-full md:w-[140px]"
          >
            <p class="text-white font-semibold">Get Started</p>
        </button>
        </div>
      </div>
      <div class="flex flex-col-reverse md:flex-row items-center justify-between my-20 w-full">
        <div class="mt-24 md:mt-0">
          <nuxt-link to="/">
            <img class="w-[243px]" src="/img/logo-footer.png" />
          </nuxt-link>
          <p class="text-light-red/70 text-lg w-full flex flex-col gap-3 max-w-full md:max-w-[310px] mt-6 text-center md:text-left font-medium">
            <span>6 Celtic Farm Road</span>
            <span>Rainham</span>
            <span>Essex</span>
            <span>RM13 9GP, UK</span>
          </p>
          <div class="mt-6 flex justify-center md:justify-start gap-3">
            <a href="#" target="_blank"><Icon name="ic:round-facebook" size="24px" color="#FFFFFF" /></a>
            <a href="#" target="_blank"><Icon name="mdi:linkedin" size="24px" color="#FFFFFF" /></a>
            <a href="#" target="_blank"><Icon name="mdi:twitter-box" size="24px" color="#FFFFFF" /></a>
            <a href="#" target="_blank"><Icon name="ri:instagram-fill" size="24px" color="#FFFFFF" /></a>
          </div>
        </div>
        <div class="flex flex-wrap text-white text-center md:text-left text-lg items-start gap-14 md:gap-[114px]">
          <div class="flex flex-col gap-4 w-full md:w-auto">
            <h6 class="text-xl font-semibold text-red-1 ">COMPANY</h6>
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/about">About Us</nuxt-link>
            <nuxt-link class="min-w-max" to="/projects">Join Our Team</nuxt-link>
            <nuxt-link to="/services">Services<Icon name="ic:round-keyboard-arrow-down" size="24px" color="#FFFFFF" /></nuxt-link>
          </div>
          <!-- <div class="flex flex-col">
            <h6 class="text-xl font-semibold text-white ">Social Media</h6>
            <a href="#" target="_blank">LinkedIn</a>
            <a href="#" target="_blank">Facebook</a>
            <a href="#" target="_blank">Twitter</a>
            <a href="#" target="_blank">Instagram</a>
          </div> -->
          <div class="flex flex-col gap-4 w-full md:max-w-[200px]">
            <h6 class="text-xl font-semibold text-red-1 uppercase ">Contact Us</h6>
            <p>01708555599</p>
            <p>07484939652</p>
            <p class=" break-words"><a class="underline break-words" href="mailto:info@crystalizecare.co.uk">info@crystalizecare.co.uk</a></p>
            <!-- <p class="">Company's Address</p> -->
          </div>
        </div>
      </div>
      <div class="border-t border-white py-6">
        <p class="text-center leading-snug text-white text-lg font-medium">
          © {{ new Date().getFullYear() }} Crystallise Care Services l All CCS Rights
          Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const email = ref('');
</script>

<style scoped></style>
