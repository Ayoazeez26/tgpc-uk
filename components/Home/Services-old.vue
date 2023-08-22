<script setup lang="ts"></script>
<template>
  <div
    class="py-[80px] flex flex-col items-center justify-center lg:py-[120px] px-4 xl:px-0 mx-auto w-full max-w-[1440px] overflow-x-hidden"
  >
    <div
      class="flex flex-col items-center text-center w-full max-w-[818px] px-2"
    >
      <p class="font-semibold text-primary text-lg md:text-xl">Our Services</p>
      <h2
        class="font-semibold leading-snug text-2xl md:text-4xl lg:text-5xl text-grey"
      >
        Person-Centered Care <br class="md:hidden"> at its Finest
      </h2>
      <p class="text-grey-2 text-lg mt-6">
        Our diverse team of professionals delivers personalized and
        comprehensive care. From physiotherapists to nurses and podiatrists, we
        cater to all age groups, ensuring that children, young adults, and the
        elderly thrive under our nurturing support.
      </p>
    </div>
    <div
      class="child mt-12 lg:ml-[200px] flex gap-5 md:gap-6 overflow-x-scroll overflow-y-hidden w-full relative"
    >
      <div class="min-w-[318px] md:min-w-[398px] h-[448px] rounded-2xl relative">
        <div
          class="card absolute flex flex-col justify-end w-full h-full top-0 left-0 p-6 rounded-2xl"
        >
          <h4 class="font-bold text-blue text-2xl">Domicillary Care</h4>
          <p class="text-neutral-2 text-lg mt-2 font-medium">
            Domiciliary care is a type of healthcare that is provided in the
            home.
          </p>
        </div>
        <img
          class="rounded-2xl"
          src="/img/domicillary.png"
          alt="domicillary care"
        />
      </div>
      <div class="min-w-[318px] md:min-w-[398px] h-[448px] rounded-2xl relative">
        <div
          class="card absolute flex flex-col justify-end w-full h-full top-0 left-0 p-6 rounded-2xl"
        >
          <h4 class="font-bold text-blue text-2xl">Dependable Healthcare</h4>
          <p class="text-neutral-2 text-lg mt-2 font-medium">
            Domiciliary care is a type of healthcare that is provided in the
            home.
          </p>
        </div>
        <img
          class="rounded-2xl"
          src="/img/dependable.png"
          alt="domicillary care"
        />
      </div>
      <div class="min-w-[318px] md:min-w-[398px] h-[448px] rounded-2xl relative">
        <div
          class="card absolute flex flex-col justify-end w-full h-full top-0 left-0 p-6 rounded-2xl"
        >
          <h4 class="font-bold text-blue text-2xl">Live-in Care</h4>
          <p class="text-neutral-2 text-lg mt-2 font-medium">
            Domiciliary care is a type of healthcare that is provided in the
            home.
          </p>
        </div>
        <img
          class="rounded-2xl"
          src="/img/live-in.png"
          alt="domicillary care"
        />
      </div>
      <div class="min-w-[318px] md:min-w-[398px] h-[448px] rounded-2xl relative">
        <div
          class="card absolute flex flex-col justify-end w-full h-full top-0 left-0 p-6 rounded-2xl"
        >
          <h4 class="font-bold text-blue text-2xl">Respite Care</h4>
          <p class="text-neutral-2 text-lg mt-2 font-medium">
            Domiciliary care is a type of healthcare that is provided in the
            home.
          </p>
        </div>
        <img
          class="rounded-2xl"
          src="/img/respite.png"
          alt="domicillary care"
        />
      </div>
      <div class="min-w-[318px] md:min-w-[398px] h-[448px] rounded-2xl relative mr-10 md:mr-[200px]">
        <div
          class="card absolute flex flex-col justify-end w-full h-full top-0 left-0 p-6 rounded-2xl"
        >
          <h4 class="font-bold text-blue text-2xl">ISF Brokerage Service</h4>
          <p class="text-neutral-2 text-lg mt-2 font-medium">
            Domiciliary care is a type of healthcare that is provided in the
            home.
          </p>
        </div>
        <img
          class="rounded-2xl"
          src="/img/brokerage.png"
          alt="domicillary care"
        />
      </div>
    </div>
    <div class="w-full hidden md:flex flex-col items-center text-center px-4 mt-14">
      <p class="font-semibold text-primary md:text-lg">Sponsors</p>
      <p class="md:text-2xl font-semibold mt-1">People who believe in us</p>
      <div class="flex flex-wrap gap-6 mt-6">
        <img class="h-14" src="/img/company1.png" alt="first-company" />
        <img class="h-14" src="/img/company2.png" alt="first-company" />
        <img class="h-14" src="/img/company3.png" alt="first-company" />
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
