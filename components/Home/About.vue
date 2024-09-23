<template>
  <div id="projects" class="mx-auto max-w-5xl w-full space-y-4 flex flex-col items-center py-8">
    <AppBadge blue class="w-fit">About </AppBadge>
    <h4 class="text-3xl md:text-4xl font-medium text-center">
      Write, Track, Repeat
    </h4>
    <p class="text-base md:text-lg text-gray-800/70 text-center pb-8 max-w-xl">
      Our platform is designed to empower writers, bloggers, and marketers with the tools they need to create
      high-quality, SEO-optimized content effortlessly.
    </p>
    <div
      class="p-4 md:p-6 space-y-6 rounded-2xl shadow-xs border border-gray-300/70 bg-white w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="" class="rounded-xl h-72 md:h-[450px]" />
      <div class="flex flex-col justify-between gap-4">
        <AppBadge green class="w-fit">Analytics</AppBadge>
        <h5 class="text-lg md:text-[20px] font-medium">
          Monitor your content
        </h5>

        <p class="text-sm md:text-base text-gray-800/70">
          From keyword suggestions to performance analytics, we
          provide everything you need to rank higher and reach your audience effectively.
        </p>
        <AppButton secondary iconClass="w-4 h-4" class="w-fit">
          Learn more
        </AppButton>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
      <div
        class="p-4 md:p-6 space-y-6 rounded-2xl shadow-xs max-w-2xl border border-gray-300/70 bg-white min-h-52 w-full">
        <h6 class="text-lg md:text-2xl font-medium">Real-Time Content Optimization
        </h6>

        <p class="text-sm md:text-base text-gray-800/70">
          Receive instant feedback on your content’s readability, sentiment, and structure for optimal SEO performance.
        </p>
        <AppButton ghost> Learn more </AppButton>
      </div>
      <div
        class="p-4 md:p-6 space-y-6 rounded-2xl shadow-xs max-w-2xl border border-gray-300/70 bg-white min-h-52 w-full">
        <h6 class="text-lg md:text-2xl font-medium">Collaboration Tools</h6>

        <p class="text-sm md:text-base text-gray-800/70">
          Work together with your team in real-time, with features like commenting, suggestions, and version control.
        </p>
        <AppButton ghost> Learn more </AppButton>
      </div>
      <div
        class="p-4 md:p-6 space-y-6 rounded-2xl shadow-xs max-w-2xl border border-gray-300/70 bg-white min-h-52 w-full">
        <h6 class="text-lg md:text-2xl font-medium">Easy Export and Import</h6>

        <p class="text-sm md:text-base text-gray-800/70">
          Seamlessly export your content as Markdown or HTML and import existing files to continue your work without
          hassle.
        </p>
        <AppButton ghost> Learn more </AppButton>
      </div>
    </div>
  </div>
</template>
