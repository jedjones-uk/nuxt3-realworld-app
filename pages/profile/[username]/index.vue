<script setup lang="ts">
import type { User } from '~/lib/api/__generated__'
const  ARTICLES_PER_PAGE = 5;

defineProps<{ user?: User }>()
const route = useRoute()
const currentPage = computed(() => Number.parseInt(route.query?.page as string) || 1)

const offset = computed(() => (currentPage.value - 1) * ARTICLES_PER_PAGE)
const author = computed(() => route.params.username as string)

const { data, pending, error } = await useGetArticlesApi({ offset, author })
</script>

<template>
  <div v-if="pending">
    Loading articles...
  </div>
  <div v-else-if="data?.articles && data?.articles.length > 0">
    <UiArticlePreviewList :articles="data.articles" :articles-count="data.articlesCount" />
  </div>
  <div v-else-if="data?.articles && data?.articles.length === 0 && !pending">
    No articles are here... yet.
  </div>
  <div v-else-if="error">
    An error occurred while loading the articles: {{ error.message }}
  </div>
</template>
