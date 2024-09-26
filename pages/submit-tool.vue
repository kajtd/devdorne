<template>
    <div class="container mx-auto px-4 py-8 max-w-2xl">
        <h1 class="text-3xl font-bold mb-6">Submit a Tool</h1>
        <form class="space-y-4" @submit.prevent="submitTool">
            <div>
                <label for="toolName" class="block text-sm font-medium text-gray-100">Tool Name</label>
                <AppInput v-model="toolName" id="toolName" placeholder="Enter tool name" required />
            </div>
            <div>
                <label for="toolWebsite" class="block text-sm font-medium text-gray-100">Tool Website (optional)</label>
                <AppInput v-model="toolWebsite" id="toolWebsite" placeholder="https://example.com" type="url" />
            </div>
            <div>
                <label for="description" class="block text-sm font-medium text-gray-100">Description and Reason for
                    Submitting</label>
                <textarea v-model="description" id="description" rows="4"
                    class="mt-1 block w-full rounded-md bg-black border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    required></textarea>
            </div>
            <AppButton type="submit" secondary :disabled="isSubmitting">
                {{ isSubmitting ? 'Submitting...' : 'Submit Tool' }}
            </AppButton>
        </form>
        <AppAlert v-if="alert.show" :type="alert.type" :title="alert.title" :description="alert.description" />
    </div>
</template>

<script setup lang="ts">
const toolName = ref('');
const toolWebsite = ref('');
const description = ref('');
const isSubmitting = ref(false);
const alert = ref({ show: false, type: '', title: '', description: '' });

const submitTool = async () => {
    console.log('Submitting tool...');
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