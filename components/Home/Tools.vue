<template>
    <div class="mx-auto px-4 py-8 flex flex-col items-center justify-center max-w-7xl">
        <h2 class="text-3xl font-bold mb-8 text-white">Tools</h2>
        <!-- Tags column -->
        <div class="w-full mb-8">
            <div class="flex flex-wrap gap-2 justify-center">
                <AppButton v-for="tag in tags" :key="tag" :class="[
                    'px-4 py-2 rounded-full text-sm',
                    selectedTag === tag ? 'bg-white text-black' : 'bg-[#2c2c2e] text-white'
                ]" @click="selectTag(tag)">
                    {{ tag }}
                </AppButton>
            </div>
        </div>

        <!-- Tool cards -->
        <div class="w-full">
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