<script setup lang="ts">
import { useDataStore } from "@/stores/data";

const email = ref("");
const data = useDataStore();
if (data.email) {
  email.value = data.email;
}
const password = ref("");
const errorMsg = reactive({});
const togglePasswordVisibility = (e) => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
const isPasswordVisible = ref(false);
const validateEmail = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errorMsg.email = "";
  } else {
    errorMsg.email = "Invalid Email Address";
  }
};

watch(email, (value) => {
  validateEmail(value);
});
const containsItem = computed(() => {
  if (loginData.value.email.length > 0 && loginData.value.password.length > 0) {
    return false;
  } else {
    return true;
  }
});
</script>
<template>
  <div class="w-full relative">
    <div class="border-b border-grey-4 w-full py-6 flex items-center justify-center">
      <nuxt-link to="/">
        <img class="w-[63px]" src="/svg/logo.svg" />
      </nuxt-link>
    </div>
    <div
      class="flex pt-10 flex-col mx-auto gap-10 items-center self-stretch w-full max-w-[1296px]"
    >
      <div class="flex flex-col gap-2 items-center text-center">
        <h5
          class="text-2xl text-black md:text-[32px] max-w-[422px] font-semibold md:leading-[48px]"
        >
          Register To Continue
          <span class="font-extralight">Browsing Tenders</span>
        </h5>
        <div class="w-full mt-10 max-w-[422px]">
          <div class="flex flex-col w-full">
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
            <span v-if="errorMsg.email" class="text-red-500 self-start text-xs mt-1">{{
              errorMsg.email
            }}</span>
            <span v-else class="text-transparent self-start text-xs mt-1"
              >There is no error message</span
            >
          </div>
          <div class="userId flex flex-col items-start relative mb-3">
            <input
              id="userPassword"
              v-model="password"
              class="email py-4 px-6 bg-grey border mt-1 focus:outline-none text-grey-8 rounded focus:border-secondary focus:ring-secondary h-[62px] w-full"
              :type="isPasswordVisible ? 'text' : 'password'"
              name="username"
              placeholder="z$!a.*gt#@7&g%"
            />
            <div class="absolute bottom-4 right-2">
              <button
                type="button"
                v-if="isPasswordVisible"
                @click.stop="togglePasswordVisibility"
                class="show-icon"
              >
                <Icon name="mdi:eye-outline" size="20" color="#0A0A0A" />
              </button>
              <button
                type="button"
                v-if="!isPasswordVisible"
                @click.stop="togglePasswordVisibility"
              >
                <Icon name="mdi:eye-off-outline" size="20" color="#0A0A0A" />
              </button>
            </div>
          </div>
          <div class="flex flex-col w-full lg:items-center gap-4">
            <nuxt-link
              to="/"
              class="bg-black border-2 border-grey-6 font-medium py-4 px-8 h-[62px] rounded text-white w-full"
            >
              Continue with email
            </nuxt-link>
          </div>
          <p class="mt-6 text-sm text-grey-8 font-light">
            By continuing, you agree to TGPC's
            <span class="underline">Terms of Service</span>
          </p>
          <p class="mt-6 text-sm text-grey-8 font-light">
            Already have an account?
            <span class="underline">Login</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
