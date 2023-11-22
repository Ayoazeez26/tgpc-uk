<template>
  <header
    class="bg-[#FAFAFA] lg:px-20 md:px-10 px-5 py-5 fixed w-full top-0 z-40"
  >
    <nav class="flex items-center justify-between">
      <NuxtLink to="/home"><img src="/svg/logo.svg" alt="logo" /></NuxtLink>
      <!-- Tablet and desktop navigation links -->
      <div class="md:flex hidden items-center space-x-20">
        <ul class="flex items-center space-x-10">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/features">Features</NuxtLink></li>
          <li><NuxtLink to="/how-it-works">How it works</NuxtLink></li>
        </ul>
        <NuxtLink to="/" class="px-10 py-4 bg-black rounded-md text-white"
          ><button>Try it now</button></NuxtLink
        >
      </div>
      <div class="flex md:hidden items-center">
        <img
          v-if="!showMobileNav"
          @click="toggleMobileNav"
          src="/svg/hamburger.svg"
          alt=""
          class="w-10 h-10 cursor-pointer"
        />
        <img
          v-else
          @click="toggleMobileNav"
          src="/svg/close.svg"
          alt=""
          class="w-10 h-10 cursor-pointer"
        />
      </div>
    </nav>
    <!-- Mobile Navigation -->
    <div
      v-if="showMobileNav"
      class="md:hidden flex flex-col space-y-10 items-center mt-10"
    >
      <ul class="text-center space-y-10 text-xl font-bold">
        <li><NuxtLink @click="toggleMobileNav" to="/about">About</NuxtLink></li>
        <li>
          <NuxtLink @click="toggleMobileNav" to="/features">Features</NuxtLink>
        </li>
        <li>
          <NuxtLink @click="toggleMobileNav" to="/how-it-works"
            >How it works</NuxtLink
          >
        </li>
      </ul>
      <NuxtLink
        @click="toggleMobileNav"
        to="/"
        class="px-10 py-4 bg-black rounded-md text-white"
      >
        <button>Try it now</button>
      </NuxtLink>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMobileNav: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },
  },
};
</script>
