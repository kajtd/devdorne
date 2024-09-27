<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-70 flex items-start justify-center z-50 pt-20">
        <div class="w-full max-w-2xl bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div class="p-4">
                <AppInput v-model="searchQuery" placeholder="Search tools..." icon="ri:search-line" class="mb-4"
                    @input="searchTools" ref="searchInput" @keydown.down.prevent.stop="navigateList('down')"
                    @keydown.up.prevent.stop="navigateList('up')" @keydown.enter.prevent="selectTool()" />
            </div>
            <div class="max-h-[calc(100vh-200px)] overflow-y-auto">
                <template v-for="(group, groupName) in groupedTools" :key="groupName">
                    <div v-if="group.length > 0" class="px-4 py-2 text-sm text-gray-500 bg-gray-800">
                        {{ groupName }}
                    </div>
                    <ul>
                        <li v-for="(tool, index) in group" :key="tool.slug" :class="[
        'py-2 px-4 hover:bg-gray-700 cursor-pointer text-white',
        { 'bg-gray-700': flattenedTools[selectedIndex] === tool }
    ]" @click="selectTool(tool)" @mouseover="selectedIndex = getFlatIndex(groupName, index)">
                            {{ tool.title }}
                        </li>
                    </ul>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick, computed } from 'vue';
import type { Tool } from '@/types/Tool';

const props = defineProps<{
    isOpen: boolean
}>();

const emit = defineEmits(['close', 'select']);

const searchQuery = ref('');
const selectedIndex = ref(0);
const searchInput = ref<HTMLInputElement | null>(null);

const { data: tools } = await useAsyncData<Tool[]>('tools', () => queryContent<Tool>('tools').find());

const filteredTools = computed(() => {
    if (!tools.value) return [];
    return searchQuery.value
        ? tools.value.filter(tool => tool.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
        : tools.value;
});

const groupedTools = computed(() => {
    const groups: Record<string, Tool[]> = {
        'Today': [],
        'Past Week': [],
        'Past Month': [],
        'Older': []
    };

    filteredTools.value.forEach(tool => {
        const diffDays = getDaysSinceCreation(tool.createdAt);
        if (diffDays === 0) groups['Today'].push(tool);
        else if (diffDays < 7) groups['Past Week'].push(tool);
        else if (diffDays < 30) groups['Past Month'].push(tool);
        else groups['Older'].push(tool);
    });

    return groups;
});

const flattenedTools = computed(() => {
    return Object.values(groupedTools.value).flat();
});

const getDaysSinceCreation = (createdAt: string) => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    return Math.floor((now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24));
};

const searchTools = () => {
    selectedIndex.value = 0;
};

const selectTool = (tool?: Tool) => {
    const selectedTool = tool || flattenedTools.value[selectedIndex.value];
    if (selectedTool) {
        emit('select', selectedTool);
        emit('close');
        navigateTo(`/tools/${selectedTool.slug}`);
    }
};

const navigateList = (direction: 'up' | 'down') => {
    const totalItems = flattenedTools.value.length;
    if (totalItems === 0) return;

    selectedIndex.value = direction === 'down'
        ? (selectedIndex.value + 1) % totalItems
        : (selectedIndex.value - 1 + totalItems) % totalItems;
};

const getFlatIndex = (groupName: string, localIndex: number) => {
    let flatIndex = 0;
    for (const [name, group] of Object.entries(groupedTools.value)) {
        if (name === groupName) {
            return flatIndex + localIndex;
        }
        flatIndex += group.length;
    }
    return 0;
};

watch(() => props.isOpen, (newValue) => {
    if (newValue) {
        searchQuery.value = '';
        selectedIndex.value = 0;
        nextTick(() => {
            searchInput.value?.focus();
        });
    }
});

onMounted(searchTools);

watch(searchQuery, searchTools);
</script>