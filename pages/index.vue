<template>
  <main class="flex-1 px-3 md:px-12 w-full max-w-7xl mx-auto">
    <section class="flex flex-col md:flex-row items-center xl:mb-24">
      <h1
        class="text-center md:text-left text-5xl lg:text-7xl leading-tight font-medium max-w-lg mt-24"
      >
        Tips, Tutorials & Ideas.
      </h1>
      <WelcomeAnimation />
    </section>
    <section
      class="w-full grid grid-cols-1 xl:grid-cols-[5fr_2fr] py-12 gap-10"
    >
      <div class="flex flex-col gap-5">
        <ArticleCard />
        <ArticleCard />
      </div>
      <HomeSidebar />
    </section>
  </main>
</template>
