<script setup lang="ts">
const active = ref("all");
const roles = ref([
  {
    title: "Product Designer",
    category: "Design",
    type: 'Remote',
    to: '/job',
    duration: 'Contract',
  },
  {
    title: "Engineering Manager",
    category: "Software Development",
    type: 'Semi-Remote',
    to: '/job',
    duration: 'Part-time',
  },
  {
    title: "Customer Success Manager",
    category: "Customer Success",
    type: 'On-site',
    to: '/job',
    duration: 'Full-time',
  },
  {
    title: "Account Executive",
    category: "Sales",
    type: 'Remote',
    to: '/job',
    duration: 'Part-time',
  },
  {
    title: "SEO Marketing Manager",
    category: "Marketing",
    type: 'Semi-Remote',
    to: '/job',
    duration: 'Full-time',
  },
]);

const displayRoles = computed(() => {
  if (active.value === 'all') {
    return roles.value;
  } else {
    return roles.value.filter(val => active.value === val.category);
  }
})
</script>
<template>
  <div class="w-full max-w-[853px] mx-auto pb-[60px] md:pb-[120px] overflow-x-hidden relative">
    <div class="flex mx-4 md:mx-0 md:justify-center gap-x-2 my-8 max-w-[828px] w-full relative overflow-x-auto lg:py-[64px]">
      <button
        class="font-semibold min-w-max px-[14px] py-[10px] tracking-wide rounded-lg cursor-pointer"
        :class="active === 'all' ? 'text-primary bg-red-1' : 'text-grey-3'"
        @click="active = 'all'"
      >
        View all
      </button>
      <button
        class="font-semibold min-w-max px-[14px] py-[10px] tracking-wide rounded-lg cursor-pointer"
        :class="active === 'Design' ? 'text-primary bg-red-1' : 'text-grey-3'"
        @click="active = 'Design'"
      >
        Design
      </button>
      <button
        class="font-semibold min-w-max px-[14px] py-[10px] tracking-wide rounded-lg cursor-pointer"
        :class="active === 'Software Development' ? 'text-primary bg-red-1' : 'text-grey-3'"
        @click="active = 'Software Development'"
      >
        Software Engineering
      </button>
      <button
        class="font-semibold min-w-max px-[14px] py-[10px] tracking-wide rounded-lg cursor-pointer"
        :class="active === 'Customer Success' ? 'text-primary bg-red-1' : 'text-grey-3'"
        @click="active = 'Customer Success'"
      >
        Customer Success
      </button>
      <button
        class="font-semibold min-w-max px-[14px] py-[10px] tracking-wide rounded-lg cursor-pointer"
        :class="active === 'Sales' ? 'text-primary bg-red-1' : 'text-grey-3'"
        @click="active = 'Sales'"
      >
        Sales
      </button>
      <button
        class="font-semibold min-w-max px-[14px] py-[10px] tracking-wide rounded-lg cursor-pointer mr-8 md:mr-0"
        :class="
          active === 'Marketing' ? 'text-primary bg-red-1' : 'text-grey-3'
        "
        @click="active = 'Marketing'"
      >
        Marketing
      </button>
    </div>
    <div class="flex flex-col items-center gap-6 px-4 md:px-0">
      <div v-for="(role, index) in displayRoles" :key="index" class="p-6 rounded-2xl border border-primary w-full max-w-[768px]">
        <div class="flex justify-between mb-2">
          <p class="text-primary font-medium tracking-wide">{{ role.category }}</p>
          <nuxt-link :to="role.to" class="text-primary font-semibold tracking-wide"
            >Apply
            <Icon
              name="material-symbols:arrow-right-alt"
              color="#800020"
              size="24px"
            ></Icon
          ></nuxt-link>
        </div>
        <p class="text-grey font-semibold text-2xl tracking-wide">
          {{ role.title }}
        </p>
        <div class="flex gap-2 mt-6">
          <div
            class="border border-primary rounded-full gap-2 flex items-center px-3 py-2"
          >
            <img src="/svg/pin.svg" alt="pin" />
            <p class="text-primary font-medium pt-1 tracking-wide">{{ role.type }}</p>
          </div>
          <div
            class="border border-primary rounded-full gap-2 flex items-center px-3 py-2"
          >
            <img src="/svg/time.svg" alt="pin" />
            <p class="text-primary font-medium pt-1 tracking-wide">{{ role.duration }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
