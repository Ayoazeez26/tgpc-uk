<script setup lang="ts">
const values = ref([
  {
    title: "Respect and Fairness",
    desc: "Everyone deserves to be treated with respect and fairness, and that our clients and candidates are essential to their success.",
  },
  {
    title: "Mutual success",
    desc: "When our candidates and clients succeed, we also succeed. We’re dedicated to providing excellent services to everyone we work with.",
  },
  {
    title: "Diversity and inclusion",
    desc: "Everyone has something to offer, and are committed to creating a workplace where everyone is welcome and valued.",
  },
  {
    title: "Self-motivation",
    desc: "We are a team of passionate professionals who are always looking for new ways to improve",
  },
  {
    title: "Listening and communication",
    desc: "We believe that it is important to understand the needs of our candidates and clients, and to communicate effectively with them",
  },
]);
</script>
<template>
  <div class="bg-grey-4 px-4 xl:px-0 py-14 w-full">
    <div class="w-full max-w-[1240px] flex mx-auto">
      <div
        class="flex flex-col items-center justify-center w-full max-w-[1240px]"
      >
        <div class="flex flex-col text-center w-full max-w-[612px]">
          <h1
            class="font-semibold text-head leading-snug text-[38px] lg:leading-snug lg:text-[48px] w-full max-w-[572px]"
          >
            Our Core Values
          </h1>
          <p class="mt-4 leading-[28px]">
            What do we value? All sorts of things we particularly pride
            ourselves on:
          </p>
        </div>
        <div class="mt-14 flex gap-6 justify-center flex-wrap w-full">
          <div v-for="(value, index) in values" :key="index" class="card">
            <div class="flex justify-between w-full items-center">
              <p class="text-head text-lg font-semibold leading-[34px]">
                {{ value.title }}
              </p>
              <img src="/svg/spark.svg" alt="spark" />
            </div>
            <p class="leading-[28px] text-left">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: #fff;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  width: 397.333px;
  height: 234px;
  padding: 32px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
</style>
