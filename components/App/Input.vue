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
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text'
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
  <div class="flex items-center">
    <input ref="inputRef" :value="modelValue" :placeholder="placeholder" :type="type" :pattern="pattern" v-bind="attrs"
      @input="updateValue(($event.target as HTMLInputElement).value)" :class="[
      'text-sm px-3 h-8 rounded-l-[10px] shadow-sm border flex-1 transition text-white bg-black',
      {
        'border-gray-700/80 outline-none ring-offset focus:ring-2 focus:ring-primary-500 focus:z-10':
          !secondary && !tertiary,
        'rounded-[10px]': !buttonText,
      },
    ]" />
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