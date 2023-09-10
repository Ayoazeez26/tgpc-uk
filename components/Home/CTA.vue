<script setup lang="ts"></script>
<template>
  <div
    class="flex bg-grey-2 my-16 flex-col mx-auto py-10 px-6 gap-8 items-center self-stretch rounded-lg w-full max-w-[1240px]"
  >
    <img class="w-[130px]" src="/img/avatar.png" alt="avatar" />
    <div class="flex flex-col gap-2 items-center text-center">
      <h5 class="text-2xl font-semibold leading-8">Still have questions?</h5>
      <p class="text-lg leading-7">Have a question we haven't answered yet?</p>
    </div>
    <div class="flex flex-col w-auto lg:flex-row lg:items-center gap-4">
      <nuxt-link
        to="/"
        class="bg-secondary border-2 border-secondary font-medium py-3 px-10 rounded-lg text-white"
      >
        Get in Touch
      </nuxt-link>
    </div>
  </div>
  <div id="about" />
</template>

<style lang="scss"></style>
