<script setup lang="ts">
// import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

const errorMsg = reactive({});
const firstname = ref('');
const lastname = ref('');
const email = ref('');
const message = ref('');

const validateEmail = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errorMsg.email = '';
  } else {
    errorMsg.email = 'Invalid Email Address';
  }
};

const validateInput = (input, value) => {
  if (value) {
    errorMsg[input] = '';
  } else {
    errorMsg[input] = ` ${input} required`;
  }
};


watch(firstname, (value) => {
  validateInput('firstname', value);
});

watch(lastname, (value) => {
  validateInput('lastname', value);
});

watch(email, (value) => {
  validateEmail(value);
});

watch(message, (value) => {
  validateInput('message', value);
});
const submitForm = () => {
  console.log('submitting form');
};
</script>

<template>
  <div class="relative isolate bg-grey-3 text-grey-8 mt-[110px]">
    <div class="mx-auto flex flex-col lg:flex-row max-w-7xl">
      <div class="relative w-full max-w-[464px]">
        <div class="mx-auto px-4 py-12 lg:px-4 xl:px-0 lg:p-12 lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            Get in touch
          </h2>
          <p class="mt-6 text-lg leading-8">
            We’ love to hear from you. Our friendly team is always here to chat.
          </p>
          <dl class="mt-10 space-y-4 text-base leading-7">
            <div class="flex gap-x-4">
              <dt class="">
                <img src="/svg/chat.svg" alt="" />
              </dt>
              <dd class="flex flex-col">
                <span class="sora text-secondary font-semibold text-xl"
                  >Chat to us</span
                >
                <span>Our friendly team is here to help</span>
                <a
                  href="mailto:hi@untitledui.com"
                  class="mt-5 hover:text-gray-900"
                  >hi@untitledui.com</a
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <img src="/svg/pin.svg" alt="" />
              </dt>
              <dd class="flex flex-col">
                <span class="sora text-secondary font-semibold text-xl"
                  >Office</span
                >
                <span>Come say hello at our office HQ</span>

                <span class="mt-5"
                  >100 Smith Street<br />Collingwood VIC 3066 AU</span
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <img src="/svg/phone.svg" alt="" />
              </dt>
              <dd class="flex flex-col">
                <span class="sora text-secondary font-semibold text-xl"
                  >Phone</span
                >
                <span>Mon-Fri from 8am to 5pm.</span>
                <a class="hover:text-gray-900 mt-5" href="tel:+1 (555) 234-5678"
                  >+1 (555) 234-5678</a
                >
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <form @submit.prevent="submitForm" class="pt-12 pb-24 px-4 lg:px-0 w-full mx-auto">
        <div class="mx-auto max-w-xl lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-grey-8"
                >First name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  v-model="firstname"
                  id="first-name"
                  autocomplete="given-name"
                  class="border border-grey-2 bg-grey rounded-sm py-4 px-6 focus:outline-none placeholder:text-gray-400 w-full h-12"
                  :class="errorMsg.firstname ? 'border border-red-500' : ''"
                />
                <span v-if="errorMsg.firstname" class="text-red-500 text-xs mt-1">{{
                  errorMsg.firstname
                }}</span>
                <span v-else class="text-transparent text-xs mt-1"
                  >There is no error message</span
                >
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-grey-8">Last name</label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  v-model="lastname"
                  id="last-name"
                  autocomplete="family-name"
                  class="border border-grey-2 bg-grey rounded-sm py-4 px-6 focus:outline-none placeholder:text-gray-400 w-full h-12"
                  :class="errorMsg.lastname ? 'border border-red-500' : ''"
                />
                <span v-if="errorMsg.lastname" class="text-red-500 text-xs mt-1">{{
                  errorMsg.lastname
                }}</span>
                <span v-else class="text-transparent text-xs mt-1"
                  >There is no error message</span
                >
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-grey-8">Email</label>
              <div class="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  v-model="email"
                  autocomplete="email"
                  class="border border-grey-2 bg-grey rounded-sm py-4 px-6 focus:outline-none placeholder:text-gray-400 w-full h-12"
                  :class="errorMsg.email ? 'border border-red-500' : ''"
                />
                <span v-if="errorMsg.email" class="text-red-500 text-xs mt-1">{{
                  errorMsg.email
                }}</span>
                <span v-else class="text-transparent text-xs mt-1"
                  >There is no error message</span
                >
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-grey-8">Message</label>
              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  v-model="message"
                  rows="5"
                  cols="30"
                  placeholder="Leave us a message"
                  class="border border-grey-2 bg-grey rounded-sm py-4 px-6 focus:outline-none placeholder:text-gray-400 w-full"
                  :class="errorMsg.message ? 'border border-red-500' : ''"
                />
                <span
                  v-if="errorMsg.message"
                  class="text-red-500 text-xs mt-1"
                  >{{ errorMsg.message }}</span
                >
                <span v-else class="text-transparent text-xs mt-1"
                  >There is no error message</span
                >
              </div>
            </div>
          </div>
          <div class="w-full mt-6">
              <button
                type="submit"
                class="liquor-btn min-w-max py-4 px-8 leading-none rounded-sm  bg-secondary text-white w-full hover:bg-secondary/90"
              >
                Get In Touch
              </button>
            </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
