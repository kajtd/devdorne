<script setup lang="ts">
import type AboutCard from './../types/AboutCard';

const cards = ref<AboutCard[]>([
  {
    imageName: 'memphis-monitor-retro',
    title: 'Tutorials',
    description: `At devdorne, we believe in the power of code. Whether you're looking to change careers, enhance your current skill set, or delve into some exciting project, our carefully crafted tutorials guide you every step of the way. We don't just teach syntax; we help you think like a programmer.`,
  },
  {
    imageName: 'memphis-laptop',
    title: 'Current Content',
    description: `Passionate about coding? So are we. That's why we continually update our content to reflect the rapidly evolving tech landscape. With devdorne, you can be sure that you're learning the most current techniques, tools, and best practices in the industry.`,
  },
  {
    imageName: 'memphis-window-1',
    title: 'Articles',
    description: `The journey of a thousand lines of code begins with a single keystroke. At devdorne, we're committed to making that journey as enriching as possible. From foundational articles for beginners to complex tutorials for seasoned pros, our content will equip you with the skills you need to excel in the programming world.`,
  },
]);

useHead({
  title: 'devdorne.',
});
</script>

<template>
  <main class="flex-1 px-3 md:px-12 w-full max-w-7xl mx-auto">
    <section
      class="flex flex-col md:flex-row items-center justify-center gap-24 xl:justify-between my-12 xl:my-24"
    >
      <h1
        class="text-center md:text-left text-5xl lg:text-7xl leading-tight font-medium max-w-lg mt-24"
      >
        About
      </h1>
      <img
        src="./../assets/images/memphis-window-1.png"
        alt="folder"
        class="h-48 xl:h-96"
      />
    </section>
    <section class="w-full py-12">
      <div
        class="flex flex-col text-center items-center justify-center font-medium gap-5"
      >
        <h2 class="text-3xl md:text-5xl">Welcome to devdorne</h2>
        <p class="text-base md:text-xl max-w-lg bg-white">
          Our mission is to provide high-quality tutorials and
          resources to help you become a proficient programmer. We
          offer articles ranging from beginner to advanced levels for
          coders of all skill levels.
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          <div
            v-for="card in cards"
            :key="card.title"
            class="flex flex-col items-center gap-8 border-[3px] border-black bg-white rounded-3xl px-6 py-10"
          >
            <img
              :src="`images/${card.imageName}.png`"
              alt=""
              class="h-32"
            />
            <h3 class="text-3xl">{{ card.title }}</h3>
            <p class="text-base">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
