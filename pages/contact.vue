<script setup lang="ts">
useHead({
  title: 'devdorne.',
});
</script>

<template>
  <main class="flex-1 px-3 md:px-12 w-full max-w-7xl mx-auto">
    <section
      class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24 xl:justify-between my-12 xl:my-24"
    >
      <h1
        class="text-center md:text-left text-5xl lg:text-7xl leading-tight font-medium max-w-lg mt-24"
      >
        Contact
      </h1>
      <img
        src="./../assets/images/memphis-folder.png"
        alt="folder"
        class="h-48 xl:h-96"
      />
    </section>
    <section
      class="w-full flex flex-col xl:flex-row items-center justify-between xl:py-12 gap-10 mt-16"
    >
      <div class="flex relative mb-10 md:mb-0">
        <p class="font-medium text-lg xl:text-2xl max-w-xs">
          If there is anything you want to ask us about, feel free to
          use the contact form.
        </p>
        <img
          src="./../assets/images/memphis-arrow.png"
          alt="red right arrow"
          class="absolute h-24 rotate-90 top-24 left-5 xl:left-auto xl:top-auto xl:bottom-12 xl:-right-48 xl:h-40 xl:rotate-12"
        />
      </div>
      <ContactForm />
    </section>
  </main>
</template>
