<template>
  <div class="space-y-10 pt-24 mx-auto flex flex-col items-center justify-center">
    <NuxtLink v-if="latestTool" :to="`/tools/${latestTool.slug}`">
      <AppBadge blue class="w-fit !px-2" inner-text="New" tail-icon="arrow-right">
        Check out the {{ latestTool.title }} review
      </AppBadge>
    </NuxtLink>
    <h1 class="text-5xl md:text-6xl max-w-3xl text-center font-medium">
      Empowering Developers to Build a Better Future
    </h1>
    <p class="text-lg md:text-xl text-gray-100/90 text-center max-w-2xl">
      Explore a curated directory of development tools that prioritize performance, inclusivity, and good practices.
    </p>
    <div class="flex flex-col items-center space-y-4">
      <form @submit.prevent="subscribeToNewsletter"
        class="flex flex-col md:flex-row justify-center gap-2 w-full max-w-md">
        <AppInput v-model="email" placeholder="Enter your email" type="email" class="flex-grow !h-10" />
        <AppButton type="submit" secondary class="!h-10">I want in!</AppButton>
      </form>
      <div class="flex items-center space-x-1 pt-10">
        <AppIcon name="star-fill" class="text-white w-5 h-5" v-for="_ in 5" :key="_" />
      </div>
      <p class="text-sm text-gray-400 text-center max-w-sm">
        Join other developers, freelances and agencies who are looking for better workflows.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNewsletterSubscription } from '@/composables/useNewsletterSubscription'
import type { Tool } from '@/types/Tool'

const {
  email,
  subscribeToNewsletter
} = useNewsletterSubscription()

const { data: latestTools } = await useAsyncData<Tool[]>('latestTool', () =>
  queryContent<Tool>('tools').sort({ createdAt: -1 }).limit(1).find()
)

const latestTool = computed(() => latestTools.value?.[0] || null)

console.log('Latest tool:', latestTool.value)
</script>