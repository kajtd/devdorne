<template>
  <NuxtLink to="/article">
    <article
      class="bg-white hover:shadow-[3px_3px_1px_black] transition-shadow border-[3px] border-black rounded-3xl flex flex-col-reverse xl:flex-row items-center p-4"
    >
      <div
        class="flex flex-col justify-between md:pl-5 pt-5 pb-2 md:mr-10 gap-5 md:gap-8"
      >
        <div class="flex items-center gap-2">
          <ArticleTag />
          <ArticleTag />
        </div>
        <h2 class="font-medium text-3xl md:text-4xl">
          Top Tips for Learning HTML: A Comprehensive Guide
        </h2>
        <p class="font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat...
        </p>
        <div
          class="flex items-center justify-between text-sm md:text-base"
        >
          <span class="font-medium">12 September 2023</span>
          <div class="flex gap-1 md:gap-3 items-center">
            <img
              src="https://www.kajetandomagala.com/content/images/size/w300/2023/04/kajetan_avatar2.jpg"
              alt="kajetan"
              class="md:w-12 w-10 h-10 md:h-12 rounded-full border-purple border-[3px]"
            />
            <span class="font-medium">Kajetan Domagała</span>
          </div>
        </div>
      </div>
      <img
        src="https://www.kajetandomagala.com/content/images/2023/07/sunset-neon-city.webp"
        class="h-full max-h-[500px] rounded-3xl w-full"
        alt=""
      />
    </article>
  </NuxtLink>
</template>
