<script setup lang="ts">
import { useArticlesStore } from '~/store/articles';

const articlesStore = useArticlesStore();
const { fetchArticles } = articlesStore;

fetchArticles();
</script>

<template>
  <AppNavbar />
  <NuxtPage />
  <AppFooter />
</template>
