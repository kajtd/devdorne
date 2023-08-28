<script setup lang="ts">
defineProps<{
  url: string;
}>();
</script>

<template>
  <NuxtLink
    :to="url"
    class="relative z-[1] after:z-[-1] after:bg-primary after:h-3 after:w-full after:absolute after:top-4 after:left-0 after:scale-0 hover:after:scale-100 after:transition-transform"
    active-class="z-[1] after:z-[-1] after:bg-primary after:h-3 after:w-full after:absolute after:top-4 after:left-0 after:scale-100"
  >
    <slot />
  </NuxtLink>
</template>
