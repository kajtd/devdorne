<template>
  <div class="lg:hidden inline-flex z-40">
    <input
      type="checkbox"
      id="nav-checkbox"
      @click="$emit('toggleMobileNav')"
      class="hidden nav-checkbox"
      :checked="checked"
    />
    <label
      class="hamburger bg-white border-black border-[3px] block relative w-[40px] h-[40px] z-50 rounded-full cursor-pointer"
      for="nav-checkbox"
    >
      <button
        aria-label="hamburger"
        class="lines block cursor-pointer"
      >
        <div class="line-wrapper absolute left-[10px] top-[17px] top">
          <div class="line h-[2px] w-[16px] rounded-[3px] top"></div>
        </div>
        <div
          class="line-wrapper absolute left-[10px] top-[17px] bottom"
        >
          <div
            class="line h-[2px] w-[16px] rounded-[3px] bottom"
          ></div>
        </div>
      </button>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  checked: boolean;
}>();
defineEmits(['toggleMobileNav']);
</script>

<style scoped>
.line-wrapper.top {
  transform: translateY(-3px) scaleX(0.88235);
}
.line-wrapper.bottom {
  transform: translateY(3px) scaleX(0.88235);
}
.nav-checkbox:checked + label .line-wrapper .line.bottom {
  transform: rotateZ(45deg);
}
.nav-checkbox:checked + label .line-wrapper .line.top {
  transform: rotateZ(-45deg);
}
.nav-checkbox:checked + label .line-wrapper.bottom {
  transform: none;
}
.nav-checkbox:checked + label .line-wrapper.top {
  transform: none;
}
.nav-checkbox:checked + label .line.bottom {
  transform: none;
  transition-delay: 0.1s;
}
.nav-checkbox:checked + label .line.top {
  transform: none;
  transition-delay: 0.1s;
}
.line-wrapper {
  transition: transform 0.2s ease-in-out 0.1s;
}
.nav-checkbox:checked + label .line-wrapper {
  transition-delay: 0s;
}
.line {
  transition: transform 0.2s ease-in-out;
  @apply bg-gray-900;
}
.lines {
  all: unset;
}
.lines * {
  pointer-events: none;
}
</style>
