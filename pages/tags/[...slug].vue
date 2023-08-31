<template>
  <section class="mx-auto px-3">
    <div v-if="articles?.length" class="my-10">
      <h1
        class="text-xl sm:text-2xl md:text-4xl font-bold flex items-center justify-center"
      >
        <span class="mr-2">Posts tagged with</span>
        <ArticleTag :text="currentTag" />
      </h1>
      <div class="flex flex-col gap-5 mt-8">
        <ArticleCard
          v-for="article in articles"
          :key="article.title"
          :title="article.title"
          :url="article._path"
          :img="article.img"
          :alt="article.alt"
          :excerpt="article.excerpt"
          :createdAt="article.createdAt"
          :tags="article.tags"
        />
      </div>
    </div>
    <div
      v-else
      class="my-6 min-h-[60vh] flex items-center justify-center"
    >
      <h1
        class="text-xl sm:text-2xl md:text-4xl font-bold flex items-center justify-center"
      >
        It seems that there are no articles with this tag 🧐
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useArticlesStore } from '~/store/articles';
import { storeToRefs } from 'pinia';

const articlesStore = useArticlesStore();
const { articles } = storeToRefs(articlesStore);

const route = useRoute();

const currentTag = computed(() => route.params.slug[0]);
</script>
