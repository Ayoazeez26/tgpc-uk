<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import { UpdateProfileInput, updatePasswordInput } from '~/types';
definePageMeta({
  middleware: ["authenticated"]
})
const auth = useAuthStore();
const fullName = ref('');
fullName.value = auth.user.fullName;
const updateProfile = async () => {
  const payload: UpdateProfileInput = {
    fullName: fullName.value,
  };
  await auth.updateProfile(payload);
};

const passwordData: updatePasswordInput = reactive({
  currentPassword: '',
  password: '',
  confirmPassword: '',
});
const errorMsg = reactive({
  password: '',
});
const validatePassword = (pw: string) => {
  if (
    /[A-Z]/.test(pw) &&
    /[a-z]/.test(pw) &&
    /[0-9]/.test(pw) &&
    /[^A-Za-z0-9]/.test(pw) &&
    pw.length > 6
  ) {
    errorMsg.password = '';
  } else {
    errorMsg.password =
      'Password must contain at least one uppercase letter, lowercase letter, number, and special character';
  }
};
watch(
  () => passwordData,
  (newVal) => {
    if (newVal.password.length) {
      validatePassword(newVal.password);
    }
    if (newVal.confirmPassword.length) {
      validateConfirmPassword(newVal.confirmPassword);
    }
  },
  { deep: true }
);

const validateConfirmPassword = (value) => {
  if (passwordData.password !== value) {
    errorMsg.confirmPassword = 'Password do not match';
  } else {
    errorMsg.confirmPassword = '';
  }
};

const updatePassword = async () => {
  const passwordUpdated = await auth.updatePassword(passwordData);
  if (passwordUpdated) {
    // console.log(passwordUpdated);
    passwordData.confirmPassword = '';
    passwordData.currentPassword = '';
    passwordData.password = '';
  }
};

const containsItem = computed(() => {
  if (
    errorMsg.password === '' &&
    errorMsg.confirmPassword === '' &&
    passwordData.currentPassword
  ) {
    return false;
  } else {
    return true;
  }
});
</script>

