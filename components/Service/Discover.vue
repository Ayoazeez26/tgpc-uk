<script setup lang="ts">
const values = ref([
  {
    img: "discover",
    title: "Fill in information",
    desc: "Share your details, skills, and aspirations. This helps us understand you better for a tailored job match.",
  },
  {
    img: "discover",
    title: "Upload CV",
    desc: "Showcase your experience by submitting your CV. It's a key snapshot of your professional journey.",
  },
  {
    img: "discover",
    title: "Submit",
    desc: 'Click "Submit" to send us your information. Our dedicated team will review your details and start finding your ideal healthcare role.',
  }
]);
</script>
<template>
  <div class="bg-grey-5 px-4 xl:px-0">
    <div class="py-20 md:py-[120px] mx-auto w-full max-w-[1240px]">
      <div class="w-full flex">
        <div
          class="flex flex-col items-center justify-center w-full max-w-[1240px]"
        >
          <div class="flex flex-col text-center w-full max-w-[612px]">
            <h2
              class="font-semibold text-head leading-snug text-[28px] lg:leading-snug lg:text-[32px] w-full max-w-[612px]"
            >
              Discover Your Fulfilling Healthcare Career with Wana Services
            </h2>
          </div>
          <div class="mt-20 flex gap-6 flex-wrap w-full">
            <div v-for="(value, index) in values" :key="index" class="card">
              <img class="w-[64px]" src="/img/discover.png" alt="discover" />
              <p class="text-head mt-8 mb-2 text-lg font-semibold">
                {{ value.title }}
              </p>
              <p class="leading-[28px] text-left">{{ value.desc }}</p>
            </div>
          </div>
  
        </div>
      </div>
    </div>
    <div class="py-20 md:py-16 mx-auto w-full max-w-[1240px]">
      <div class="w-full flex flex-col md:items-start gap-10">
        <button class="bg-brown px-6 py-3 rounded-full uppercase text-sm font-bold tracking-[0.028px] leading-[28px] text-white">recruitment services</button>
        <p class="capitalize leading-[40px] md:leading-[44px] text-[24px] md:text-[28px]"><span class="font-medium">Join us today and taste the difference.</span> We guarantee you regular shifts and if you want permanent placement on contract that’s nothing to worry about DCS representatives will get your desired job position in matters of days. All we require of you is to become compliant and pass all pre-employment checks. We have lots of work across most cities and towns of the UK</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  width: 392px;
  padding: 32px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
</style>
