<template>
  <footer class="bg-black text-white py-12 px-4 md:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start mb-12">
        <div class="mb-8 md:mb-0">
          <NuxtLink to="/">
            <img src="/logo.svg" alt="devdorne"
              class="w-10 h-10 transition-all duration-300 hover:ring-2 ring-blue-500 rounded-md hover:scale-110" />
          </NuxtLink>
        </div>
        <div class="flex flex-wrap gap-8">
          <div v-for="(linkGroup, index) in linkGroups" :key="index" class="min-w-[120px]">
            <h3 class="font-semibold mb-4">{{ linkGroup.title }}</h3>
            <ul class="space-y-2">
              <li v-for="link in linkGroup.links" :key="link.path">
                <NuxtLink :to="link.path" class="text-gray-400 hover:text-white transition-colors text-sm">
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            © {{ new Date().getFullYear() }} devdorne. All rights reserved.
          </p>
          <div class="flex space-x-4">
            <!-- <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <AppIcon name="github" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <AppIcon name="github" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <AppIcon name="github" class="w-6 h-6" />
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useNewsletterSubscription } from '@/composables/useNewsletterSubscription'

const { email, subscribeToNewsletter } = useNewsletterSubscription()

const linkGroups = [
  {
    title: 'Company',
    links: [
      { name: 'How we test', path: '/how-we-test' },
      { name: 'Submit a tool', path: '/submit-tool' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of use', path: '/terms-of-use' },
      { name: 'Disclaimer', path: '/disclaimer' },
    ]
  }
]
</script>