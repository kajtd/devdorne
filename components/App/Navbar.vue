<template>
  <div ref="headerRef" class="w-full z-50 px-4 md:px-0 my-4">
    <nav class="mx-auto max-w-7xl">
      <ul class="flex items-center py-2 px-3 text-sm font-medium text-gray-600/90">
        <li>
          <NuxtLink to="/">
            <img src="/logo.svg" alt="devdorne"
              class="w-10 h-10 mr-4 transition-all duration-300 hover:ring-2 ring-blue-500 rounded-md hover:scale-110" />
          </NuxtLink>
        </li>
        <li class="hidden sm:block ml-8 mr-6 relative">
          <AppInput v-model="searchQuery" name="search" placeholder="Search..." class="min-w-80"
            @input="openSearchOverlay" :badge="true" :badgeChar="'/'" />
          <ul v-if="filteredTools.length > 0"
            class="absolute z-10 w-full mt-1 bg-black border border-gray-700 rounded-md shadow-lg">
            <li v-for="tool in filteredTools" :key="tool.slug" @click="selectTool(tool)"
              class="px-4 py-2 hover:bg-gray-800 cursor-pointer text-white">
              {{ tool.title }}
            </li>
          </ul>
        </li>
        <li class="transition duration-200 hover:scale-105 hover:-translate-y-[2px] ml-auto sm:ml-0">
          <NuxtLink to="/how-we-test" class="relative px-2 text-blue-400 flex items-center">
            <AppIcon name="collage-fill" class="w-4 h-4 mr-2 " />
            <span>How We Test</span>
          </NuxtLink>
        </li>
        <li class="flex-1 hidden sm:block"></li>
        <li class="ml-3">
          <AppButton to="/submit-tool" secondary>Submit a Tool</AppButton>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { Tool } from '@/types/Tool';

const searchQuery = ref('');

const filteredTools = ref<Tool[]>([]);

const { data: tools } = await useAsyncData<Tool[]>('tools', () => queryContent<Tool>('tools').find());

const searchTools = () => {
  if (searchQuery.value.length > 0 && tools.value) {
    filteredTools.value = tools.value.filter((tool: Tool) =>
      tool.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  } else {
    filteredTools.value = [];
  }
};

const selectTool = (tool: Tool) => {
  navigateTo(`/tools/${tool.slug}`);
  searchQuery.value = '';
  filteredTools.value = [];
};

watch(searchQuery, searchTools);
const showSearchOverlay = ref(false);

const openSearchOverlay = () => {
  showSearchOverlay.value = true;
};
</script>