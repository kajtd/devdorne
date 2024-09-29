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
    "flex py-1 px-3 h-7 items-center justify-center text-sm border-[1.25px] border-[#ffffff24] rounded-full font-medium",
    {
      "bg-[#3368F04D]": props.blue,
      "bg-[#873DE64D]": props.purple,
      "bg-[#26BD6C4D]": props.green,
      "bg-[#F48E2F40]": props.yellow,
      "bg-[#E6483D4D]": props.red,
    },
  ];
});
</script>
