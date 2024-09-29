<template>
    <div class="bg-black/70 rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 text-white">User Rating</h2>
        <div class="flex items-center">
            <span class="text-4xl font-bold text-blue-500 mr-3">{{ rating }}</span>
            <div class="flex text-yellow-500">
                <AppIcon name="star-fill" class="w-6 h-6" v-for="i in 5" :key="i" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    rating: number;
}>();
</script>