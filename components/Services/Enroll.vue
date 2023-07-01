<script setup lang="ts">
</script>
<template>
  <div class="flex flex-col md:flex-row justify-between items-center my-[100px] lg:my-[200px] mx-auto w-full max-w-[1240px]">
    <div class="">
      <img src="~/assets/images/invest.png" alt="picture of people sitting having meeting" />
    </div>
    <div class="w-full max-w-[542px] px-4 mt-6 md:mt-0">
      <p class="font-semibold text-primary text-sm md:text-xl uppercase">Train With Us</p>
      <h2 class="font-bold uppercase leading-snug text-xl md:text-3xl text-black">Invest in Your Success: Choose Our Trusted Training Programs</h2>
      <p class="text-grey-4/80 md:text-lg mt-3">Experience training videos that deliver measurable outcomes, empowering you to apply newly acquired skills effectively. Invest in your professional success with our trusted training programs that have empowered countless individuals and organizations.</p>
      <div class="flex">
        <nuxt-link to="/about" class="border-2 border-primary bg-primary flex gap-2 items-center mt-4 px-10 py-3 rounded-lg">
          <p class="text-white font-semibold">Enroll Now</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>