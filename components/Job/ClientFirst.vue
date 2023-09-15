<script setup lang="ts">
import { useDataStore } from "@/stores/data";

const dataStore = useDataStore();
const submitForm = () => {
  console.log("submitting form");
};

const errorMsg = reactive({});
const firstname = ref("");
const lastname = ref("");
const company = ref("");
const email = ref("");
const message = ref("");
const subject = ref("");
const phone = ref("");

const validateEmail = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errorMsg.email = "";
  } else {
    errorMsg.email = "Invalid Email Address";
  }
};

const validateInput = (input, value) => {
  if (value) {
    errorMsg[input] = "";
  } else {
    errorMsg[input] = "Required";
  }
};

watch(name, (value) => {
  validateInput("name", value);
});

watch(email, (value) => {
  validateEmail(value);
});

watch(message, (value) => {
  validateInput("message", value);
});

const getStarted = () => {
  dataStore.clientStart = true;
};
</script>
<template>
  <div
    class="w-full max-w-[1296px] mx-auto py-[150px] md:py-[180px] overflow-x-hidden relative"
  >
    <div
      class="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[56px]"
    >
      <div class="flex flex-col w-full px-4 lg:px-0 max-w-[572px] relative">
        <h1 class="text-head font-medium text-[40px] lg:text-[48px]">
          Book talented individuals to help you with your health needs
        </h1>
        <p class="mt-4 leading-7">
          Need help with your health? Book talented individuals to help you
          today! We have a wide network of talented healthcare professionals who
          can help you with your specific needs. Whether you need a nurse, or
          another healthcare provider, we can help you find the right person for
          the job.
        </p>
        <div class="mt-10 flex items-center gap-x-4">
          <img class="w-[130px]" src="/img/avatars.png" alt="avatars" />
          <p class="text-sm font-semibold">Join our massive community</p>
        </div>
        <img
          class="w-[172px] hidden xl:block absolute -right-[172px] bottom-10"
          src="/svg/squigly.svg"
          alt="squigly"
        />
      </div>
      <div
        class="bg-grey-5 flex flex-col mx-4 xl:mx-0 gap-x-2 px-4 md:px-10 py-14 lg:rounded-3xl lg:max-w-[440px] w-full"
      >
        <h1 class="text-head font-semibold text-center text-[28px]">
          Register as a candidate
        </h1>
        <div class="w-full mt-10">
          <form
            id="getLicense"
            class="w-full flex flex-col items-start"
            @submit.prevent="submitForm"
          >
            <div class="w-full flex flex-col md:flex-row md:gap-4">
              <div class="w-full">
                <label for="firstName" class="mb-2">Name</label>
                <input
                  id="firstName"
                  v-model="firstname"
                  type="text"
                  name="firstName"
                  required
                  class="border border-grey-6 bg-white rounded-lg py-4 pl-6 pr-2 focus:outline-none w-full h-12"
                  :class="errorMsg.name ? 'border border-red-500' : ''"
                  placeholder="Enter your full name"
                />
                <span v-if="errorMsg.name" class="text-red-500 text-xs mt-1">{{
                  errorMsg.name
                }}</span>
                <span v-else class="text-transparent text-xs mt-1"
                  >There is no error message</span
                >
              </div>
            </div>
            <div class="flex w-full mt-3">
              <div class="flex flex-col w-full">
                <label for="email" class="mb-2">Email Address</label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  name="email"
                  required
                  class="border border-grey-6 bg-white rounded-lg py-4 pl-6 pr-2 focus:outline-none h-12"
                  :class="errorMsg.email ? 'border border-red-500' : ''"
                  placeholder="Enter your email address"
                />
                <span v-if="errorMsg.email" class="text-red-500 text-xs mt-1">{{
                  errorMsg.email
                }}</span>
                <span v-else class="text-transparent text-xs mt-1"
                  >There is no error message</span
                >
              </div>
            </div>
            <div class="w-full mt-6">
              <button
                @click="getStarted"
                class="liquor-btn min-w-max py-4 px-10 leading-none rounded-lg text-sm sm:text-base bg-secondary text-white w-full hover:bg-secondary/90"
              >
                Get Started
              </button>
              <div class="mt-10">
                <button
                  type="submit"
                  class="liquor-btn min-w-max leading-none rounded-lg text-sm sm:text-base text-secondary w-full hover:text-secondary/90"
                >
                  Request Callback
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  background: url("/svg/list.svg") no-repeat left top + 5px;
  padding: 3px 0 3px 40px;
  list-style: none;
  margin: 0;
  line-height: 28px;
}
</style>
