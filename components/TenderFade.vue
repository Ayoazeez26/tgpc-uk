<script setup lang="ts"></script>
<template>
  <div
    class="card flex flex-col pt-8 gap-10 overflow-hidden h-[125px] bg-white border-border-grey-7 rounded-lg relative"
  >
    <img class="absolute top-0" src="/img/fade.png" alt="fade">
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
    </div>
  </div>
</template>

<style scoped>
.bg {
  background: linear-gradient(180deg, rgba(236, 236, 236, 0.00) -88.57%, #ECECEC 80.36%);
}
</style>
