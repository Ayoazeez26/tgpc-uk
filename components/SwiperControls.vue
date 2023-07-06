<template>
  <div class="flex w-full justify-center gap-4 mt-5">
    <button ref="prevBtn" @click="swiper.slidePrev()" class="flex min-w-max gap-2 items-center self-start mt-2">
      <Icon name="ic:baseline-arrow-back-ios" size="24px" color="#03989E" />
    </button>
    <button ref="nextBtn" @click="swiper.slideNext()" class="flex min-w-max gap-2 items-center self-start mt-2">
      <Icon name="ic:baseline-arrow-forward-ios" size="24px" color="#03989E" />
    </button>
  </div>
</template>

<script setup lang="ts">
const swiper = useSwiper();
const prevBtn = ref(null);
const nextBtn = ref(null);
const props = defineProps ({
  clickPrev: {
    type: Boolean,
    default: false
  },
  clickNext: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(["resetBtnValues"])

watch(() => props.clickPrev, (newVal, oldVal) => {
  if (newVal) {
    prevBtn.value.click();
    emit('resetBtnValues');
  }
})

watch(() => props.clickNext, (newVal, oldVal) => {
  if (newVal) {
    nextBtn.value.click();
    emit('resetBtnValues');
  }
})
</script>

<style scoped></style>
