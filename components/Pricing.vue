<script setup lang="ts">
const plan = ref("monthly");
const email = ref("");
const password = ref("");
const errorMsg = reactive({});
const togglePasswordVisibility = (e) => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
const isPasswordVisible = ref(false);
const validateEmail = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errorMsg.email = "";
  } else {
    errorMsg.email = "Invalid Email Address";
  }
};

watch(email, (value) => {
  validateEmail(value);
});
const containsItem = computed(() => {
  if (loginData.value.email.length > 0 && loginData.value.password.length > 0) {
    return false;
  } else {
    return true;
  }
});
</script>
<template>
  <div class="w-full relative">
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
      <div class="flex flex-col gap-2 items-center text-center w-full">
        <h1
          class="text-2xl text-black md:text-[32px] max-w-[422px] font-semibold md:leading-[48px]"
        >
          Pricing Plans
        </h1>
        <div class="w-full max-w-[390px] flex flex-col mt-6">
          <div
            class="bg-grey border border-grey-2 rounded flex overflow-x-auto relative w-full gap-1 p-1 lg:w-auto self-start lg:self-center"
          >
            <button
              @click="plan = 'monthly'"
              class="px-8 rounded py-2 min-w-max leading-[30px] tracking-[0.028px]"
              :class="plan === 'monthly' ? 'bg-secondary text-white' : ''"
            >
              Monthly
            </button>
            <button
              @click="plan = 'quarterly'"
              class="px-8 rounded py-2 min-w-max leading-[30px] tracking-[0.028px]"
              :class="plan === 'quarterly' ? 'bg-secondary text-white' : ''"
            >
              Quarterly
            </button>
            <button
              @click="plan = 'annual'"
              class="px-8 rounded py-2 min-w-max leading-[30px] tracking-[0.028px]"
              :class="plan === 'annual' ? 'bg-secondary text-white' : ''"
            >
              Annual
            </button>
          </div>
          <p v-if="plan === 'annual'" class="text-grey-8 self-end">Save 33%</p>
        </div>
        <div class="flex gap-4 items-center mt-10 justify-center w-full">
          <div
            class="flex flex-col gap-8 border text-grey-6 border-grey-2 rounded-xl items-start w-full max-w-[374px]"
          >
            <div class="p-6 w-full border-b border-grey-2">
              <p
                class="uppercase italic font-black text-2xl leading-[30px] text-center tracking-[0.048px]"
              >
                basic
              </p>
            </div>
            <div
              class="flex flex-col items-center text-center gap-8 px-5 pb-5 w-full"
            >
              <div class="flex flex-col gap-2 items-center text-center w-full">
                <h4 class="text-[40px] font-medium">$8/MONTH</h4>
                <p class="font-medium">Billed $96 annually</p>
              </div>
              <div class="flex flex-col items-center gap-2">
                <div class="flex gap-2 items-center">
                  <img src="/svg/shield.svg" alt="shield" />
                  <p class="text-sm font-medium">Unlimited search queries</p>
                </div>
                <div class="flex gap-2 items-center">
                  <img src="/svg/shield.svg" alt="shield" />
                  <p class="text-sm font-medium">Unlimited search queries</p>
                </div>
                <div class="flex gap-2 items-center">
                  <img src="/svg/shield.svg" alt="shield" />
                  <p class="text-sm font-medium">Unlimited search queries</p>
                </div>
              </div>
              <button class="bg-grey-6 text-white py-4 px-8 rounded w-full">
                Coming Soon!
              </button>
            </div>
          </div>
          <div
            class="flex flex-col gap-8 border text-secondary border-yellow rounded-xl items-start w-full max-w-[374px]"
          >
            <div class="pro p-6 w-full border-b border-grey-2 rounded-t-xl">
              <p
                class="uppercase italic font-black text-2xl leading-[30px] text-center text-grey-5 tracking-[0.048px]"
              >
                pro
              </p>
            </div>
            <div
              class="flex flex-col items-center text-center gap-8 px-5 pb-5 w-full"
            >
              <div class="flex flex-col gap-2 items-center text-center w-full">
                <h4 class="text-[40px] font-medium">$16/MONTH</h4>
                <p class="font-medium">Billed $192 annually</p>
              </div>
              <div class="flex flex-col items-center gap-2">
                <div class="flex gap-2 items-center">
                  <img src="/svg/shield-black.svg" alt="shield" />
                  <p class="text-sm font-medium">Unlimited search queries</p>
                </div>
                <div class="flex gap-2 items-center">
                  <img src="/svg/shield-black.svg" alt="shield" />
                  <p class="text-sm font-medium">Unlimited search queries</p>
                </div>
                <div class="flex gap-2 items-center">
                  <img src="/svg/shield-black.svg" alt="shield" />
                  <p class="text-sm font-medium">Unlimited search queries</p>
                </div>
              </div>
              <button class="bg-secondary text-white py-4 px-8 rounded w-full">
                Upgrade
              </button>
            </div>
          </div>
          <div
            class="flex flex-col gap-8 border text-grey-6 border-grey-2 rounded-xl items-start w-full max-w-[374px]"
          >
            <div class="p-6 w-full border-b border-grey-2">
              <p
                class="uppercase italic font-black text-2xl leading-[30px] text-center tracking-[0.048px]"
              >
                executive
              </p>
            </div>
            <div
              class="flex flex-col items-center text-center gap-8 px-5 pb-5 w-full"
            >
              <div class="flex flex-col gap-2 items-center text-center w-full">
                <h4 class="text-[40px] font-medium">$24/MONTH</h4>
                <p class="font-medium">Billed $288 annually</p>
              </div>
              <div class="flex flex-col items-center gap-2">
                <div class="flex gap-2 items-center">
                  <img src="/svg/shield.svg" alt="shield" />
                  <p class="text-sm font-medium">Unlimited search queries</p>
                </div>
                <div class="flex gap-2 items-center">
                  <img src="/svg/shield.svg" alt="shield" />
                  <p class="text-sm font-medium">Unlimited search queries</p>
                </div>
                <div class="flex gap-2 items-center">
                  <img src="/svg/shield.svg" alt="shield" />
                  <p class="text-sm font-medium">Unlimited search queries</p>
                </div>
              </div>
              <button class="bg-grey-6 text-white py-4 px-8 rounded w-full">
                Coming Soon!
              </button>
            </div>
          </div>
        </div>
        <button class="text-secondary mt-10">
          Continue as Free User <Icon name="mdi:arrow-right" size="20" />
        </button>
      </div>
      <div class="py-[120px] w-full">
        <div class="flex">
          <div class="flex flex-col pb-10 pr-4 pt-[86px] w-full max-w-[312px]">
            <h3 class="text-2xl text-black font-semibold mb-[37px]">
              Compare Plans
            </h3>
            <div
              class="bg-grey border border-grey-2 text-sm rounded flex overflow-x-auto relative w-full gap-1 p-1 max-w-max lg:w-auto self-start lg:self-center"
            >
              <button
                @click="plan = 'monthly'"
                class="px-5 rounded py-2 min-w-max leading-[30px] tracking-[0.028px]"
                :class="plan === 'monthly' ? 'bg-secondary text-white' : ''"
              >
                Monthly
              </button>
              <button
                @click="plan = 'quarterly'"
                class="px-5 rounded py-2 min-w-max leading-[30px] tracking-[0.028px]"
                :class="plan === 'quarterly' ? 'bg-secondary text-white' : ''"
              >
                Quarterly
              </button>
              <button
                @click="plan = 'annual'"
                class="px-5 rounded py-2 min-w-max leading-[30px] tracking-[0.028px]"
                :class="plan === 'annual' ? 'bg-secondary text-white' : ''"
              >
                Annual
              </button>
            </div>
          </div>
          <div
            class="flex flex-col gap-8 border text-grey-6 border-grey-2 items-start w-full max-w-[246px]"
          >
            <div class="py-4 px-6 w-full border-b border-grey-2">
              <p
                class="uppercase italic font-black text-sm leading-[30px] text-center tracking-[0.028px]"
              >
                free
              </p>
            </div>
            <div
              class="flex flex-col items-center text-center gap-8 px-5 pb-5 w-full"
            >
              <div class="flex flex-col gap-2 items-center text-center w-full">
                <h4 class="text-xl font-medium">$0/MONTH</h4>
                <p class="font-medium text-sm">Free to use</p>
              </div>
              
            </div>
          </div>
          <div
            class="flex flex-col gap-8 border text-grey-6 border-grey-2 items-start w-full max-w-[246px]"
          >
            <div class="py-4 px-6 w-full border-b border-grey-2">
              <p
                class="uppercase italic font-black text-sm leading-[30px] text-center tracking-[0.048px]"
              >
                basic
              </p>
            </div>
            <div
              class="flex flex-col items-center text-center gap-8 px-5 pb-5 w-full"
            >
              <div class="flex flex-col gap-2 items-center text-center w-full">
                <h4 class="text-xl font-medium">$8/MONTH</h4>
                <p class="font-medium text-sm">Billed $96 annually</p>
              </div>
              
              <button class="text-sm bg-grey-6 text-white py-4 px-8 rounded w-full">
                Coming Soon!
              </button>
            </div>
          </div>
          <div
            class="flex flex-col gap-8 border text-secondary border-yellow items-start w-full max-w-[246px]"
          >
            <div class="pro py-4 px-6 w-full border-b border-grey-2">
              <p
                class="uppercase italic font-black text-sm leading-[30px] text-center text-grey-5 tracking-[0.048px]"
              >
                pro
              </p>
            </div>
            <div
              class="flex flex-col items-center text-center gap-8 px-5 pb-5 w-full"
            >
              <div class="flex flex-col gap-2 items-center text-center w-full">
                <h4 class="text-xl font-medium">$16/MONTH</h4>
                <p class="font-medium text-sm">Billed $192 annually</p>
              </div>
              
              <button class="text-sm bg-secondary text-white py-4 px-8 rounded w-full">
                Upgrade
              </button>
            </div>
          </div>
          <div
            class="flex flex-col gap-8 border text-grey-6 border-grey-2 items-start w-full max-w-[246px]"
          >
            <div class="py-4 px-6 w-full border-b border-grey-2">
              <p
                class="uppercase italic font-black text-sm leading-[30px] text-center tracking-[0.048px]"
              >
                executive
              </p>
            </div>
            <div
              class="flex flex-col items-center text-center gap-8 px-5 pb-5 w-full"
            >
              <div class="flex flex-col gap-2 items-center text-center w-full">
                <h4 class="text-xl font-medium">$24/MONTH</h4>
                <p class="font-medium text-sm">Billed $288 annually</p>
              </div>
              
              <button class="text-sm bg-grey-6 text-white py-4 px-8 rounded w-full">
                Coming Soon!
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-start text-grey-6">
          <div class="py-4 px-6 w-full border border-grey-2 max-w-[312px]">
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
        </div>
        <div class="flex items-start text-grey-6">
          <div class="py-4 px-6 w-full border border-grey-2 max-w-[312px]">
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
        </div>
        <div class="flex items-start text-grey-6">
          <div class="py-4 px-6 w-full border border-grey-2 max-w-[312px]">
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
        </div>
        <div class="flex items-start text-grey-6">
          <div class="py-4 px-6 w-full border border-grey-2 max-w-[312px]">
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
        </div>
        <div class="flex items-start text-grey-6">
          <div class="py-4 px-6 w-full border border-grey-2 max-w-[312px]">
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
        </div>
        <div class="flex items-start text-grey-6">
          <div class="py-4 px-6 w-full border border-grey-2 max-w-[312px]">
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
          <div
            class="py-4 px-6 w-full border border-grey-2 max-w-[246px]"
          >
            <p class="text-lg font-light italic tracking-[0.036] text-center leading-[34px] uppercase">free</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pro {
  // border: 1px solid #FFF;
  background: linear-gradient(110deg, #d16ca3 27%, #f6af54 100%);
}
</style>
