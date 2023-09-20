<script setup lang="ts">
import { useDataStore } from "@/stores/data";

const data = useDataStore();
const router = useRouter();
const email = ref("");
const errorMsg = reactive({});

const validateEmail = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errorMsg.email = "";
  } else {
    errorMsg.email = "Invalid Email Address";
  }
};

const goToRegister = () => {
  if (errorMsg.email === "") {
    data.email = email.value;
    router.push('/register');
  } else {
    errorMsg.email = "Invalid Email Address";
  }
}

watch(email, (value) => {
  validateEmail(value);
});
</script>
<template>
  <div class="bg-black w-full relative mt-16">
    <div
      class="flex pt-12 flex-col mx-auto gap-10 items-center self-stretch w-full max-w-[1296px]"
    >
      <div class="flex flex-col gap-2 items-center text-center">
        <div
          class="bg-white px-8 py-4 border border-grey-2 rounded -translate-y-20 flex gap-2 items-center"
        >
          <img src="/svg/lock.svg" alt="lock" />
          <p
            class="text-grey-8 text-sm leading-[30px] tracking-[0.028px] font-medium"
          >
            1,216 more tenders hidden
          </p>
        </div>
        <h5
          class="text-2xl text-grey-5 md:text-[32px] max-w-[630px] font-semibold md:leading-[48px]"
        >
          Login Or Sign Up To Continue
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
              class="border border-grey-6 bg-transparent rounded py-4 px-6 text-grey-5 focus:outline-none h-[62px]"
              :class="errorMsg.email ? 'border border-red-500' : ''"
              placeholder="Enter Email Address"
            />
            <span v-if="errorMsg.email" class="text-red-500 text-xs mt-1">{{
              errorMsg.email
            }}</span>
            <span v-else class="text-transparent text-xs mt-1"
              >There is no error message</span
            >
          </div>
          <div class="flex flex-col w-full lg:items-center gap-4">
            <button
              @click="goToRegister"
              class="bg-grey-6 border-2 border-grey-6 font-medium py-4 px-8 h-[62px] rounded text-white w-full"
            >
              Continue with email
            </button>
          </div>
          <h6 class="mt-6 text-sm text-grey-5 font-light">
            By continuing, you agree to TGPC's
            <span class="underline">Terms of Service</span>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
