<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  totalItems?: number;
  perPage?: number;
  modelValue: number;
}

const props = withDefaults(defineProps<Props>(), {
  perPage: 6,
  totalItems: 0,
});

defineEmits(['update:modelValue']);

const numberOfButtons = computed(() =>
  Math.ceil(props.totalItems / props.perPage)
);
</script>

<template>
  <div class="flex items-center gap-4 mx-auto mt-8">
    <AppButton
      v-for="button in numberOfButtons"
      :key="button"
      class="bg-white w-20 h-20 text-2xl"
      :class="{
        '!bg-primary shadow-[3px_3px_1px_black]':
          modelValue === button,
      }"
      @click="$emit('update:modelValue', button)"
    >
      {{ button }}
    </AppButton>
  </div>
</template>
