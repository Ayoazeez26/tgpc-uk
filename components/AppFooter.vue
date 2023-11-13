<template>
  <footer
    id="footer"
    class="bg-black text-grey-5 min-h-[226px] py-10 flex flex-col justify-between px-4"
  >
    <div class="w-full max-w-[1296px] mx-auto">
      <div
        class="flex flex-col md:flex-row items-center justify-between w-full"
      >
        <div
          class="flex flex-col"
        >
          <nuxt-link to="/">
            <img class="w-[63px]" src="/svg/logo-footer.svg" />
          </nuxt-link>
        </div>
        <div
          class="flex flex-col md:flex-row flex-wrap items-center mb-10 lg:mb-0 mt-10 md:mt-0 lg:pt-5 md:items-start gap-y-10 gap-x-[64px]"
        >
          <!-- <div class="flex flex-col md:flex-row text-center gap-6 items-center">
            <nuxt-link to="/">Pricing</nuxt-link>
            <nuxt-link to="/about">How it Works</nuxt-link>
            <nuxt-link to="/service">Give Feedback</nuxt-link>
          </div> -->
        </div>
      </div>
      <div class="md:mt-6 flex flex-col items-center md:flex-row gap-4 justify-center text-sm border-t border-grey-1/25 pt-10">
        <p class="text-center leading-snug font-medium">
          Designed by TGPC Media
        </p>
        <p class="text-center leading-snug font-medium">
          © {{ new Date().getFullYear() }} TGPC NG. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const email = ref("");
</script>

<style scoped></style>
