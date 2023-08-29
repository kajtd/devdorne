<script setup lang="ts">
defineProps<{
  type: string;
}>();
</script>

<template>
  <div :class="['alert', type]">
    <slot />
  </div>
</template>

<style scoped>
.alert {
  @apply flex items-center gap-8 w-full px-4 py-6 rounded-md mt-2  border-[3px] border-black;
}
.warning {
  @apply bg-[rgba(250,212,0,0.1)];
}
.success {
  @apply bg-[rgba(52,183,67,.12)];
}

.error {
  @apply bg-[rgba(220,38,38,0.2)];
}
</style>
