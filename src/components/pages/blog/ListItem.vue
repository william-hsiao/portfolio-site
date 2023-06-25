<template>
  <div class="list-item">
    <div class="date">{{ formatDate(new Date(article.date)) }}</div>

    <NuxtLink :to="article._path">
      <h3>{{ article.title }}</h3>
    </NuxtLink>

    <div v-if="article.tags && article.tags.length > 0" class="tags-container">
      <Tag v-for="tag in article.tags">
        {{ tag }}
      </Tag>
    </div>

    <p>{{ article.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import Tag from '@/components/common/Tag.vue';
import { formatDate } from '@/utils/date';

interface MdParsedContent extends ParsedContent {
  date: string;
  tags?: string[];
}

defineProps<{
  article: MdParsedContent
}>()
</script>

<style lang="scss" scoped>
.list-item {
  margin: 2rem 0;

  .date {
    color: $color-background-base-contrast-sub;
    font-size: $font-size-s;
  }

  a {
    h3 {
      margin: 0;
      letter-spacing: 0.1rem;
      font-size: 1.5rem;
      margin-bottom: .5rem;
    }

    &:hover h3 {
      text-decoration: underline;
    }
  }

  .tags-container {
    display: inline-flex;
    gap: .25rem;
  }
}
</style>


