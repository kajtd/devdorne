<script setup lang="ts">
import type { IconName } from '~/types/iconNames';

type Props = {
  to?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  secondary?: boolean;
  tertiary?: boolean;
  ghost?: boolean;
  small?: boolean;
  leadIcon?: IconName;
  tailIcon?: IconName;
  leadIconClass?: string;
  tailIconClass?: string;
}

const props = defineProps<Props>();

const component = computed(() => {
  if (props.to) return resolveComponent("NuxtLink");
  return "button";
});
</script>

<template>
  <component :is="component" :to="to || ''" :disabled="disabled" :type="type || 'button'" :class="[
    'relative rounded-[10px] flex items-center justify-center cursor-pointer gap-2 overflow-hidden transition-all duration-200 text-sm font-medium px-3 h-8 ring-offset-background hover:ring-2 hover:ring-blue-500 text-white',
    {
      'bg-[#18181B]': !secondary && !tertiary && !ghost,
      'bg-white !text-black border shadow-sm': secondary,
      'bg-[#0A0F290A] !text-black': tertiary,
      'bg-transparent !text-gray-600/90': ghost,
    },
  ]">
    <AppIcon v-if="leadIcon" :name="leadIcon" class="w-4 h-4" :class="leadIconClass" />
    <slot></slot>
    <AppIcon v-if="tailIcon" :name="tailIcon" class="w-4 h-4" :class="tailIconClass" />
  </component>
</template>
