<template>
    <div class="mt-12 bg-gray-900 rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-semibold mb-6 text-white">Related Tools</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AppToolCard v-for="relatedTool in tools" :key="relatedTool.slug" :tool="relatedTool" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Tool } from '@/types/Tool';

defineProps<{
    tools: Tool[];
}>();
</script>