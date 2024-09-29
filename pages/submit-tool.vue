<template>
    <main class="flex flex-col items-center py-12">
        <div class="space-y-8 flex flex-col items-center p-6 w-full max-w-3xl">
            <div class="bg-black rounded-xl shadow-xs border border-white/15 min-h-96 w-full p-6 flex flex-col gap-2">
                <h1 class="text-2xl font-semibold text-white">Submit a Tool</h1>
                <p class="text-gray-400/90 max-w-sm">
                    Help us grow our collection of developer tools.
                </p>
                <p class="text-gray-400/90">
                    We encourage you to submit tools that you find valuable or have created yourself. By sharing these
                    resources, you're helping other developers discover new and useful tools that can enhance their
                    workflow and productivity.
                </p>
                <form @submit.prevent="submitTool" class="flex flex-col gap-4 mt-6">
                    <AppInput v-model="toolName" placeholder="Tool Name" required />
                    <AppInput v-model="toolWebsite" placeholder="https://example.com" type="url" />
                    <textarea v-model="description" placeholder="Description and Reason for Submitting" rows="4"
                        class="mt-1 block w-full text-sm text-white rounded-[10px] bg-black p-2 border border-gray-600/90 shadow-sm focus:border-blue-500 focus:ring-blue-500 "
                        required></textarea>
                    <AppButton type="submit" secondary :disabled="isSubmitting">
                        {{ isSubmitting ? 'Submitting...' : 'Submit Tool' }}
                    </AppButton>
                </form>
                <div class="text-center h-4 mt-6 border-t border-gray-700/70">
                    <p
                        class="text-xs font-medium text-center relative -top-[17px] p-2 inline-block text-gray-200/80 bg-black">
                        Thank you for contributing
                    </p>
                </div>
                <p class="text-sm text-gray-400/90 mt-4">
                    Want to explore our tools?
                    <NuxtLink to="/" class="font-medium text-blue-400">Browse Tools</NuxtLink>
                </p>
            </div>
        </div>
        <AppAlert v-if="alert.show" :type="alert.type" :title="alert.title" :description="alert.description" />
    </main>
</template>

<script setup lang="ts">
const toolName = ref('');
const toolWebsite = ref('');
const description = ref('');
const isSubmitting = ref(false);
const alert = ref({ show: false, type: '', title: '', description: '' });

const submitTool = async () => {
    isSubmitting.value = true;
    try {
        await $fetch('/api/submit-tool', {
            method: 'POST',
            body: {
                toolName: toolName.value,
                toolWebsite: toolWebsite.value,
                description: description.value,
            },
        });

        alert.value = {
            show: true,
            type: 'success',
            title: 'Tool Submitted',
            description: 'Thank you for submitting a tool. We will review it shortly.',
        };

        // Reset form
        toolName.value = '';
        toolWebsite.value = '';
        description.value = '';
    } catch (error) {
        alert.value = {
            show: true,
            type: 'error',
            title: 'Submission Failed',
            description: 'There was an error submitting the tool. Please try again.',
        };
    } finally {
        isSubmitting.value = false;
        setTimeout(() => {
            alert.value.show = false;
        }, 5000);
    }
};
</script>