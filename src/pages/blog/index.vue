<template>
  <h1>Blog</h1>

  <ContentList :query="query" v-slot="{ list }">
    <div v-for="article in list" :key="article._path" class="article">
      <div class="date">{{ formatDate(new Date(article.date)) }}</div>

      <NuxtLink :to="article._path">
        <h2>{{ article.title }}</h2>
      </NuxtLink>

      <div v-if="article.tags?.length > 0" class="tags-container">
        <Tag v-for="tag in article.tags">
          {{ tag }}
        </Tag>
      </div>

      <p>{{ article.description }}</p>
    </div>
  </ContentList>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import Tag from '@/components/common/Tag.vue';
import { formatDate } from '@/utils/date';

const query: QueryBuilderParams = { path: '/blog', sort: [{ date: -1 }] }
</script>

<style lang="scss" scoped>
.article {
  margin: 2rem 0;

  h2 {
    margin: 0.3rem 0 0.5rem;
    letter-spacing: 0.1rem;
    text-decoration: underline;
  }

  .date {
    color: $color-background-base-contrast-sub;
    font-size: $font-size-s;
  }

  .tags-container {
    display: flex;
    gap: .25rem;
  }
}
</style>


