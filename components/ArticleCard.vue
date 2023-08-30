<script setup lang="ts">
defineProps<{
  title: string;
  url: string;
  excerpt: string;
  createdAt: string;
  alt: string;
  img: string;
  tags: string[];
}>();
</script>

<template>
  <NuxtLink :to="url">
    <article
      class="max-w-4xl bg-white hover:shadow-[3px_3px_1px_black] transition-shadow border-[3px] border-black rounded-3xl flex flex-col-reverse xl:flex-row items-center p-4"
    >
      <div
        class="flex flex-col justify-between md:pl-5 pt-5 pb-2 md:mr-10 gap-5 md:gap-8"
      >
        <div class="flex items-center gap-2">
          <ArticleTag
            v-for="(tag, index) in tags"
            :key="index"
            :text="tag"
          />
        </div>
        <h2 class="font-medium text-3xl md:text-4xl">
          {{ title }}
        </h2>
        <p class="font-medium">
          {{ excerpt }}
        </p>
        <div
          class="flex items-center justify-between text-sm md:text-base"
        >
          <span class="font-medium">{{ createdAt }}</span>
          <div class="flex gap-1 md:gap-3 items-center">
            <img
              src="https://www.kajetandomagala.com/content/images/size/w300/2023/04/kajetan_avatar2.jpg"
              alt="kajetan"
              class="md:w-12 w-10 h-10 md:h-12 rounded-full border-purple border-[3px]"
            />
            <span class="font-medium">Kajetan Domagała</span>
          </div>
        </div>
      </div>
      <img
        :src="`/images/${img}`"
        class="h-full max-h-[500px] rounded-3xl w-full"
        :alt="alt"
      />
    </article>
  </NuxtLink>
</template>
