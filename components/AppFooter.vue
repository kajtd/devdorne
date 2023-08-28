<script setup lang="ts">
import { ref } from 'vue';
import type Link from './../types/Link';

const links = ref<Link[]>([
  {
    name: 'Privacy Policy',
    url: '/privacy-policy',
  },
  {
    name: 'Terms Of Service',
    url: '/terms-of-service',
  },
  {
    name: 'Disclaimer',
    url: '/disclaimer',
  },
]);

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="border-t-[3px] border-black pt-8 pb-4 px-3 mt-auto">
    <div class="flex justify-between">
      <AppLogo />
      <nav>
        <ul class="flex space-x-8 items-center">
          <li v-for="link in links" :key="link.name">
            <NuxtLink
              :to="link.url"
              class="relative"
              active-class="z-[1] after:z-[-1] after:bg-primary after:h-3 after:w-full after:absolute after:top-4 after:left-0"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <span class="grid place-items-center">
      ©{{ currentYear }} devdorne. All rights reserved.
    </span>
  </footer>
</template>
