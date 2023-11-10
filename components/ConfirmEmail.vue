<script setup lang="ts">
import { useDialogStore } from '@/stores/dialog';
import { useAuthStore } from '~/stores/auth';
import { OtpValue } from '~/types';

const { $api } = useNuxtApp();
const auth = useAuthStore();
const dialog = useDialogStore();
const router = useRouter();


const code = ref<string>('');
const timerCount = ref(60);

watch(
  timerCount,
  (value) => {
    if (value > 0) {
      setTimeout(() => {
        timerCount.value--;
      }, 1000);
    } else {
      timerCount.value = -1;
    }
  },
  { immediate: true }
);

const confirmEmail = async (): Promise<void> => {
  const payload: OtpValue = {
    code: code.value,
  };
  console.log(payload);
  auth.verifyEmail(payload);
};
</script>
<template>
  <div class="w-full h-full relative">
    <div
      class="border-b border-grey-4 w-full py-6 flex items-center justify-center"
    >
      <nuxt-link to="/">
        <img class="w-[63px]" src="/svg/logo.svg" />
      </nuxt-link>
    </div>
    <div
      class="flex pt-10 flex-col mx-auto gap-10 items-center self-stretch w-full max-w-[1296px]"
    >
      <div class="flex flex-col gap-2 items-center text-center">
        <div @click="router.go(-1)" class="self-start cursor-pointer">
          <Icon name="mdi:arrow-left" size="24" />
        </div>
        <h5
          class="text-2xl text-black md:text-[32px] max-w-[422px] font-semibold md:leading-[48px]"
        >
          Confirm your Email<br />
          <span class="font-extralight text-xl"
            >Enter the OTP that was sent to your email</span
          >
        </h5>
        <div class="w-full my-10 max-w-[422px]">
          <InputOTP v-model="code" :fields="6" />
          <div class="flex flex-col w-full lg:items-center mt-10 gap-4">
            <button
              @click="confirmEmail"
              class="bg-black disabled:bg-black/50 disabled:border-grey disabled:text-white/70 border-2 border-grey-6 font-medium py-4 px-8 h-[62px] rounded text-white w-full"
              :disabled="code ? false : true"
            >
              Continue with email
            </button>
          </div>
          <button class="mt-6 text-sm text-grey-8 font-light">
            Didn't get the code?
            <span class="underline">Resend OTP</span>
          </button>
          <span v-if="timerCount > 0"> in 00: {{ timerCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
~/plugins/vue3-toastify
