<script setup lang="ts">
const props = defineProps<{
  text: string;
  noLink?: boolean;
}>();

const tags = ref<Record<string, string>>({
  JavaScript: 'bg-[#A8BBFF]',
  HTML: 'bg-[#A8FFD5]',
  CSS: 'bg-yellow-500',
  UI: 'bg-orange-500',
  UX: 'bg-green-500',
  TypeScript: 'bg-red-500',
  Nuxt: 'bg-purple-500',
  Git: 'bg-[#FF5E5E]',
  Npm: 'bg-[#FFA8EC]',
});

const computedComponent = computed(() =>
  props.noLink ? 'div' : resolveComponent('NuxtLink')
);
</script>

<template>
  <component
    :is="computedComponent"
    :to="`/tags/${text}`"
    class="border-[3px] border-black rounded-full p-2 md:px-4 md:py-3 h-8 md:h-12 gap-5 flex justify-between"
  >
    <span class="md:text-base text-xs font-medium">
      {{ text }}
    </span>
    <div
      class="border-[3px] border-black h-3 w-3 md:h-5 md:w-5 rounded-full"
      :class="tags[text]"
    ></div>
  </component>
</template>
