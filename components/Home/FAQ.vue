<template>
  <div class="max-w-2xl w-full mx-auto">
    <AppBadge blue class="w-fit mx-auto px-3 mb-10"> F.A.Q </AppBadge>
    <h2 class="text-center text-4xl md:text-5xl font-medium">
      Frequently asked questions
    </h2>
    <p class="text-lg md:text-xl text-gray-600/90 text-center max-w-2xl mt-6 mb-20">
      We empower no-code developers by providing real-world challenges that
      enhance their development skills, and increase their marketability in the
      job market.
    </p>
    <div v-for="(faq, index) in faqs" :key="index" class="mb-3">
      <button
        class="w-full px-5 py-4 bg-white text-left focus:outline-none rounded-[10px] border-gray-300/80 shadow-xs border"
        :class="{ 'bg-transparent': faq.open }" @click="toggle(index)">
        <span class="flex justify-between items-center">
          <span class="text-lg font-medium">{{ faq.question }}</span>
          <span>
            <AppIcon v-if="faq.open" name="add-line" class="w-5 h-5 text-gray-600/90" />
            <AppIcon v-else name="add-line" class="w-5 h-5 text-gray-600/90" />
          </span>
        </span>
        <div v-if="faq.open" class="mt-1 text-gray-500/90">
          <p>{{ faq.answer }}</p>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Faq } from "@/types/Faq.ts";

const faqs = ref<Faq[]>([
  {
    question: "How does the AI-powered writing suggestion feature work?",
    answer: "Our AI analyzes your content and provides context-aware questions to guide your writing process, making it easier to develop comprehensive and engaging articles.",
    open: false,
  },
  {
    question: "How does the keyword suggestion feature work?",
    answer: "Our platform integrates with Google Search Console and uses advanced AI algorithms to analyze your content and provide relevant keyword suggestions that can enhance your article’s SEO.",
    open: false,
  },
  {
    question: "What types of content can I write with this tool?",
    answer: "You can write various types of content, including reviews, transactional articles, blog posts, and more. Our tool provides tailored suggestions based on the type of content you choose.",
    open: false,
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a free trial so you can experience the full capabilities of writer.ai before committing to a subscription plan.",
    open: false,
  },
]);

const toggle = (index: number) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>
