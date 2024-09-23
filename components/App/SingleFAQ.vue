<template>
  <h2 class="uppercase text-xs font-semibold text-gray-400">
    {{ question }}
  </h2>
  <div>
    {{ answer }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  question: string;
  answer: string;
}>();
</script>
