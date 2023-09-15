<script setup lang="ts"></script>
<template>
  <div
    class="card flex flex-col pt-8 gap-10 bg-white border-border-grey-7 rounded-lg"
  >
    <div class="flex flex-col px-10 gap-y-6 w-full">
      <div class="flex justify-between items-center">
        <div class="flex gap-4">
          <div class="flex items-center gap-[10px]">
            <div class="w-6 h-6 rounded-full bg-grey-9" />
            <p class="text-grey-8 text-sm">Leicester</p>
          </div>
          <button
            class="flex items-center text-grey-8 gap-2 py-2 px-4 border border-grey-2 bg-grey rounded-full justify-center"
          >
            <p class="uppercase">eligibility status</p>
            <Icon name="mdi:information-outline" />
          </button>
        </div>
        <div class="flex flex-col md:w-auto md:flex-row md:items-center">
          <nuxt-link
            to="/"
            class="bg-secondary border-2 border-secondary flex items-center gap-2 font-medium py-2 px-8 rounded text-white"
          >
            <p class="leading-[30px] tracking-[0.028px]">View now</p>
            <Icon name="material-symbols:arrow-forward-rounded" size="24" />
          </nuxt-link>
        </div>
      </div>
      <h3
        class="clamp overflow-hidden text-ellipsis text-lg font-medium leading-[36px]"
      >
        ASC0236 - Provision of intrauterine devices and systems (IUD/S) &
        provision of sub-dermal Implants (SDI) for contraception and the
        provision of IUS for non-contraceptive purposes
      </h3>
      <div class="flex font-light gap-4">
        <button
          class="flex items-center text-grey-8 gap-2 py-2 px-4 border border-grey-2 bg-grey rounded-full justify-center"
        >
          <p>Adult's Social Care</p>
        </button>
        <button
          class="flex items-center text-grey-8 gap-2 py-2 px-4 border border-grey-2 bg-grey rounded-full justify-center"
        >
          <p>Home Care</p>
        </button>
        <button
          class="flex items-center text-grey-8 gap-2 py-2 px-4 border border-grey-2 bg-grey rounded-full justify-center"
        >
          <p>Supported Living</p>
        </button>
      </div>
    </div>
    <div class="border-t border-grey-2 flex justify-between px-10">
      <div class="py-7 flex items-center gap-4">
        <div class="flex flex-col gap-1">
          <p class="text-grey-8 text-sm font-light">Date Created</p>
          <p class="text-secondary text-xl font-bold leading-[36px]">
            23/09/2023
          </p>
        </div>
        <span>-</span>
        <div class="flex flex-col gap-1">
          <p class="text-grey-8 text-sm font-light">Closing Date</p>
          <p class="text-secondary text-xl font-bold leading-[36px]">
            23/10/2024
          </p>
        </div>
      </div>
      <div class="w-px h-full bg-grey-2" />
      <div class="py-7 flex flex-col gap-1 text-right">
        <p class="text-grey-8 text-sm font-light">Value</p>
        <p class="text-secondary text-[28px] font-bold leading-[26px]">
          NGN 2,000,000
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
