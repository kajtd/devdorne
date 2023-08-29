<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <div
    class="mt-5 p-3 md:p-8 rounded-lg max-w-2xl relative flex flex-col py-12 md:py-24 w-full"
  >
    <h3 class="text-4xl font-bold mb-2">
      Say Hello<span class="text-6xl">.</span>
    </h3>
    <form
      class="flex flex-col w-full relative"
      action="https://formsubmit.co/kajetan.domagala00@gmail.com"
      method="POST"
    >
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="Your email..."
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        class="p-3 min-h-[66px] border-[3px] border-black pl-6 w-full bg-white rounded-xl outline-none focus:shadow-[3px_3px_1px_black]"
      />
      <input
        type="name"
        id="name"
        name="name"
        required
        placeholder="Your name..."
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        class="p-3 min-h-[66px] border-[3px] border-black pl-6 w-full bg-white rounded-xl mt-4 outline-none focus:shadow-[3px_3px_1px_black]"
      />
      <textarea
        id="message"
        name="message"
        rows="8"
        required
        maxlength="500"
        placeholder="Your message..."
        class="p-3 min-h-[66px] border-[3px] border-black pl-6 w-full bg-white mt-4 rounded-xl outline-none focus:shadow-[3px_3px_1px_black]"
      ></textarea>
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" class="hidden" />
      <AppButton
        class="mt-5 h-16 text-xl font-medium ml-auto px-8 gap-1"
        type="submit"
      >
        <span class="pt-1">Contact</span>
        <Icon icon="mingcute:send-fill" class="w-8 h-8" />
      </AppButton>
    </form>
  </div>
</template>
