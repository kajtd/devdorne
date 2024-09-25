<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-4">{{ tool.title }}</h1>
    <div class="flex flex-wrap gap-2 mb-4">
      <AppBadge v-for="tag in tool.tags" :key="tag">{{ tag }}</AppBadge>
    </div>
    <div class="prose dark:prose-invert max-w-none">
      <ContentRenderer :value="tool" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: tool } = await useAsyncData(`tool-${route.params.slug}`, () => queryContent('tools').where({ slug: route.params.slug }).findOne())

if (!tool.value) {
  throw createError({ statusCode: 404, message: 'Tool not found' })
}
</script>