import { computed } from 'vue';
import { defineStore } from 'pinia';
import type Article from '~/types/Article';

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref<Article[]>();

  const tags = computed<string[]>(() => [
    ...new Set(articles.value?.map((article) => article.tags).flat()),
  ]);

  async function fetchArticles(): Promise<void> {
    const { data } = await useAsyncData<Article[]>('articles', () =>
      queryContent<Article>('articles').sort({ createdAt: -1 }).find()
    );
    if (data?.value) {
      articles.value = data.value;
    }
  }

  return { articles, tags, fetchArticles };
});
