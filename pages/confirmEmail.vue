<template>
  <div class="body">
    <main class="text-primary bg-grey-3 w-full h-full relative">
      <ConfirmEmail />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["guest"]
})
</script>

<style scoped></style>
