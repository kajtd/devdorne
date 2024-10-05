<template>
    <div class="rounded-lg shadow-xs shadow-white/90 border border-[#ffffff24] p-6">
        <h2 class="text-2xl font-semibold mb-4 text-white">{{ title }}</h2>
        <slot>
            <p class="text-gray-300">{{ content }}</p>
        </slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    content?: string;
}>();
</script>