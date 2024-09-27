<template>
  <NuxtLoadingIndicator color="#E4D9FF" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <AppSearchOverlay :is-open="showSearchOverlay" @close="showSearchOverlay = false"
    @select="showSearchOverlay = false" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showSearchOverlay = ref(false);

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === '/' && !event.ctrlKey && !event.metaKey) {
    event.preventDefault();
    showSearchOverlay.value = true;
  }
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>