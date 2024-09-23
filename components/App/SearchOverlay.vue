<template>
    <div v-if="isOpen" class="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50"
        @click.self="closeOverlay">
        <div class="w-full max-w-md p-6">
            <AppInput v-model="searchQuery" placeholder="Search articles..." icon="ri:search-line" class="mb-4"
                @input="searchArticles" />
            <ul class="max-h-60 overflow-y-auto bg-white rounded-lg shadow-lg">
                <li v-for="article in filteredArticles" :key="article.id"
                    class="py-2 px-4 hover:bg-gray-100 cursor-pointer" @click="selectArticle(article)">
                    {{ article.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Article } from '@/types/Article';

const props = defineProps<{
    isOpen: boolean
}>();

const emit = defineEmits(['close', 'select']);

const searchQuery = ref('');
const articles = ref<Article[]>([]);
const filteredArticles = ref<Article[]>([]);

const closeOverlay = () => emit('close');

const searchArticles = () => {
    filteredArticles.value = articles.value.filter(article =>
        article.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
};

const selectArticle = (article: Article) => {
    emit('select', article);
    emit('close');
};

watch(() => props.isOpen, (newValue) => {
    if (newValue) {
        fetchArticles();
    } else {
        searchQuery.value = '';
    }
});

const fetchArticles = async () => {
    const { data, error } = await useSupabaseClient()
        .from('articles')
        .select('id, title')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching articles:', error);
    } else {
        articles.value = data as Article[];
    }
};
</script>