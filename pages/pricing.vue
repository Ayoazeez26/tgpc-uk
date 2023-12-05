<template>
  <div class="body">
    <main class="text-primary bg-grey-3">
      <Pricing />
      <HomeQandA />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["authenticated"]
})
</script>

<style scoped></style>
