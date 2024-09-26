<template>
  <div ref="headerRef" class="w-full z-50 px-4 md:px-0 my-4">
    <nav class="mx-auto max-w-7xl">
      <ul class="flex items-center py-2 px-3 text-sm font-medium text-gray-600/90">
        <li>
          <NuxtLink to="/">
            <img src="~/public/devdorne.svg" alt="devdorne"
              class="w-10 h-10 mr-4 transition-all duration-300 hover:ring-2 ring-primary-500 rounded-full hover:scale-125" />
          </NuxtLink>
        </li>
        <li class="ml-8 mr-6">
          <AppInput name="search" placeholder="Search" class="min-w-80" />
        </li>
        <li class="transition duration-200 hover:scale-105 hover:-translate-y-[2px] hidden sm:block">
          <NuxtLink to="how-we-test" class="relative px-2 text-blue-400 flex items-center">
            <AppIcon name="collage-fill" class="w-4 h-4 mr-2 " />
            <span>How We Test</span>
          </NuxtLink>
        </li>
        <li class="flex-1"></li>
        <li class="ml-3 hidden sm:block">
          <AppButton to="/submit-tool" secondary>Submit a Tool</AppButton>
        </li>
      </ul>
    </nav>
  </div>
</template>
