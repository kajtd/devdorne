<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-70 flex items-start justify-center z-50 pt-20">
        <div class="w-full max-w-3xl bg-black/90 rounded-lg shadow-lg overflow-hidden border border-gray-700">
            <div class="p-4">
                <div class="relative">
                    <AppIcon name="search-line"
                        class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input v-model="searchQuery" placeholder="Search tools..."
                        class="w-full border-gray-600/90 bg-transparent border text-white placeholder-gray-400 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/70"
                        @input="searchTools" ref="searchInput" @keydown.down.prevent.stop="navigateList('down')"
                        @keydown.up.prevent.stop="navigateList('up')" @keydown.enter.prevent="selectTool()" />
                </div>
            </div>
            <div class="max-h-[calc(100vh-200px)] overflow-y-auto">
                <template v-for="(group, groupName) in groupedTools" :key="groupName">
                    <div v-if="group.length > 0" class="px-4 py-2 text-sm text-gray-300 ">
                        {{ groupName }}
                    </div>
                    <ul>
                        <li v-for="(tool, index) in group" :key="tool.slug" :class="[
        'py-3 px-4 hover:bg-gray-800 cursor-pointer text-white flex items-center justify-between',
        { 'bg-gray-900/90': flattenedTools[selectedIndex] === tool }
    ]" @click="selectTool(tool)" @mouseover="selectedIndex = getFlatIndex(groupName, index)">
                            <div class="flex items-center">
                                <AppIcon name="collage-fill" class="mr-3 text-gray-400 w-5 h-6" />
                                {{ tool.title }}
                            </div>
                            <span class="text-gray-500 font-medium text-sm">{{ getReadableDate(tool.createdAt) }}</span>
                        </li>
                    </ul>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Tool } from '@/types/Tool';
import { getReadableDate } from '@/utils/util';

const props = defineProps<{ isOpen: boolean }>();

const emit = defineEmits(['close', 'select']);

const searchQuery = ref('');
const selectedIndex = ref(0);
const searchInput = ref<HTMLInputElement | null>(null);

const { data: tools } = await useAsyncData<Tool[]>('tools', () => queryContent
    <Tool>('tools').find());

const filteredTools = computed(() => {
    if (!tools.value) return [];
    return searchQuery.value
        ? tools.value.filter(tool =>
            tool.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
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
        else if (diffDays < 7) groups['Past Week'].push(tool); else if
            (diffDays < 30) groups['Past Month'].push(tool); else
            groups['Older'].push(tool);
    }); return groups;
}); const
    flattenedTools = computed(() => {
        return Object.values(groupedTools.value).flat();
    });

const getDaysSinceCreation = (createdAt: string) => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    return Math.floor((now.getTime() - createdDate.getTime()) /
        (1000 * 60 * 60 * 24));
};

const searchTools = () => {
    selectedIndex.value = 0;
};

const selectTool = (tool?: Tool) => {
    const selectedTool = tool ||
        flattenedTools.value[selectedIndex.value];
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