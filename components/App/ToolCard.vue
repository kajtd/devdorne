<template>
    <NuxtLink :to="`/tools/${tool.slug}`" class="block h-full">
        <div
            class="bg-transparent border border-[#ffffff24] rounded-lg p-6 gap-2 transition-colors h-full flex flex-col">
            <h3 class="text-xl font-semibold text-white">{{ tool.title }}</h3>
            <p class="text-gray-400 mb-4 flex-grow">{{ tool.description }}</p>
            <div class="flex flex-wrap gap-2 mt-3">
                <AppBadge v-for="(tag, index) in tool.tags.slice(0, 2)" :key="tag" purple>
                    {{ tag }}
                </AppBadge>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { Tool } from '@/types/Tool';

const props = defineProps<{
    tool: Tool;
}>();

const colors = ['blue', 'purple', 'green', 'yellow'];

const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const tagColors = computed(() => {
    const shuffledColors = shuffleArray([...colors]);
    return props.tool.tags.map((_, index) => shuffledColors[index % colors.length]);
});
</script>