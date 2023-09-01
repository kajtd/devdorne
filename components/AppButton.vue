<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  href?: string;
  ariaLabel?: string;
}>();

const computedComponent = computed(() =>
  props.href ? resolveComponent('NuxtLink') : 'button'
);
</script>

<template>
  <component
    :is="computedComponent"
    :to="href"
    :aria-label="ariaLabel"
    class="flex justify-center items-center bg-primary rounded-full border-[3px] border-black hover:shadow-[3px_3px_1px_black] transition-shadow"
  >
    <slot />
  </component>
</template>
