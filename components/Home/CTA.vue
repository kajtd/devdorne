<template>
  <div
    class="flex flex-col sm:items-center justify-center gap-6 bg-black max-w-7xl w-full rounded-3xl border border-[#ffffff24] shadow-xs md:min-h-96 sm:text-center p-4 py-8">
    <p class="text-2xl sm:text-4xl md:text-5xl font-medium">Any questions?</p>
    <p class="text-gray-100/90 text-base sm:text-lg md:text-xl">
      Reach out to our team at
      <a href="#" class="text-blue-400">support@devdorne.com</a>. We’re
      here to help you succeed.
    </p>

    <div class="flex space-x-2">
      <AppButton to="signup" class="!h-10 !px-4" secondary>
        Contact Us
      </AppButton>
    </div>
  </div>
</template>
