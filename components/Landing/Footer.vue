<template>
  <footer
    class="bg-greyish-white/50 lg:px-20 md:px-10 px-5 lg:py-32 md:py-20 py-10"
  >
    <div class="flex flex-col lg:max-w-sm lg:mx-auto items-center space-y-7">
      <NuxtLink to="/" class="block"
        ><img src="/svg/logo.svg" alt=""
      /></NuxtLink>
      <ul
        class="md:flex items-center md:space-x-10 md:space-y-0 space-y-10 md:text-left text-center md:justify-center"
      >
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/features">Features</NuxtLink></li>
        <li><NuxtLink to="/how-it-works">How it works</NuxtLink></li>
      </ul>
    </div>
    <div class="bg-secondary h-[0.1px] my-10"></div>
    <div class="text-center text-grey-8 text-sm">
      &copy; {{ currentYear }} HSCT. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
