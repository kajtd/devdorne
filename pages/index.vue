<script setup lang="ts">
import { computed } from 'vue';
import Article from '@/types/Article';

const { data } = await useAsyncData('articles', () =>
  queryContent<Article>('articles')
    .only([
      'title',
      '_path',
      'createdAt',
      'img',
      'alt',
      'excerpt',
      'readingTime',
      'tags',
    ])
    .find()
);

const tags = computed(() => [
  ...new Set(data.value?.map((article) => article.tags).flat()),
]);

const currentPage = ref(1);
const perPage = ref(6);
</script>

<template>
  <main class="flex-1 px-3 md:px-12 w-full max-w-7xl mx-auto">
    <section class="flex flex-col md:flex-row items-center xl:mb-24">
      <h1
        class="text-center md:text-left text-5xl lg:text-7xl leading-tight xl:leading-[1.2] font-medium max-w-lg mt-24"
      >
        Tips, Tutorials & Ideas.
      </h1>
      <WelcomeAnimation />
    </section>
    <section
      class="w-full grid grid-cols-1 xl:grid-cols-[5fr_2fr] py-12 gap-10"
    >
      <div class="flex flex-col gap-5">
        <ArticleCard
          v-for="article in data?.slice(
            (currentPage - 1) * perPage,
            (currentPage - 1) * perPage + perPage
          )"
          :key="article.title"
          :title="article.title"
          :url="article._path"
          :img="article.img"
          :alt="article.alt"
          :excerpt="article.excerpt"
          :createdAt="article.createdAt"
          :tags="article.tags"
        />
        <AppPagination
          v-model="currentPage"
          :total-items="data?.length"
          :per-page="perPage"
        />
      </div>
      <HomeSidebar :tags="tags" :total-posts="data?.length" />
    </section>
  </main>
</template>
