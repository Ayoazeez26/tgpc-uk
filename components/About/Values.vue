<script setup lang="ts">
const values = ref([
  {
    title: "Respect",
    desc: "We emphasize empathy, kindness, and understanding in all interactions.",
  },
  {
    title: "Commitment",
    desc: "We have an unwavering dedication to our mission and those we serve.",
  },
  {
    title: "Compassion",
    desc: "With the heart of our care, fostering empathy and kindness for all.",
  },
  {
    title: "Dignity",
    desc: "We honor and uphold the inherent worth and value of every individual.",
  },
  {
    title: "Integrity",
    desc: "We make sure to uphold honesty, ethics, and trust in all that we do.",
  },
  {
    title: "Involvement",
    desc: "We engage, empower, and value everyone's active participation.",
  },
  {
    title: "Independence",
    desc: "We Foster self-reliance, empowering lives on their unique paths.",
  },
  {
    title: "Equality",
    desc: "We embrace diversity, ensuring fairness, and empowering all.",
  },
  {
    title: "Safety",
    desc: "We Prioritize well-being, creating secure environments, and trust.",
  },
]);
</script>
<template>
  <div class="px-4 xl:px-0 py-14 w-full">
    <div class="w-full max-w-[1240px] flex mx-auto">
      <div
        class="flex flex-col items-center justify-center w-full max-w-[1240px]"
      >
        <div class="flex flex-col text-center w-full max-w-[612px]">
          <p class="text-secondary mb-4">Our Values</p>
          <h3
            class="text-2xl lg:text-[32px] font-semibold leading-8 w-full max-w-[572px]"
          >
            We're an ambitious and smart team with a shared mission
          </h3>
          <p class="mt-4 leading-[28px]">
            Our shared values keep us connected and guide us as one team.
          </p>
        </div>
        <div class="mt-14 flex gap-6 justify-center flex-wrap w-full">
          <div v-for="(value, index) in values" :key="index" class="card border border-secondary bg-white flex flex-col rounded-lg items-center p-6 w-[384px] h-[224px] text-center">
            <div class="w-14 h-14 flex items-center justify-center" :class="index % 2 === 0 ? 'bg-lime' : 'bg-brown'">
              <img class="w-6" src="/svg/blue-star.svg" alt="blue star">
            </div>
              <h4 class="text-head text-2xl font-semibold leading-[34px]">
                {{ value.title }}
              </h4>
            <p class="leading-[28px]">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  gap: 16px;
}
</style>
