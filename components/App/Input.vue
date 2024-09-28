<script setup lang="ts">
type Props = {
  modelValue: string;
  secondary?: boolean;
  tertiary?: boolean;
  placeholder?: string;
  type?: string;
  pattern?: string;
  buttonText?: string;
  buttonType?: "submit" | "button" | "reset";
  badge?: boolean;
  badgeChar?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  badge: false,
  badgeChar: '/'
})

const emits = defineEmits(["button-click", "update:modelValue"]);

const inputRef = ref<HTMLInputElement | null>(null);

const attrs = useAttrs();

const onButtonClick = () => {
  emits("button-click");
};

const updateValue = (value: string) => {
  emits("update:modelValue", value);
};

defineExpose({ focus: () => inputRef.value?.focus() });
</script>

<template>
  <div class="relative flex items-center">
    <input ref="inputRef" :value="modelValue" :placeholder="placeholder" :type="type" :pattern="pattern" v-bind="attrs"
      @input="updateValue(($event.target as HTMLInputElement).value)" :class="[
      'text-sm px-3 h-8 rounded-[10px] shadow-sm border flex-1 transition text-white bg-black',
      {
        'border-gray-600/90 outline-none ring-offset focus:ring-2 focus:ring-primary-500 focus:z-10 placeholder:font-normal':
          !secondary && !tertiary,
        'pr-8': badge,
      },
    ]" />
    <div v-if="badge"
      class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-gray-300 text-xs font-medium px-1.5 py-0.5 rounded">
      {{ badgeChar }}
    </div>
    <button v-if="buttonText" :class="[
      'text-sm px-3 h-8 rounded-r-[10px] shadow-sm border border-l-0 font-medium transition',
      {
        'border-gray-700/80 text-white outline-none ring-offset hover:ring-2 hover:ring-primary-500 focus:z-10':
          !secondary && !tertiary,
      },
    ]" :type="buttonType" @click="onButtonClick">
      {{ buttonText }}
    </button>
  </div>
</template>