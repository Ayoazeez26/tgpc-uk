<script setup lang="ts">
import { useDataStore } from '@/stores/data';
import { useDialogStore } from '@/stores/dialog';
import { useAuthStore } from '~/stores/auth';
import { NewPasswordInput, UserLoginInput } from '~/types';
import { successToast, errorToast } from '~/plugins/vue3-toastify';
// import { useToast } from 'vue-toastification';

const { $api } = useNuxtApp();
const data = useDataStore();
const dialog = useDialogStore();
const auth = useAuthStore();
const router = useRouter();
const isPasswordVisible = ref(false);
const isConfirmPasswordVisible = ref(false);

const password = ref('');
const confirmPassword = ref('');
const errorMsg = reactive({
  password: '',
});
const togglePasswordVisibility = (e) => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
const toggleConfirmPasswordVisibility = (e) => {
  isConfirmPasswordVisible.value = !isConfirmPasswordVisible.value;
};

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
    errorMsg.password = 'Password must contain at least one uppercase letter, lowercase letter, number, and special character'
  }
};

watch(confirmPassword, (value) => {
  validateConfirmPassword(value);
});

const validateConfirmPassword = (value) => {
  if (password.value !== value) {
    errorMsg.confirmPassword = 'Password do not match';
  } else {
    errorMsg.confirmPassword = '';
  }
}

watch(password, (value) => {
  validatePassword(value);
})

const resetPassword = async (): Promise<void> => {
  const payload: NewPasswordInput = {
    email: auth.tempEmail,
    password: password.value,
    confirmPassword: confirmPassword.value
  };
  auth.setNewPassword(payload);
};
const containsItem = computed(() => {
  if (errorMsg.password === '' && errorMsg.confirmPassword === '') {
    return false;
  } else {
    return true;
  }
});
</script>
<template>
  <div class="w-full h-full relative px-4 md:px-0">
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
          Enter New Password
        </h5>
        <div class="w-full my-10 max-w-[422px]">
          
          <div class="userId flex flex-col items-start relative">
            <input
              id="userPassword"
              v-model="password"
              class="email py-4 px-6 bg-grey border mt-1 focus:outline-none text-grey-8 rounded focus:border-secondary focus:ring-secondary h-[62px] w-full"
              :type="isPasswordVisible ? 'text' : 'password'"
              name="username"
              placeholder="Enter new password"
            />
            <div class="absolute bottom-14 right-4">
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
                v-else
                @click.stop="togglePasswordVisibility"
              >
                <Icon name="mdi:eye-off-outline" size="20" color="#0A0A0A" />
              </button>
            </div>
            <span
              v-if="errorMsg.password"
              class="text-red-500 self-start text-left text-xs mt-1"
              >{{ errorMsg.password }}</span
            >
            <span v-else class="text-transparent self-start text-xs mt-1"
              >There is no error message of any sort and there is nothing to worry about just so you know</span
            >
          </div>
          <div class="userId flex flex-col items-start relative mb-3">
            <input
              id="userPassword"
              v-model="confirmPassword"
              class="email py-4 px-6 bg-grey border mt-1 focus:outline-none text-grey-8 rounded focus:border-secondary focus:ring-secondary h-[62px] w-full"
              :type="isConfirmPasswordVisible ? 'text' : 'password'"
              name="username"
              placeholder="Confirm Password"
            />
            <div class="absolute bottom-10 right-4">
              <button
                type="button"
                v-if="isConfirmPasswordVisible"
                @click.stop="toggleConfirmPasswordVisibility"
                class="show-icon"
              >
                <Icon name="mdi:eye-outline" size="20" color="#0A0A0A" />
              </button>
              <button
                type="button"
                v-else
                @click.stop="toggleConfirmPasswordVisibility"
              >
                <Icon name="mdi:eye-off-outline" size="20" color="#0A0A0A" />
              </button>
            </div>
            <span
              v-if="errorMsg.confirmPassword"
              class="text-red-500 self-start text-left text-xs mt-1"
              >{{ errorMsg.confirmPassword }}</span
            >
            <span v-else class="text-transparent self-start text-xs mt-1"
              >There is no error message</span
            >
          </div>
          <div class="flex flex-col w-full lg:items-center gap-4">
            <button
              @click="resetPassword"
              :disabled="containsItem"
              class="bg-black disabled:bg-black/50 disabled:border-grey disabled:text-white/70 border-2 border-grey-6 font-medium py-4 px-8 h-[62px] rounded text-white w-full"
            >
              Reset Password
            </button>
          </div>
          <p class="mt-6 text-sm text-grey-8 font-light">
            By continuing, you agree to TGPC's
            <span class="underline">Terms of Service</span>
          </p>
          <!-- <p class="mt-6 text-sm text-grey-8 font-light">
            Already have an account?
            <nuxt-link to="/login" class="underline">Login</nuxt-link>
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
