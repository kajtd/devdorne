<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import type Link from './../types/Link';
import HamburgerMenuButton from './HamburgerMenuButton.vue';

const links = ref<Link[]>([
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
]);

const mobileNav = ref(false);

const toggleMobileNav = (): void => {
  mobileNav.value = !mobileNav.value;
  document.body.classList.toggle('fixed-bg');
};
</script>

<template>
  <header
    class="w-full px-3 flex items-center justify-between mx-auto md:px-12 py-6"
  >
    <AppLogo />
    <div class="flex space-x-2">
      <AppButton
        v-show="mobileNav"
        class="!flex w-10 h-10 lg:!hidden z-40"
      >
        <Icon icon="akar-icons:search" class="w-4 h-4" />
      </AppButton>
      <HamburgerMenuButton
        :checked="mobileNav"
        @toggle-mobile-nav="toggleMobileNav"
      />
    </div>
    <nav
      class="hidden bg-white text-2xl lg:flex items-center pl-12 pr-2 space-x-24 justify-between rounded-full border-[3px] border-black h-[120px] py-3"
    >
      <ul class="flex space-x-8 items-center">
        <li v-for="link in links" :key="link.name">
          <AppLink :url="link.url">{{ link.name }}</AppLink>
        </li>
      </ul>
      <AppButton class="w-24 h-24">
        <Icon icon="akar-icons:search" class="w-12 h-12" />
      </AppButton>
    </nav>
    <Transition name="mobile-nav">
      <nav
        v-show="mobileNav"
        class="shadow shadow-primary lg:hidden flex flex-col items-center justify-center h-full fixed bottom-0 left-0 p-8 w-full bg-white z-30"
      >
        <ul class="mb-auto mt-auto">
          <li v-for="link in links" :key="link.name" class="py-12">
            <button @click="toggleMobileNav">
              <NuxtLink
                :to="link.url"
                class="relative text-3xl"
                active-class="z-[1] after:z-[-1] after:bg-primary after:h-4 after:w-full after:absolute after:top-5 after:left-0"
              >
                {{ link.name }}
              </NuxtLink>
            </button>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.4s ease-in-out;
}
.mobile-nav-enter-from {
  transform: translateX(100%);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(100%);
}
</style>
