<template>
  <div>
    <AppButton
      class="lg:w-24 lg:h-24 lg:ml-24 !flex w-10 h-10 z-40 lg:z-auto"
      ariaLabel="Search"
      @click="toggleSearchBar"
    >
      <Icon
        icon="akar-icons:search"
        class="w-4 h-4 lg:w-12 lg:h-12"
      />
    </AppButton>
    <Transition name="search-bar">
      <div
        v-show="searchBarActive"
        class="flex flex-col justify-between h-full w-full fixed top-0 left-0 px-4 py-48 md:px-12 bg-white z-50 search-bar"
      >
        <AppButton
          class="w-10 h-10 lg:w-24 lg:h-24 ml-24 top-4 right-4 absolute"
          ariaLabel="Close"
          @click="toggleSearchBar"
        >
          <Icon
            icon="iconamoon:close-bold"
            class="w-4 h-4 lg:w-12 lg:h-12"
          />
        </AppButton>
        <div class="relative w-full h-24 max-w-5xl mx-auto">
          <input
            id="search"
            v-model="searchQuery"
            class="search-input w-full text-lg md:text-3xl bg-transparent outline-none py-8 px-4 border-[3px] border-black placeholder:text-lg md:placeholder:text-2xl rounded-lg"
            placeholder="Search for articles..."
            type="text"
            autocomplete="off"
          />
        </div>
        <ul
          v-if="filteredArticles?.length"
          class="scroll flex flex-col items-center text-center py-12 bg-white justify-center h-96 max-w-5xl mx-auto w-full border-[3px] border-black rounded-lg"
        >
          <li
            v-for="article of filteredArticles"
            :key="article._id"
            class="w-full pt-6 cursor-pointer text-lg md:text-4xl font-semibold transition-colors flex justify-between items-center px-8 [&>button]:text-left"
          >
            <AppButton
              class="after:top-6 after:hidden lg:after:block hover:underline focus:!shadow-none focus:underline decoration-primary bg-white border-none hover:shadow-none"
              @click="handleLinkClick(article._path)"
            >
              {{ article.title }}
            </AppButton>
            <img
              :src="`/images/${article.img}`"
              class="rounded-3xl w-24"
              :alt="article.alt"
            />
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, watch } from 'vue';
import { useArticlesStore } from '~/store/articles';
import { storeToRefs } from 'pinia';
import type Article from '~/types/Article';
import { useRouter } from '#vue-router';

const router = useRouter();

const articlesStore = useArticlesStore();
const { articles } = storeToRefs(articlesStore);
const filteredArticles = ref<Article[]>();

const searchQuery = ref('');
const searchBarActive = ref(false);

function toggleSearchBar() {
  filteredArticles.value = [];
  searchBarActive.value = !searchBarActive.value;
  document.body.classList.toggle('modal');
  searchQuery.value = '';
}

function handleLinkClick(url?: string) {
  if (!url) return;
  toggleSearchBar();
  router.push({ path: url });
}

watch(searchQuery, () => {
  if (searchQuery.value === '') {
    filteredArticles.value = [];
    return;
  }
  filteredArticles.value = articles.value?.filter((article) =>
    article.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
  );
});
</script>

<style scoped>
.search-bar-enter-active,
.search-bar-leave-active {
  transition: all 0.4s ease-in-out;
}
.search-bar-enter-from {
  transform: translateY(100%);
}
.search-bar-enter-to {
  transform: translateY(0);
}
.search-bar-leave-to {
  transform: translateY(100%);
}
</style>
