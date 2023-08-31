<script setup lang="ts">
import { useArticlesStore } from '~/store/articles';

defineProps<{
  totalPosts: number | undefined;
}>();

const articlesStore = useArticlesStore();
const { tags } = articlesStore;
</script>

<template>
  <div class="flex flex-col gap-12">
    <div
      class="border-[3px] border-black rounded-3xl pb-4 max-h-[500px] bg-white"
    >
      <div class="mt-12 relative">
        <span
          class="bg-primary rounded-3xl border-[3px] border-black px-20 py-4 absolute -top-8 left-6 font-bold text-2xl"
        >
          Tags
        </span>
      </div>
      <div
        v-if="tags.length"
        class="border-t-[3px] border-black pt-16 px-6 flex flex-wrap gap-3 scroll h-[calc(100%-48px)]"
      >
        <ArticleTag
          v-for="(tag, index) in tags"
          :key="index"
          :text="tag"
        />
      </div>
    </div>
    <div class="border-[3px] border-black rounded-3xl h-64 bg-white">
      <div class="mt-12 relative">
        <span
          class="bg-primary rounded-3xl border-[3px] border-black px-12 py-4 absolute -top-8 left-6 font-bold text-2xl"
        >
          Total Posts
        </span>
      </div>
      <div
        class="text-7xl font-bold h-full w-full border-t-[3px] border-black grid place-items-center"
      >
        {{ totalPosts }}
      </div>
    </div>
  </div>
</template>
