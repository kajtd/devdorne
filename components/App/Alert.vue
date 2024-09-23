<template>
  <transition name="fade">
    <div v-if="type"
      class="fixed top-4 right-4 flex items-start space-x-4 p-4 bg-white border-[1.25px] border-gray-300/80 shadow-xs rounded-xl max-w-sm pr-10">
      <span v-if="type === 'success'" class="mt-[-4px]">🥰</span>
      <span v-else-if="type === 'error'" class="mt-[-4px]">😥</span>
      <div class="space-y-2">
        <p class="font-medium text-base leading-none">{{ title }}</p>
        <p class="text-sm text-gray-600">{{ description }}</p>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
type Props = {
  type?: "success" | "error";
  title: string;
  description: string;
}

defineProps<Props>();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
