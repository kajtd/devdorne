<template>
  <div class="container mx-auto px-4 py-8 max-w-6xl">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Articles</h1>
      <div class="flex items-center space-x-4">
        <ArticlesViewToggle v-model="isListView" />
      </div>
    </div>

    <div class="mb-6">
      <AppInput v-model="searchQuery" placeholder="Search articles..." class="w-full" icon="mdi:magnify" />
    </div>

    <ArticlesList v-if="isListView" :articles="filteredArticles" @edit="editArticle" @delete="openDeleteConfirmation" />
    <ArticlesGrid v-else :articles="filteredArticles" @delete="openDeleteConfirmation" />

    <ArticlesDeleteConfirmationModal :is-open="showDeleteConfirmation" @close="closeDeleteConfirmation"
      @confirm="confirmDelete" />
  </div>
</template>

<script setup lang="ts">
import type { Article } from '~/types/Article'

definePageMeta({
  layout: 'user'
})

const { data: articles } = await useFetch<Article[]>('/api/get-articles', {
  default: () => []
})

const isListView = ref(true)
const searchQuery = ref('')
const showDeleteConfirmation = ref(false)
const selectedArticle = ref<Article | null>(null)

const filteredArticles = computed<Article[]>(() => {
  if (!articles.value) return []
  return articles.value
    .filter(article => article.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    .map(article => ({
      ...article,
      clicks: 1,
      impressions: 2,
      ctr: 3
    }))
})

const editArticle = (id: string) => {
  navigateTo(`/editor?id=${id}`)
}

const openDeleteConfirmation = (article: Article) => {
  selectedArticle.value = article
  showDeleteConfirmation.value = true
}

const closeDeleteConfirmation = () => {
  showDeleteConfirmation.value = false
  selectedArticle.value = null
}

const confirmDelete = async () => {
  if (selectedArticle.value) {
    await deleteArticle(selectedArticle.value.id)
    closeDeleteConfirmation()
  }
}

const deleteArticle = async (id: number) => {
  try {
    const { data, error } = await useFetch('/api/delete-article', {
      method: 'POST',
      body: { id },
    })

    if (error.value) {
      console.error('Error deleting article:', error.value)
    } else {
      console.log('Article deleted successfully:', data.value)
      articles.value = articles.value?.filter(article => article.id !== id)
    }
  } catch (e) {
    console.error('Error deleting article:', e)
  }
}
</script>