<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import type { UserLoginInput } from '~/types';
definePageMeta({
  middleware: ["guest"]
})
const auth = useAuthStore();
const router = useRouter();
const email = ref('');
const password = ref('');
const errorMsg = reactive({});
const togglePasswordVisibility = (e) => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
const isPasswordVisible = ref(false);
const validateEmail = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errorMsg.email = '';
  } else {
    errorMsg.email = 'Invalid Email Address';
  }
};

watch(email, (value) => {
  validateEmail(value);
});

const sendEmail = async (): Promise<void> => {
  auth.resetPasswordEmail(email.value);
};

const containsItem = computed(() => {
  if (errorMsg.email === '') {
    return false;
  } else {
    return true;
  }
});
</script>
<template>
  <div class="body">
    <main class="text-primary bg-grey-3">
      <div class="w-full relative px-4 md:px-0">
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
          class="text-black text-[32px] max-w-[422px] font-semibold leading-[48px]"
        >
          Reset Password<br />
          <span class="font-extralight text-xl"
            >Input your email address</span
          >
        </h5>
        <div class="w-full my-10 max-w-[422px]">
          <div class="flex flex-col w-full mb-3">
            <input
              id="email"
              v-model="email"
              type="email"
              name="email"
              required
              class="border border-grey-2 bg-grey rounded py-4 px-6 text-grey-8 focus:outline-none focus:border-secondary focus:ring-secondary h-[62px]"
              :class="errorMsg.email ? 'border border-red-500' : ''"
              placeholder="Enter Email Address"
            />
            <span
              v-if="errorMsg.email"
              class="text-red-500 self-start text-xs mt-1"
              >{{ errorMsg.email }}</span
            >
            <span v-else class="text-transparent self-start text-xs mt-1"
              >There is no error message</span
            >
          </div>
          <div class="flex flex-col w-full lg:items-center gap-4">
            <button
              @click="sendEmail"
              :disabled="containsItem"
              class="bg-black disabled:bg-black/50 disabled:border-grey disabled:text-white/70 border-2 border-grey-6 font-medium py-4 px-8 h-[62px] rounded text-white w-full"
            >
              Submit
            </button>
          </div>
          <p class="mt-6 text-sm text-grey-8 font-light">
            By continuing, you agree to TGPC's
            <span class="underline">Terms of Service</span>
          </p>
          <!-- <p class="mt-6 text-sm text-grey-8 font-light">
            Don't have an account?
            <nuxt-link to="/register" class="underline">Register</nuxt-link>
          </p> -->
        </div>
      </div>
    </div>
  </div>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped></style>
