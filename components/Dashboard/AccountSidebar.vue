<template>
  <div
    class="flex flex-col md:space-y-5 space-y-2 md:w-[30%] md:border-b-none border-b-2 md:pb-0 pb-5"
  >
    <nuxt-link
      to="/account"
      :class="{
        'bg-black text-white py-3 text-left px-10 rounded-md outline-none':
          currentRoute === '/account',
        'text-black py-3 text-left px-10 rounded-md outline-none':
          currentRoute !== '/account',
      }"
    >
      Account
    </nuxt-link>

    <nuxt-link
      to="/account/manage-plan"
      :class="{
        'bg-black text-white py-3 text-left px-10 rounded-md outline-none':
          currentRoute === '/account/manage-plan',
        'text-black py-3 text-left px-10 rounded-md outline-none':
          currentRoute !== '/account/manage-plan',
      }"
    >
      Manage Plan
    </nuxt-link>
  </div>
</template>

<script setup>
const route = useRoute();
const currentRoute = route.path;
</script>
