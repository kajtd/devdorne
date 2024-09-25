<template>
  <div class="space-y-10 pt-24 mx-auto flex flex-col items-center justify-center">
    <NuxtLink to="/challenges">
      <AppBadge blue class="w-fit !px-2" inner-text="Update" tail-icon="add-line">
        AI Coding Assistants
      </AppBadge>
    </NuxtLink>
    <h1 class="text-5xl md:text-6xl max-w-3xl text-center font-medium">
      Empowering Developers to Build a Better Future
    </h1>
    <p class="text-lg md:text-xl text-gray-100/90 text-center max-w-2xl">
      Explore a curated directory of development tools that prioritize performance, inclusivity, and good practices.
    </p>
    <form @submit.prevent="subscribeToNewsletter"
      class="flex flex-col md:flex-row justify-center gap-2 w-full max-w-md">
      <AppInput v-model="email" placeholder="Enter your email" type="email" button-text="Subscribe" button-type="submit"
        class="flex-grow" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { useNewsletterSubscription } from '@/composables/useNewsletterSubscription'

const {
  email,
  subscribeToNewsletter
} = useNewsletterSubscription()
</script>