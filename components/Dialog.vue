<template>
  <div class="parent flex justify-center items-center">
    <div
      class="bg-white px-10 py-6 rounded-xl pb-16 gap-10 flex flex-col items-center w-5/6 max-w-[640px]"
    >
      <div class="flex flex-col items-center text-center">
        <img class="mt-10" src="/img/send.png" alt="" />
        <div class="flex flex-col mt-4">
          <h3 class="font-semibold text-[28px] leading-[44px]">
            We've successfully sent the application link to your email
          </h3>
          <p class="mt-3 font-light text-grey-8 leading-[32px]">
            An email containing the application link has just been sent to
            <span class="text-primary underline">{{ data.userEmail }}</span>
          </p>
        </div>
      </div>
      <button
        @click="goHome"
        class="bg-secondary border-2 border-secondary flex items-center justify-center w-full gap-2 font-medium py-4 px-8 rounded text-white"
      >
        <p class="leading-[30px] tracking-[0.028px]">Continue</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '~/stores/data';
import { useDialogStore } from '~/stores/dialog';

const data = useDataStore();
const dialog = useDialogStore();
const router = useRouter();

const goHome = () => {
  dialog.showDialog = false;
  router.push('/dashboard');
}
</script>

<style lang="scss" scoped>
.parent {
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid $primary;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: $primary transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
