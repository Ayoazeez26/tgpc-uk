<script setup lang="ts"></script>
<template>
  <div class="bg-grey-2 w-full py-[80px] lg:py-[120px]">
    <div class="flex flex-col mx-auto w-full max-w-[1240px]">
      <div class="w-full flex flex-col items-center text-center px-4">
        <div class="w-full mb-10">
          <h2 class="text-2xl lg:text-[48px] lg:leading-[56px] font-semibold">
            Our Services
          </h2>
        </div>
        <div
          class="flex flex-col lg:flex-row md:flex-wrap gap-4 items-center lg:justify-center w-full text-start"
        >
          <div
            class="bg-lime py-10 overflow-x-hidden md:py-14 px-6 md:px-10 flex flex-col gap-10 relative rounded-lg w-full max-w-[512px]"
          >
            <div class="flex flex-col gap-4">
              <h3 class="text-2xl font-semibold leading-8">Assisted Living</h3>
              <p class="md:text-lg leading-7">
                Our live-in care service provides 24/7 support for individuals
                with diverse needs, so you can stay in your own home.
              </p>
            </div>
            <img
              class="w-full md:block hidden self-end md:max-w-[399px] z-[1]"
              src="/img/assisted-img.png"
              alt="assisted"
            />
            <img
              class="w-full md:hidden z-[1]"
              src="/img/assisted-img-mob.png"
              alt="assisted"
            />
            <img
              class="absolute bottom-0 z-0"
              src="/img/lines.png"
              alt="lines"
            />
          </div>
          <div
            class="bg-brown overflow-x-hidden py-10 md:py-14 px-6 md:px-10 flex flex-col gap-10 relative rounded-lg w-full max-w-[512px]"
          >
            <div class="flex flex-col gap-4">
              <h3 class="text-2xl font-semibold leading-8">
                Domicilliary Care
              </h3>
              <p class="md:text-lg leading-7">
                Our domiciliary care services help people of all ages and
                abilities thrive in their own homes with the help of skilled,
                visiting carers.
              </p>
            </div>
            <img
              class="w-full self-end md:block hidden max-w-[399px] z-[1]"
              src="/img/domiciliary-img.png"
              alt="domiciliary"
            />
            <img
              class="w-full md:hidden z-[1]"
              src="/img/domiciliary-img-mob.png"
              alt="domiciliary"
            />
            <img
              class="absolute bottom-0 z-0"
              src="/img/lines.png"
              alt="lines"
            />
          </div>
        </div>
        <div
          class="flex flex-col w-full mt-10 md:w-auto md:flex-row md:items-center"
        >
          <nuxt-link
            to="/"
            class="bg-secondary border-2 border-secondary font-medium py-3 px-10 rounded-lg text-white"
          >
            Learn More
          </nuxt-link>
        </div>
      </div>
    </div>
    <div id="about" />
  </div>
</template>

<style lang="scss"></style>
