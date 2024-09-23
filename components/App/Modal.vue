<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-white rounded-2xl shadow-lg w-full max-w-md relative">
            <button @click="close"
                class="absolute right-4 top-4 w-6 h-6 bg-gray-100 rounded-full grid place-items-center hover:bg-gray-200 transition-colors">
                <AppIcon name="close-fill" class="w-4 h-4" />
            </button>
            <div class="p-6 space-y-6">
                <div class="space-y-2">
                    <h2 class="text-lg font-medium text-gray-900">{{ title }}</h2>
                    <p class="text-sm text-gray-600">{{ message }}</p>
                </div>
                <div class="flex space-x-3 mt-24">
                    <slot name="actions">
                        <AppButton @click="confirm" class="flex-1 max-w-44">{{ confirmText }}</AppButton>
                        <AppButton @click="close" secondary class="flex-1 max-w-44">{{ cancelText }}</AppButton>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface ModalProps {
    isOpen: boolean;
    title?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
}

const props = withDefaults(defineProps<ModalProps>(), {
    title: 'Confirmation',
    message: 'Are you sure you want to perform this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
});

const emit = defineEmits<{
    (e: 'close'): void;
    (e: 'confirm'): void;
}>();

const close = () => {
    emit('close');
};

const confirm = () => {
    emit('confirm');
    close();
};
</script>