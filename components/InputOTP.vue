<script setup lang="ts">
import { emit } from 'process';

const props = defineProps<{ fields: number }>();
const data = ref([]);
const emit = defineEmits(['update:modelValue']);

const handleOtpInput = (e) => {
  if (e.data && e.target.nextElementSibling) {
    e.target.nextElementSibling.focus();
  } else if (e.data == null && e.target.previousElementSibling) {
    e.target.previousElementSibling.focus();
  }
};

const handlePaste = (e) => {
  const pasteData = e.clipboardData.getData('text');
  let nextEl = firstInputEl.value[0].nextElementSibling;
  for (let i = 1; i < pasteData.length; i++) {
    if (nextEl) {
      data.value[i] = pasteData[i];
      nextEl = nextEl.nextElementSibling;
    }
  }
};
watch(
  () => data,
  (newVal) => {
    console.log(newVal.value);
    if (
      newVal.value.length != 0 &&
      newVal.value.length === props.fields &&
      !newVal.value.join('').includes(' ')
    ) {
      emit('update:modelValue', Number(newVal.value.join('')));
    } else {
      emit('update:modelValue', null);
    }
  },
  { deep: true }
);
</script>
<template>
  <div class="">
    <!-- <div class="flex flex-col w-full">
      <input
        id="email"
        v-model="email"
        type="email"
        name="email"
        required
        class="border rounded py-4 px-6 h-[62px]"
        :class="errorMsg.email ? 'border border-red-500' : ''"
        placeholder="Enter Email Address"
      />-->
    <div @input="handleOtpInput" class="otp w-full flex justify-around">
      <template v-for="field in fields" :key="field">
        <input
          v-model="data[field - 1]"
          ref="firstInputEl"
          type="text"
          maxlength="1"
          class="border border-grey-2 bg-grey rounded w-14 h-[62px] text-grey-8 focus:outline-none focus:border-secondary focus:ring-secondary text-center"
          @paste="field === 1 && handlePaste($event)"
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss"></style>
