<template>
  <div :class="badgeClasses">
    <div v-if="innerText" class="bg-[#1F2228] text-white rounded-full font-medium text-sm px-2 my-1 mr-2">
      {{ innerText }}
    </div>
    <slot></slot>
    <AppIcon v-if="tailIcon" :name="tailIcon" class="w-4 h-4 mx-1" />
  </div>
</template>

<script setup lang="ts">
import type { IconName } from '@/types/iconNames';

type BadgeProps = {
  blue?: boolean;
  purple?: boolean;
  green?: boolean;
  yellow?: boolean;
  red?: boolean;
  pink?: boolean;
  innerText?: string;
  tailIcon?: IconName;
}

const props = defineProps<BadgeProps>();

const badgeClasses = computed(() => {
  return [
    "flex py-1 px-3 h-7 items-center justify-center text-sm border-[1.25px] rounded-full font-medium",
    {
      "bg-[#3368F04D] text-white border-[#ffffff24]": props.blue,
      "bg-[#ECDFFB] text-[#5314A3] border-0": props.purple,
      "bg-[#E3F9E5] text-[#137A1A] border-green-900/10": props.green,
      "bg-[#F9F8E3] text-[#9A8A13] border-yellow-900/10": props.yellow,
      "bg-[#F9E3E3] text-[#9A1313] border-red-900/10": props.red,
      "bg-[#F3E3F9] text-[#8A139A] border-pink-900/10": props.pink,
    },
  ];
});
</script>
