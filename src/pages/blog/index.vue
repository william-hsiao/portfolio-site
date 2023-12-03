<template>
  <div>
    <h1>Blog</h1>

    <ContentList :query="query" v-slot="{ list }">
      <ListItem v-for="article in list" :article="article" :key="article._path" />
    </ContentList>
  </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import ListItem from '@/components/pages/blog/ListItem.vue';

definePageMeta({
  title: 'Blog'
})

const query: QueryBuilderParams = { path: '/blog', sort: [{ date: -1 }] }
</script>
