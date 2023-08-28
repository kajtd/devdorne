<script setup lang="ts">
const colors = [
  'bg-red-500',
  'bg-purple-500',
  'bg-yellow-200',
  'bg-blue-500',
  'bg-pink-500',
  'bg-orange-500',
  'bg-green-500',
  'bg-[#A8FFD5]',
  'bg-[#A8BBFF]',
];
const tags = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Nuxt',
  'Vue',
  'UX',
];
</script>

<template>
  <div
    class="border-[3px] border-black rounded-full p-2 md:px-4 md:py-3 h-8 md:h-12 gap-5 flex justify-between"
  >
    <span class="md:text-base text-xs">{{
      tags[Math.floor(Math.random() * tags.length)]
    }}</span>
    <div
      class="border-[3px] border-black h-3 w-3 md:h-5 md:w-5 rounded-full"
      :class="colors[Math.floor(Math.random() * colors.length)]"
    ></div>
  </div>
</template>
