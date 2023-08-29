<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useClipboard } from '@vueuse/core';

defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
});

const { copy, copied } = useClipboard();
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
          class="shadow-xl bg-red-500 w-[0.8rem] h-[0.8rem] rounded-full"
        ></div>
        <div
          class="shadow-xl bg-yellow-500 w-[0.8rem] h-[0.8rem] rounded-full"
        ></div>
        <div
          class="shadow-xl bg-green-500 w-[0.8rem] h-[0.8rem] rounded-full"
        ></div>
      </div>
      <span
        class="text-sm text-black font-medium flex-1 flex justify-center"
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
:slotted(pre code) {
  @apply flex flex-col w-full;
}
:slotted(pre code .line) {
  @apply inline-table min-h-[1rem];
}
:slotted(pre code .line::before) {
  counter-increment: lines;
  content: counter(lines);
  @apply w-4 mr-6 inline-block text-left text-black;
}
:slotted(pre code .highlight) {
  @apply bg-red-500 block mr-[-1em] ml-[-1em] pr-[1em] pl-[0.75em] border-l-4 border-black;
}
</style>
