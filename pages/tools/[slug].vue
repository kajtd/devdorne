<template>
  <div class="container mx-auto px-4 py-8 max-w-6xl">
    <div v-if="tool" class="bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 class="text-4xl font-bold mb-4 text-white">{{ tool.title }}</h1>
          <div class="flex flex-wrap gap-2 mb-4">
            <AppBadge v-for="tag in tool.tags" :key="tag">{{ tag }}</AppBadge>
          </div>
        </div>
        <div class="mt-4 md:mt-0">
          <AppButton v-if="tool.website" :href="tool.website" target="_blank" rel="noopener noreferrer">
            Visit Website
          </AppButton>
        </div>
      </div>
    </div>

    <div v-if="tool" class="mb-8">
      <div class="flex border-b border-gray-700">
        <button @click="activeTab = 'general'"
          :class="['px-4 py-2 font-medium', activeTab === 'general' ? 'text-primary-500 border-b-2 border-primary-500' : 'text-gray-400']">
          General Information
        </button>
        <button @click="activeTab = 'review'"
          :class="['px-4 py-2 font-medium', activeTab === 'review' ? 'text-primary-500 border-b-2 border-primary-500' : 'text-gray-400']">
          Detailed Review
        </button>
      </div>

      <div v-if="activeTab === 'general'" class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-2 space-y-6">
          <div class="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-semibold mb-4 text-white">Overview</h2>
            <p class="text-gray-300">{{ tool.description }}</p>
          </div>
          <div class="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
            <ul class="list-disc list-inside text-gray-300">
              <li v-for="feature in tool.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
          <div v-if="tool.pricing" class="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-semibold mb-4 text-white">Pricing</h2>
            <p class="text-gray-300">{{ tool.pricing }}</p>
          </div>
        </div>
        <div class="space-y-6">
          <div class="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-semibold mb-4 text-white">User Rating</h2>
            <div class="flex items-center">
              <span class="text-3xl font-bold text-primary-500 mr-2">{{ tool.rating }}</span>
              <div class="flex text-yellow-400">
                <AppIcon name="star-fill" class="w-6 h-6" v-for="i in 5" :key="i" />
              </div>
            </div>
          </div>
          <div class="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-semibold mb-4 text-white">Compatibility</h2>
            <ul class="list-disc list-inside text-gray-300">
              <li v-for="platform in tool.compatibility" :key="platform">{{ platform }}</li>
            </ul>
          </div>
          <div class="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-semibold mb-4 text-white">Last Updated</h2>
            <p class="text-gray-300">{{ formatDate(tool.lastUpdated) }}</p>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'review'" class="mt-8">
        <div class="prose dark:prose-invert max-w-none bg-gray-800 rounded-lg shadow-lg p-8">
          <ContentRenderer :value="tool" />
        </div>
      </div>
    </div>

    <div v-if="relatedTools" class="mt-12 bg-gray-800 rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-semibold mb-4 text-white">Related Tools</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AppToolCard v-for="relatedTool in relatedTools" :key="relatedTool.slug" :tool="relatedTool" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Tool } from '@/types/Tool'

const route = useRoute()
const activeTab = ref('general')

const { data: tool } = await useAsyncData<Tool | null>(`tool-${route.params.slug}`, () =>
  queryContent<Tool>('tools').where({ slug: route.params.slug }).findOne()
)

if (!tool.value) {
  throw createError({ statusCode: 404, message: 'Tool not found' })
}

// Fetch related tools based on tags
const { data: relatedTools } = await useAsyncData<Tool[] | null>(`related-tools-${route.params.slug}`, () =>
  queryContent<Tool>('tools')
    .where({ tags: { $contains: tool.value?.tags[0] } })
    .where({ slug: { $ne: tool.value?.slug } })
    .limit(3)
    .find()
)

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>