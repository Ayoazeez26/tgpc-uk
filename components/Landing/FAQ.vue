<script setup lang="ts">
const opened = ref('first');
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
    class="bg-[#161616] text-grey-5 flex flex-col items-center mx-auto py-20"
  >
    <div
      class="flex items-center flex-col justify-between px-4 md:px-10 lg:px-24 w-full max-w-[1240px]"
    >
      <h2
        class="font-semibold text-center leading-[48px] lg:leading-[54px] px-6 md:px-0 tracking-[-1.5px] text-[32px] lg:text-[48px] w-full"
      >
        Frequently Asked Questions
      </h2>
      <div class="mt-10 w-full flex items-center flex-col">
        <div
          @click="first = !first"
          class="flex bg-whiter border bg-neutral border-neutral-2 cursor-pointer flex-col w-full lg:w-[823px] px-6 py-8"
        >
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-xl">What is HSCT Portal?</h3>
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
          <p
            v-if="first"
            class="mt-3 text-base leading-relaxed text-grey-5 font-light"
          >
            The HSCT (<a
              class="underline"
              href="https://www.HealthandSocialcareTenders.com"
              target="_blank"
              >HealthandSocialcareTenders.com</a
            >) Contract Portal is an easy-to-use website that makes it easier to
            identify and apply for public contracts. It is a centralized
            database of tender opportunities that you can search through to
            identify and apply for tender opportunities.
          </p>
        </div>
        <div
          @click="second = !second"
          class="flex bg-whiter cursor-pointer border bg-neutral border-neutral-2 flex-col w-full lg:w-[823px] px-6 py-8 my-6"
        >
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-xl">How do I find tenders on HSCT?</h3>
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
          <p
            v-if="second"
            class="mt-3 text-base leading-relaxed text-grey-5 font-light"
          >
            HSCT makes it easy to find the right tenders for you, you can either
            search directly for the type of tender you want on the search box,
            which will reveal results that match your search, or you can filter
            directly for tenders using location, date range, or contract amount.
          </p>
        </div>
        <div
          @click="third = !third"
          class="flex bg-whiter cursor-pointer border bg-neutral border-neutral-2 flex-col w-full lg:w-[823px] px-6 py-8"
        >
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-xl">
              What happens if I want to apply for a tender?
            </h3>
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
          <p
            v-if="third"
            class="mt-3 text-base leading-relaxed text-grey-5 font-light"
          >
            If you find a tender that meets your requirements, just click the
            apply now button. This will send a confirmation message to the email
            address you used to log in, alerting you that you will get the
            tender submission location link in the following 2 hours.
            Alternatively, you may submit for a tender and our friends at O.C
            management consultants will contact you.
          </p>
        </div>
      </div>
    </div>
    <div id="connect" />
  </div>
</template>

<style scoped></style>
