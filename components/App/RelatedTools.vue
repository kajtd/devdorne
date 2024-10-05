<template>
    <div class="mt-12 rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-semibold mb-6 text-white">Related Tools</h2>
        <div v-if="tools.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AppToolCard v-for="relatedTool in tools" :key="relatedTool.slug" :tool="relatedTool" />
        </div>
        <div v-else>
            <p class="text-gray-300">No related tools found.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Tool } from '@/types/Tool';

defineProps<{
    tools: Tool[];
}>();
</script>