<template>
  <div class="body">
    <main class="text-primary bg-grey-3">
      <DashboardHeader />
      <section
        class="flex md:flex-row flex-col md:mt-10 mt-5 md:space-x-20 md:px-20 px-3 md:pt-20"
      >
        <div class="md:w-[25%]">
          <DashboardAccountSidebar />
        </div>
        <div class="md:w-[80%]">
          <div
            class="bg-white rounded-md md:p-10 p-5 md:mt-0 my-7"
            id="account"
          >
            <div class="md:space-y-5 space-y-3">
              <h3 class="font-bold md:text-2xl text-xl">Account Settings</h3>
              <p class="text-grey-8 md:text-base text-sm">
                Manage your HSCT profile
              </p>
            </div>
            <div
              class="md:mt-10 mt-5 md:space-y-10 space-y-10 border-b-2 pb-10"
            >
              <div
                class="flex md:flex-row flex-col md:justify-between md:items-center md:space-y-0 space-y-3"
              >
                <Heading4 content="Profile" />
                <button
                  @click="updateProfile"
                  class="bg-black text-white px-7 py-3 disabled:text-[#A5A5A5] disabled:bg-[#EBEBEB] disabled:cursor-not-allowed rounded"
                  :disabled="!fullName"
                >
                  Save
                </button>
              </div>
              <div class="flex flex-col space-y-3">
                <label for="full-name" class="text-grey-8">Full Name</label>
                <input
                  v-model="fullName"
                  type="text"
                  name="full-name"
                  id="full-name"
                  class="w-full bg-grey border border-grey-2 rounded p-3 outline-none"
                />
              </div>
            </div>
            <div
              class="md:mt-10 mt-5 md:space-y-10 space-y-10 border-b-2 pb-10"
            >
              <div
                class="flex md:flex-row flex-col md:justify-between md:items-center md:space-y-0 space-y-3"
              >
                <Heading4 content="Email" />
                <button
                  class="bg-black text-white px-7 py-3 disabled:text-[#A5A5A5] disabled:bg-[#EBEBEB] disabled:cursor-not-allowed rounded"
                  disabled
                >
                  Save
                </button>
              </div>
              <div class="flex flex-col space-y-3">
                <label for="email" class="text-grey-8">Email</label>
                <input
                  v-model="auth.user.email"
                  type="email"
                  name="email"
                  id="email"
                  class="w-full bg-grey border border-grey-2 text-[#A5A5A5] disabled:cursor-not-allowed rounded p-3 outline-none"
                  disabled
                />
              </div>
            </div>
            <div class="md:mt-10 mt-5 md:space-y-10 space-y-10">
              <div
                class="flex md:flex-row flex-col md:justify-between md:items-center md:space-y-0 space-y-3"
              >
                <Heading4 content="Change Password" />
                <button
                  @click="updatePassword"
                  class="bg-black text-white px-7 py-3 disabled:text-[#A5A5A5] disabled:bg-[#EBEBEB] disabled:cursor-not-allowed rounded"
                  :disabled="containsItem"
                >
                  Update Password
                </button>
              </div>
              <div class="space-y-5">
                <div class="flex flex-col space-y-3">
                  <label for="existing-password" class="text-grey-8"
                    >Existing Password</label
                  >
                  <input
                    v-model="passwordData.currentPassword"
                    type="password"
                    name="existing-password"
                    id="existing-password"
                    class="w-full bg-grey border border-grey-2 rounded p-3 outline-none"
                  />
                </div>
                <div class="flex flex-col relative space-y-3">
                  <label for="new-password" class="text-grey-8"
                    >New Password</label
                  >
                  <input
                    v-model="passwordData.password"
                    type="password"
                    name="new-password"
                    id="new-password"
                    class="w-full bg-grey border border-grey-2 rounded p-3 outline-none"
                  />
                  <span
                    v-if="errorMsg.password"
                    class="text-red-500 self-start text-left text-xs mt-1"
                    >{{ errorMsg.password }}</span
                  >
                  <span v-else class="text-transparent self-start text-xs mt-1"
                    >There is no error message of any sort and there is nothing
                    to worry about just so you know</span
                  >
                </div>
                <div class="flex flex-col relative space-y-3">
                  <label for="new-password" class="text-grey-8"
                    >Confirm Password</label
                  >
                  <input
                    v-model="passwordData.confirmPassword"
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    class="w-full bg-grey border border-grey-2 rounded p-3 outline-none"
                  />
                  <span
                    v-if="errorMsg.confirmPassword"
                    class="text-red-500 self-start text-left text-xs mt-1"
                    >{{ errorMsg.confirmPassword }}</span
                  >
                  <span v-else class="text-transparent self-start text-xs mt-1"
                    >There is no error message</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="h-[0.5px] bg-grey-8"></div>
          <div
            class="bg-white rounded-md md:p-10 p-5 my-7 space-y-7"
            id="manage-plan"
          >
            <div class="md:space-y-5 space-y-3">
              <h3 class="font-bold md:text-2xl text-xl">Manage Plans</h3>
              <p class="text-grey-8 md:text-base text-sm">
                Manage your Subscription Plan
              </p>
            </div>

            <div class="space-y-3">
              <Heading4 content="Current Plan" />
              <div>
                <div
                  class="bg-[#2970FF] p-5 rounded-t-md border border-[#2970FF]"
                >
                  <h3 class="text-grey-5 uppercase italic font-bold">
                    Pro (Monthly)
                  </h3>
                </div>

                <div
                  class="border border-[#2970FF] md:p-10 p-3 rounded-b-md md:space-y-10 space-y-5"
                >
                  <div class="grid md:grid-cols-2 md:space-y-0 space-y-5">
                    <div class="space-y-3">
                      <div class="flex items-end">
                        <h3 class="font-bold text-3xl">£50</h3>
                        <p>/month</p>
                      </div>
                      <p class="leading-relaxed md:max-w-xs">
                        Search, Filter, Apply for Tenders and Request for Tender
                        Writing Help.
                      </p>
                    </div>

                    <div class="space-y-3">
                      <p class="font-semibold">Included in the plan</p>
                      <div class="text-grey-8 space-y-1">
                        <p class="flex space-x-2">
                          <img src="/svg/check-bullet.svg" alt="" />
                          <span>Everything in Basic + 10 Tokens</span>
                        </p>
                        <p class="flex space-x-2">
                          <img src="/svg/check-bullet.svg" alt="" />
                          <span>10% Discount on Tender Writers</span>
                        </p>
                        <p class="flex space-x-2">
                          <img src="/svg/check-bullet.svg" alt="" />
                          <span>Access to Monthly Social Care Analytics</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <button
                    class="font-semibold bg-grey-5 border border-grey-2 px-10 py-5 rounded md:w-auto w-full"
                  >
                    Cancel Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
