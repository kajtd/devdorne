<template>
    <div class="relative">
        <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <div v-if="isOpen" v-click-outside="onClickOutside"
                class="absolute bg-white rounded-lg shadow-xs border border-gray-300/70 z-50 p-1"
                :style="{ top: `${top}px`, left: `${left}px` }">
                <slot></slot>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
type Props = {
    isOpen: boolean
    top: number
    left: number
}

defineProps<Props>()
const emit = defineEmits(['close'])

const onClickOutside = () => {
    emit('close')
}
</script>