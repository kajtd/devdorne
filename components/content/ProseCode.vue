<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useClipboard } from '@vueuse/core';

defineProps<{
  code: string;
  language?: string;
  filename?: string;
  highlights?: number[];
}>();

const { copy, copied } = useClipboard();

const colors = ['bg-red-500', 'bg-yellow-500', 'bg-green-500'];
</script>

<template>
  <div
    class="code-wrapper relative my-4 overflow-hidden rounded bg-white border-black border-[3px]"
  >
    <header
      class="bg-slate-100 border-black border-b-[3px] w-full flex items-center justify-between py-2 px-4 z-50"
    >
      <div class="flex items-center gap-1 mr-auto flex-1">
        <div
          v-for="color in colors"
          :key="color"
          class="shadow-xl w-4 h-4 rounded-full border-[3px] border-black"
          :class="color"
        ></div>
      </div>
      <span
        v-if="filename"
        class="text-sm text-black border-[3px] border-black bg-white font-medium px-8 py-2 rounded-xl mr-4 flex justify-center"
      >
        {{ filename }}
      </span>
      <AppButton
        class="ml-auto flex justify-end p-2"
        @click="copy(code)"
      >
        <Icon v-if="copied" icon="akar-icons:check" color="black" />
        <Icon v-else icon="akar-icons:copy" color="black" />
      </AppButton>
    </header>
    <slot />
  </div>
</template>

<style scoped>
:slotted(pre) {
  @apply my-0 flex flex-1 overflow-x-auto p-4 leading-[1.625];
  counter-reset: lines;
}
:slotted(pre code p::before) {
  counter-increment: lines;
  content: counter(lines);
  @apply w-4 mr-6 inline-block text-left text-black;
}
</style>
