<template>
  <div class="mx-auto flex flex-col items-center space-y-4 py-8">
    <AppBadge blue class="w-24">Content</AppBadge>
    <h4 class="text-3xl md:text-4xl font-medium">Featured Articles</h4>
    <p class="text-base md:text-lg text-gray-800/70 text-center pb-8">
      I write on topics like SEO, productivity, SaaS products or development
      tools.<br />Here, you'll find a bunch of articles I did in a past.
    </p>
    <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
    <div class="flex items-center justify-center pt-6">
      <AppButton secondary iconClass="w-4 h-4" href="articles">
        See all articles
      </AppButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Article } from "@/types/Article";

const { data: articles } = await useAsyncData<Article[]>(`articles-home`, () =>
  queryContent("/articles").sort({ published: -1 }).limit(2).find()
);
</script>
