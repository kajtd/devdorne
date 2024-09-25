<template>
    <NuxtLink :to="`/tools/${tool.slug}`" class="block">
        <div class="bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-2">{{ tool.title }}</h3>
            <p class="text-gray-400 mb-4">{{ tool.description }}</p>
            <div class="flex flex-wrap gap-2">
                <AppBadge v-for="tag in tool.tags" :key="tag">{{ tag }}</AppBadge>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
    tool: {
        type: Object,
        required: true
    }
})
</script>