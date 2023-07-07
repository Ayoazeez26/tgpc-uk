<script setup lang="ts">
// const seoData = reactive({
//   title: 'O.C. Management Consulting',
//   description: 'Leading management consulting company specializing in Tender, Grant, and Bid writing and management as well as developing quality assurance frameworks and enabling successful license applications.',
//   img: '/img/logo.png'
// });

// useSeoMeta({
//   title: seoData.title,
//   ogTitle: seoData.title,
//   description: seoData.description,
//   ogDescription: seoData.description,
//   ogImage: seoData.img
// })
</script>
<template>
  <div class="body">
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
<style lang="scss">
html {
  height: 100%;
}
.body {
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
}

main {
  flex: 1 0;
}
footer {
  flex: 0 0;
}
</style>