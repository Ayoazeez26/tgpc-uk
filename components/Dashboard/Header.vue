<script>
export default {};
</script>

<template>
  <header
    class="flex items-center justify-between border-b md:px-20 px-5 py-5 md:fixed md:top-0 md:w-full bg-grey-3"
  >
    <NuxtLink to="/dashboard" class="cursor-pointer">
      <p class="md:text-base text-sm">Dashboard</p></NuxtLink
    >
    <NuxtLink to="/dashboard" class="cursor-pointer"
      ><img src="/svg/logo.svg" alt="logo"
    /></NuxtLink>
    <div></div>
  </header>
</template>

<style scoped></style>
