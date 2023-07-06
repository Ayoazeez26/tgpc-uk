<script setup lang="ts">
import { reactive, ref, watch } from "vue";
const submitForm = () => {
  console.log("submitting form");
};

const errorMsg = reactive({});
const name = ref("");
const email = ref("");
const message = ref("");

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
</script>
<template>
  <div
    class="bg-primary flex flex-col items-center mb-[60px] lg:mb-[120px] py-16"
  >
    <div
      class="px-4 px-sm-0 flex flex-col text-white/80 justify-between items-center lg:flex-row mx-auto w-full max-w-[1240px]"
    >
      <div class="w-full max-w-[500px]">
        <p class="mt-3 text-lg leading-relaxed uppercase">Post a comment</p>
        <h2
          class="font-semibold uppercase leading-snug text-2xl md:text-3xl text-white"
        >
          Share your thoughts and join the discussion!
        </h2>
      </div>
      <div class="w-full max-w-[500px]">
        <form
          id="getLicense"
          class="w-full flex flex-col items-start"
          @submit.prevent="submitForm"
        >
          <div class="w-full">
            <label for="firstName" class="mb-2"
              >Name</label
            >
            <input
              id="firstName"
              v-model="name"
              type="text"
              name="firstName"
              required
              class="border border-grey-7 text-white/70 bg-transparent rounded-lg py-4 pl-6 pr-2 focus:outline-none w-full h-12"
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
          <div class="flex w-full mt-3">
            <div class="flex flex-col w-full">
              <label for="email" class="mb-2"
                >Email Address</label
              >
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                required
                class="border border-grey-7 text-white/70 bg-transparent rounded-lg py-4 pl-6 pr-2 focus:outline-none h-12"
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
          <div class="flex w-full mt-3">
            <div class="flex flex-col w-full">
              <label for="message" class="mb-2"
                >Message</label
              >
              <textarea
                id="message"
                v-model="message"
                name="message"
                rows="5"
                cols="30"
                class="border border-grey-7 text-white/70 bg-transparent rounded-lg py-4 px-6 focus:outline-none"
                placeholder="Type your message here"
                maxlength="500"
              />
              <span v-if="errorMsg.message" class="text-red-500 text-xs mt-1">{{
                errorMsg.message
              }}</span>
              <span v-else class="text-transparent text-xs mt-1"
                >There is no error message</span
              >
              <!-- <p class="text-grey-4 italic">
                * Please limit your message to 500 characters
              </p> -->
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="liquor-btn min-w-max py-3 px-10 leading-none rounded-lg text-sm sm:text-base bg-white text-primary w-full hover:bg-primary/90"
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
