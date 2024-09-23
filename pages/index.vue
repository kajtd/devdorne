<template>
  <main class="min-h-screen flex flex-col items-center">
    <div class="space-y-8 flex flex-col items-center px-4">
      <HomeIntro />
      <HomeAbout />
      <HomeFAQ />
      <HomeCTA />
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "scroll-smooth",
  },
});
</script>
