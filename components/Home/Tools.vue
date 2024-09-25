<template>
    <div class="mx-auto px-4 py-8 flex items-center justify-center max-w-7xl">
        <!-- Tags column -->
        <div class="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 class="text-2xl font-bold mb-4">Tags</h2>
            <div class="space-y-2">
                <AppButton v-for="tag in tags" :key="tag" :class="{ 'bg-primary-500': selectedTag === tag }"
                    @click="selectTag(tag)">
                    {{ tag }}
                </AppButton>
            </div>
        </div>

        <!-- Tool cards -->
        <div class="w-full md:w-3/4 md:pl-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AppToolCard v-for="tool in filteredTools" :key="tool.slug" :tool="tool" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const { data: tools } = await useAsyncData('tools', () => queryContent('tools').find())

const tags = computed(() => {
    const allTags = tools.value?.flatMap(tool => tool.tags) || []
    return [...new Set(allTags)]
})

const selectedTag = ref('')

const selectTag = (tag: string) => {
    selectedTag.value = selectedTag.value === tag ? '' : tag
}

const filteredTools = computed(() => {
    if (!selectedTag.value) return tools.value
    return tools.value?.filter(tool => tool.tags.includes(selectedTag.value))
})
</script>