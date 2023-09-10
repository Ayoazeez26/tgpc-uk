<script setup lang="ts">
const services = ref(["surrey", "agri", "anchor", "trust", "point"]);

const carousel = ref(null);
const next = () => {
  carousel.value.next();
};

const prev = () => {
  carousel.value.prev();
};
const breakpoints = ref({
  150: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  768: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  1000: {
    itemsToShow: 5,
    snapAlign: "center",
  },
});
</script>
<template>
  <div class="px-4 xl:px-0 py-20 w-full max-w-[1240px] mx-auto">
    <div class="w-full">
      <img src="/img/about-img.png" alt="about image" />
    </div>
    <div class="flex flex-col w-full mt-16 md:mt-[120px]">
      <p class="mb-4 text-secondary">Our Values</p>
      <h2
        class="font-semibold text-[26px] md:text-[32px] leading-[42px] md:leading-[48px]"
      >
        We’re an ambitious and smart team with a shared mission
      </h2>
      <p class="mt-6">
        Our shared values keep us connected and guide us as one team.
      </p>
      <div class="flex flex-col mt-14 lg:flex-row lg:justify-between">
        <div class="flex flex-col w-full max-w-[592px]">
          <p class="leading-[28px]">
            At Dependable Health Care Limited, our journey began with a mission
            to revolutionize home health care. Established as a domiciliary care
            provider, we set out to deliver quality care and unwavering support
            to service-users in the warmth of their own familiar environments.
          </p>
          <p class="mt-6 md:mt- leading-[28px]">
            Regulated by the Care Quality Commission and aligned with the Health
            and Social Care Act 2008 (Regulated Activities) Regulations 2014
            (Fundamental Standards), we take pride in upholding the highest
            standards of care.
          </p>
        </div>
        <div class="flex flex-col w-full mt-6 lg:mt-0 max-w-[584px]">
          <p class="leading-[28px]">
            Our commitment to compliance ensures that we exceed expectations and
            provide unparalleled services to our cherished clients. Through our
            comprehensive statement of purpose, we establish clear standards
            that guide service users, their families, and representatives,
            empowering them to understand and expect excellence in every aspect
            of our care.
          </p>
          <p class="mt-6 md:mt- leading-[28px]">
            Dependable Health Care Limited is more than a care provider; we are
            a trusted companion, supporting our clients through every step of
            their wellness journey, all while celebrating the beauty of home and
            community-based care.
          </p>
        </div>
      </div>
    </div>
    <div
      class="bg-grey-2 px-6 md:px-24 py-8 md:py-14 flex flex-col items-center text-center gap-y-6 mt-[120px]"
    >
      <h2
        class="font-semibold text-[26px] md:text-[32px] leading-[42px] md:leading-[48px]"
      >
        Our Mission
      </h2>
      <p class="leading-[28px] w-full max-w-[822px]">
        At Dependable, our unwavering mission is to safeguard and uplift the
        lives of children and individuals in need of care and support. We value
        their choices and preferences, promoting independence to enhance their
        quality of life. With unwavering dignity and respect, we empower them to
        actively participate in their community, fostering a sense of
        self-reliance and achievement. Through person-centered planning, we
        ensure their voices are heard, fostering a compassionate and inclusive
        environment that enables them to thrive and do things for themselves.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide-child {
  border-left: 4px solid #cb9821;
}
</style>
