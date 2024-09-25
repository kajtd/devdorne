<template>
  <main class="min-h-screen flex flex-col items-center w-full">
    <div class="space-y-8 flex flex-col items-center px-4 w-full">
      <HomeIntro />
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
