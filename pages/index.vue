<template>
  <div>
    <LandingHeader />
    <LandingHero />
    <LandingFindHealthTenders />
    <LandingEasySearch />
    <LandingRegistration />
    <LandingSearching />
    <LandingApply />
    <LandingContact />
    <LandingFAQ />
    <LandingCTA />
    <LandingFooter />
    <Test />
  </div>
  <CustomCursor />
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
definePageMeta({
  middleware: ["guest"]
})

const auth = useAuthStore();
auth.authenticated = false;
</script>

<style scoped></style>
