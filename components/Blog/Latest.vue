<script setup lang="ts"></script>
<template>
  <div class="mx-auto w-full max-w-[1240px]">
    <div
      class="flex flex-col md:flex-row justify-between items-center my-[60px] lg:my-[120px] w-full"
    >
      <div class="w-full max-w-[612px]">
        <img
          src="~/assets/images/support.png"
          alt="picture of people sitting having meeting"
        />
      </div>
      <div class="w-full max-w-[553px] px-4 mt-6 md:mt-0">
        <p class="font-semibold text-primary text-sm md:text-xl uppercase">
          Our Trending Story
        </p>
        <h2
          class="font-bold uppercase leading-snug text-xl md:text-3xl text-black"
        >
          Supported living: More than providing a house and a service
        </h2>
        <div class="text-grey-6 font-semibold uppercase flex">
          <span>By Admin </span>
          <p class="h-[16px] mx-2 w-px bg-primary"></p>
          <span> April 23, 2023</span>
        </div>
        <p class="text-grey-4/80 md:text-lg mt-3">
          When most people think of supported living, they think of group homes or other living arrangements for people with developmental..
          <nuxt-link to="/blog/id" class="text-primary text-lg font-semibold">Read more...</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
