<template>
  <div class="space-y-10 pt-24 mx-auto flex flex-col items-center justify-center">
    <NuxtLink to="/challenges">
      <AppBadge blue class="w-fit !px-2" inner-text="Update" tail-icon="add-line">
        Integration with Wordpress
      </AppBadge>
    </NuxtLink>
    <h1 class="text-5xl md:text-6xl max-w-3xl text-center font-medium">
      Everyting you need to write and monitor your content.
    </h1>
    <p class="text-lg md:text-xl text-gray-600/90 text-center max-w-2xl">
      Transform the way you write and optimize content with our minimalist, yet powerful text editor.
      Effortlessly create human-friendly articles, track performance, and get real-time keyword suggestions to boost
      your
      online presence.
    </p>
    <div class="flex flex-col md:flex-row justify-center gap-2 w-full">
      <AppButton to="login" class="!h-10 !px-4">
        Get started
      </AppButton>
      <AppButton to="signup" class="!h-10 !px-4" secondary>
        Learn More
      </AppButton>
    </div>
    <div class="rounded-xl border border-gray-300/70 shadow-lg px-3 pb-2 w-full max-w-7xl">
      <div class="h-10 w-full flex items-center justify-between">
        <div class="flex gap-2 items-center">
          <div class="w-3 h-3 rounded-full bg-gray-700/40"></div>
          <div class="w-3 h-3 rounded-full bg-gray-700/40 hidden md:block"></div>
          <div class="w-3 h-3 rounded-full bg-gray-700/40 hidden md:block"></div>
        </div>
        <div
          class="bg-[#0A0F290A] rounded-lg font-medium py-1 px-2 w-44 md:w-64 text-center border border-[#0A0F2914] text-xs text-[#0F132499] flex items-center justify-between">
          <!-- <Icon name="material-symbols:lock" class="text-gray-900/60 h-3 w-3" /> -->
          <span class="mr-auto ml-auto">https://writer.ai</span>
        </div>
        <!-- <Icon name="ic:baseline-plus" class="text-gray-900/60 h-5 w-5" /> -->
      </div>
      <img class="rounded-md border border-gray-200/80 shadow-sm w-full h-48 md:h-[400px] object-cover bg-gray-300"
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="" />
    </div>
  </div>
</template>
