<template>
  <div class="container mx-auto px-4 py-12 max-w-6xl">
    <div v-if="tool" class="border border-[#ffffff24] rounded-lg shadow-lg p-8 mb-12">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div class="space-y-8 pb-6">
          <h1 class="text-4xl md:text-5xl font-bold  text-white">{{ tool.title }}</h1>
          <p class="text-gray-300">{{ tool.description }}</p>
          <div class="flex flex-wrap gap-2">
            <AppBadge v-for="tag in tool.tags" :key="tag" class="text-sm" blue>{{ tag }}</AppBadge>
          </div>
        </div>
        <AppButton v-if="tool.website" :href="tool.website" secondary target="_blank" rel="noopener noreferrer"
          class="mt-4 md:mt-0">
          Visit Website
        </AppButton>
      </div>
    </div>

    <div v-if="tool" class="mb-12">
      <div class="flex border-b border-white/15 mb-8">
        <button v-for="tab in ['general', 'review']" :key="tab" @click="activeTab = tab" :class="['px-6 py-3 font-medium transition-colors duration-200',
      activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400 hover:text-gray-200']">
          {{ tab === 'general' ? 'General Information' : 'Detailed Review' }}
        </button>
      </div>

      <div v-if="activeTab === 'general'" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-2 space-y-8">
          <AppInfoCard title="Key Features">
            <ul class="list-disc list-inside text-gray-300">
              <li v-for="feature in tool.features" :key="feature">{{ feature }}</li>
            </ul>
          </AppInfoCard>
          <AppInfoCard v-if="tool.pricing" title="Pricing" :content="tool.pricing" />
        </div>
        <div class="space-y-8">
          <AppRatingCard :rating="tool.rating" />
          <AppInfoCard title="Compatibility">
            <ul class="list-disc list-inside text-gray-300">
              <li v-for="platform in tool.compatibility" :key="platform">{{ platform }}</li>
            </ul>
          </AppInfoCard>
          <AppInfoCard title="Last Updated" :content="formatDate(tool.lastUpdated)" />
        </div>
      </div>

      <div v-else-if="activeTab === 'review'" class="mt-8">
        <div class="prose dark:prose-invert max-w-none bg-black/ rounded-lg shadow-lg p-8">
          <ContentRenderer :value="tool" />
        </div>
      </div>
    </div>

    <AppRelatedTools v-if="relatedTools" :tools="relatedTools" />
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