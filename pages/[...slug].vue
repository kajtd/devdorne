<template>
  <main class="mt-24 mb-12 px-3 md:px-12">
    <article
      class="max-w-4xl border-[3px] border-black bg-white rounded-3xl p-4 md:p-8 xl:p-12 mx-auto w-full flex flex-col justify-center items-center"
    >
      <ContentDoc :path="slug">
        <template v-slot="{ doc }">
          <header class="w-full !max-w-none mb-16">
            <div class="max-w-[650px] w-full mx-auto mt-12">
              <h1 class="text-4xl md:text-5xl">{{ doc.title }}</h1>
              <div
                class="w-full flex items-center justify-between mt-10"
              >
                <span class="font-semibold">
                  {{ doc.readingTime }} min time
                </span>
                <span class="font-semibold">
                  {{ formatDate(doc.createdAt) }}
                </span>
              </div>
            </div>
            <img
              :src="`/images/${doc.img}`"
              :alt="doc.alt"
              class="rounded-lg object-contain w-full mt-12 max-h-[512px]"
            />
            <div class="flex items-center gap-2 mt-4">
              <ArticleTag
                v-for="(tag, index) in doc.tags"
                :key="index"
                :text="tag"
              />
            </div>
          </header>
          <ContentRenderer
            :value="doc"
            class="w-full article-content"
          />
          <footer
            class="mb-3 mt-8 xl:mt-24 w-full border-t-[3px] border-black"
          >
            <div class="flex items-center justify-end pt-5">
              <AppButton
                :href="editLink"
                target="_blank"
                class="flex !no-underline h-12 px-5 gap-6"
              >
                <span class="font-semibold pt-[4px]">
                  Edit on Github
                </span>
                <Icon
                  icon="akar-icons:github-fill"
                  class="text-2xl"
                />
              </AppButton>
            </div>
            <p class="mt-8 py-4">
              I hope you liked the article above. If you enjoyed
              reading it, please consider following my blog.
            </p>
            <p>
              Remember that you may always edit this page on
              <span class="font-semibold">GitHub</span> in case you
              find any mistakes. Also, feel free to contact me if you
              have any questions or suggestions.
            </p>
          </footer>
        </template>
        <template #not-found>
          <h1 class="text-xl lg:text-4xl">Document not found.</h1>
        </template>
      </ContentDoc>
    </article>
  </main>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { formatDate } from '~/utils/methods';

const slug = useRoute().params.slug.toString().replace(/,/g, '/');

const editLink =
  'https://github.com/kajtd/devdorne/edit/main/content/' +
  slug +
  '.md';
</script>
