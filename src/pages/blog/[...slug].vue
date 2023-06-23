<template>
  <ContentRenderer :value="data!">
    <article>
      <div class="publish-date">{{ formatDate(new Date(data!.date)) }}</div>
      <h1>{{ data!.title }}</h1>

      <div v-if="data!.tags && data!.tags.length > 0" class="tags-container">
        <Tag v-for="tag in data!.tags">
          {{ tag }}
        </Tag>
      </div>

      <ContentRendererMarkdown :value="data!" />
    </article>
  </ContentRenderer>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import Tag from '@/components/common/Tag.vue';
import { formatDate } from '@/utils/date';

interface BlogParsedContent extends ParsedContent {
  date: string;
  tags?: string[];
}

const route = useRoute()
const { data } = await useAsyncData(`blog:${route.path}`, () => queryContent<BlogParsedContent>(route.path).findOne())
</script>

<style lang="scss" scoped>
article {
  .publish-date {
    color: $color-background-base-contrast-sub;
    font-size: $font-size-s;
  }

  h1 {
    font-size: 2rem;
    margin-top: .1rem;
    margin-bottom: 1rem;
  }

  .tags-container {
    display: inline-flex;
    gap: .25rem;
    margin: 1rem 0;
  }

  &:deep() {
    p {
      text-indent: 2rem;
    }
  }
}
</style>