<script setup lang="ts">
const opened = ref("first");
const first = ref(true);
const second = ref(false);
const third = ref(false);
watch(first, (val) => {
  if (val) {
    second.value = false;
    third.value = false;
  }
});
watch(second, (val) => {
  if (val) {
    first.value = false;
    third.value = false;
  }
});
watch(third, (val) => {
  if (val) {
    first.value = false;
    second.value = false;
  }
});
</script>
<template>
  <div
    class="bg-black text-grey-5 flex flex-col items-center mx-auto py-20"
  >
    <div
      class="flex items-center flex-col justify-between px-4 md:px-10 lg:px-24 w-full max-w-[1240px]"
    >
      <h2
        class="font-semibold text-center leading-[48px] lg:leading-[54px] uppercase px-6 md:px-0 tracking-[-1.5px] text-[32px] lg:text-[48px] w-full"
      >
        faq
      </h2>
      <div class="mt-10 w-full flex items-center flex-col">
        <div
          @click="first = !first"
          class="flex bg-whiter border bg-neutral border-neutral-2 cursor-pointer flex-col w-full lg:w-[823px] px-6 py-8"
        >
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-xl">What is TGPC Portal?</h3>
            <Icon
              v-if="first"
              class="cursor-pointer"
              name="mdi:arrow-down"
              color="#EBEBEB"
              size="24px"
            />
            <Icon
              v-else
              class="cursor-pointer"
              name="mdi:arrow-right"
              color="#EBEBEB"
              size="24px"
            />
          </div>
          <p v-if="first" class="mt-3 text-lg leading-relaxed">
            OCMC is your strategic partner in navigating complex regulations, securing funding, and winning tenders. We deliver tailored solutions to diverse organizations, backed by a proven track record of success. With a focus on trust and transparency, we empower your journey to excellence.
          </p>
        </div>
        <div
          @click="second = !second"
          class="flex bg-whiter cursor-pointer border bg-neutral border-neutral-2 flex-col w-full lg:w-[823px] px-6 py-8 my-6"
        >
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-xl">How much does TGPC Portal work?</h3>
            <Icon
              v-if="second"
              class="cursor-pointer"
              name="mdi:arrow-down"
              color="#EBEBEB"
              size="24px"
            />
            <Icon
              v-else
              class="cursor-pointer"
              name="mdi:arrow-right"
              color="#EBEBEB"
              size="24px"
            />
          </div>
          <p v-if="second" class="mt-3 text-lg leading-relaxed">
            At O C Management Consultants, we excel in navigating complex
            regulations, securing funding, and winning tenders with a proven
            track record of success across industries. Our tailored solutions,
            built on trust and transparency, ensure regulatory compliance.
            Unlock your organization's potential with our e-books and guides.
            Contact us today for customized excellence-driven solutions.
          </p>
        </div>
        <div
          @click="third = !third"
          class="flex bg-whiter cursor-pointer border bg-neutral border-neutral-2 flex-col w-full lg:w-[823px] px-6 py-8"
        >
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-xl">What Can I Gain From Portal?</h3>
            <Icon
              v-if="third"
              class="cursor-pointer"
              name="mdi:arrow-down"
              color="#EBEBEB"
              size="24px"
            />
            <Icon
              v-else
              class="cursor-pointer"
              name="mdi:arrow-right"
              color="#EBEBEB"
              size="24px"
            />
          </div>
          <p v-if="third" class="mt-3 text-lg leading-relaxed">
            At O C Management Consultants, we excel in navigating complex
            regulations, securing funding, and winning tenders with a proven
            track record of success across industries. Our tailored solutions,
            built on trust and transparency, ensure regulatory compliance.
            Unlock your organization's potential with our e-books and guides.
            Contact us today for customized excellence-driven solutions.
          </p>
        </div>
      </div>
    </div>
    <div id="connect" />
  </div>
</template>

<style scoped></style>
