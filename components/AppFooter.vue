<template>
  <footer class="bg-green min-h-[451px] pt-12 flex flex-col justify-between px-4">
    <div class="flex flex-col md:flex-row justify-between w-full max-w-[1240px] mx-auto">
      <div class="">
        <nuxt-link to="/">
          <img class="w-[154px]" src="/img/logo-footer.png" />
        </nuxt-link>
        <h5 class="text-grey-2 text-lg w-full max-w-[310px] mt-4 font-normal">At O C Management Consultant, we transform challenges into opportunities and we guide you to achieve operational excellence.</h5>
      </div>
      <div class="flex flex-wrap items-start mt-14 gap-[100px]">
        <div class="flex flex-col text-grey-2">
          <h6 class="text-xl font-semibold uppercase text-white mb-4">Quick Links</h6>
          <nuxt-link class="mb-4" to="/">Home</nuxt-link>
          <nuxt-link class="mb-4" to="/about">About Us</nuxt-link>
          <nuxt-link class="mb-4" to="/services">Services</nuxt-link>
          <nuxt-link to="/projects">Projects</nuxt-link>
        </div>
        <div class="flex flex-col text-grey-2">
          <h6 class="text-xl font-semibold uppercase text-white mb-4">Resources</h6>
          <nuxt-link class="mb-4" to="/blog">Blog</nuxt-link>
          <nuxt-link class="mb-4" to="/ebooks">eBooks</nuxt-link>
          <nuxt-link class="mb-4" to="/services">Training</nuxt-link>
        </div>
        <div class="flex flex-col text-grey-2">
          <h6 class="text-xl font-semibold uppercase text-white mb-4">Social Media</h6>
          <a href="#" target="_blank" class="mb-4">LinkedIn</a>
          <a href="#" target="_blank" class="mb-4">Facebook</a>
          <a href="#" target="_blank" class="mb-4">Twitter</a>
          <a href="#" target="_blank">Instagram</a>
        </div>
        <div class="flex flex-col text-grey-2">
          <h6 class="text-xl font-semibold uppercase text-white mb-4">Contact Us</h6>
          <p class="mb-4">Company's Number</p>
          <p class="mb-4">Company's Email Address</p>
          <p class="mb-4">Company's Address</p>
        </div>
      </div>
    </div>
    <div class="border-t border-grey-3 py-6">
      <p class="text-center leading-snug text-grey-2">© {{ new Date().getFullYear() }} OC Management Consultants. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>