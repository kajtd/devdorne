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
  <footer
    class="border-t-[3px] border-black pt-8 pb-4 px-3 md:px-12 mt-auto bg-white"
  >
    <div class="flex justify-between">
      <AppLogo />
      <nav>
        <ul
          class="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center"
        >
          <li v-for="link in links" :key="link.name">
            <AppLink :url="link.url" class="after:top-2">{{
              link.name
            }}</AppLink>
          </li>
        </ul>
      </nav>
    </div>
    <span class="grid place-items-center mt-12 md:mt-0">
      ©{{ currentYear }} devdorne. All rights reserved.
    </span>
  </footer>
</template>
