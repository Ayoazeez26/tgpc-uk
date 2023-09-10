<script setup lang="ts"></script>
<template>
  <div
    class="py-[60px] flex flex-col items-center justify-center lg:py-[80px] px-4 xl:px-0 mx-auto w-full max-w-[1240px]"
  >
    <div class="w-full flex mt-10 lg:mt-[68px]">
      <div
        class="flex flex-col justify-between lg:flex-row w-full max-w-[1240px]"
      >
        <h1
          class="font-semibold text-head leading-snug text-2xl md:text-[32px] lg:leading-[56px] lg:text-[48px] w-full lg:max-w-[608px]"
        >
          The Home Care Provider <span class="text-secondary">You Can Trust</span>
        </h1>
        <div class="flex flex-col w-full lg:max-w-[608px]">
          <p class="mt-4 lg:mt-0 leading-[28px] md:leading-[28px] md:text-lg">
            Established as a dedicated domiciliary care provider, Dependable
            Health Care is all about bringing the magic of quality care and
            unwavering support to your home. Our expert team is here to make
            sure your every need is met with a smile, ensuring your well-being
            and happiness remain at the heart of everything we do.
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-10 md:gap-20 lg:flex-row items-start mt-14 lg:mt-[120px] w-full">
      <div class="flex flex-col gap-6 justify-between w-full max-w-[580px]">
        <img class="w-full" src="/img/favicon-img.png" alt="dependable">
        <div class="flex flex-col md:flex-row w-full gap-6 justify-between">
          <div class="flex flex-col items-center justify-center p-6 rounded-lg border border-secondary bg-white h-[262px] w-full">
            <div class="flex items-center">
              <h5 class="font-bold leading-none tracking-[0.192px] text-[64px] md:text-[96px] text-secondary">77</h5>
              <img class="w-10" src="/svg/blue-star.svg" alt="blue star">
            </div>
            <p class="text-secondary text-lg tracking-[0.036px] leading-7">Our Total Users!</p>
          </div>
          <div class="flex flex-col items-center justify-center p-6 rounded-lg bg-secondary h-[262px] w-full">
            <div class="flex items-center">
              <h5 class="font-bold leading-none tracking-[0.192px] text-[64px] md:text-[96px] text-white">64</h5>
              <img class="w-10" src="/svg/white-star.svg" alt="blue star">
            </div>
            <p class="text-white text-lg tracking-[0.036px] leading-7">Our Supported Users!</p>
          </div>
        </div>
        <img class="w-full hidden md:block" src="/img/carer.png" alt="carer">
        <img class="w-full md:hidden" src="/img/carer-mob.png" alt="carer">
      </div>
      <div class="flex flex-col gap-6 w-full max-w-[580px]">
        <div class="border border-secondary rounded-lg flex flex-col bg-grey-2 p-6 justify-center gap-4 items-start self-stretch">
          <h6 class="bg-lime w-14 h-14 flex items-center text-lg font-semibold tracking-[-0.5px] justify-center">01</h6>
          <h3 class="text-xl md:text-2xl font-semibold leading-8">Personalized Homecare Support</h3>
          <p class="md:text-lg leading-7">We customize care plans to meet individual needs and promote independence and dignity.</p>
        </div>
        <div class="border border-secondary rounded-lg flex flex-col bg-grey-2 p-6 justify-center gap-4 items-start self-stretch">
          <h6 class="bg-brown w-14 h-14 flex items-center text-lg font-semibold tracking-[-0.5px] justify-center">02</h6>
          <h3 class="text-xl md:text-2xl font-semibold leading-8">Experienced and Compassionate Team</h3>
          <p class="md:text-lg leading-7">Our caregivers are qualified and empathetic, treating residents with care and respect.</p>
        </div>
        <div class="border border-secondary rounded-lg flex flex-col bg-grey-2 p-6 justify-center gap-4 items-start self-stretch">
          <h6 class="bg-lime w-14 h-14 flex items-center text-lg font-semibold tracking-[-0.5px] justify-center">03</h6>
          <h3 class="text-xl md:text-2xl font-semibold leading-8">Quality Care in Familiar Environment</h3>
          <p class="md:text-lg leading-7">We help residents stay close to their loved ones and in familiar surroundings.</p>
        </div>
        <div class="border border-secondary rounded-lg flex flex-col bg-grey-2 p-6 justify-center gap-4 items-start self-stretch">
          <h6 class="bg-brown w-14 h-14 flex items-center text-lg font-semibold tracking-[-0.5px] justify-center">04</h6>
          <h3 class="text-xl md:text-2xl font-semibold leading-8">Comprehensive Services</h3>
          <p class="md:text-lg leading-7">We provide medical and emotional support to help our residents thrive and continue to be happy.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: linear-gradient(
    180deg,
    rgba(11, 24, 27, 0) 0%,
    rgba(11, 24, 27, 0.88) 86.98%
  );
}
.child {
  scrollbar-width: none;
  -webkit-scrollbar {
    width: 50px;
    display: none;
  }
  -ms-overflow-style: none;
}
</style>
