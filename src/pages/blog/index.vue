<template>
  <h1>Blog</h1>

  <ContentList :query="query" v-slot="{ list }">
    <ListItem v-for="article in list" :article="article" :key="article._path" />
  </ContentList>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import ListItem from '@/components/pages/blog/ListItem.vue';

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


