<template>
  <div class="body">
    <main class="text-primary bg-grey-3">
      <Login />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const auth = useAuthStore();
auth.authenticated = false;
</script>

<style scoped></style>
