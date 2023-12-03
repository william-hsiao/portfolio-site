<template>
  <div>
    <ContentRenderer :value="data!">
      <article v-if="data">
        <div class="publish-date">{{ formatDate(new Date(data.date)) }}</div>
        <h1>{{ data.title }}</h1>

        <div v-if="data.tags && data.tags.length > 0" class="tags-container">
          <Tag v-for="tag in data.tags">
            {{ tag }}
          </Tag>
        </div>

        <ContentRendererMarkdown :value="data" />
      </article>

      <template #empty>
        <div class="empty">
          <div>Page not found</div>
          <NuxtLink to="/blog">
            <Button>Return to blogs</Button>
          </NuxtLink>
        </div>
      </template>
    </ContentRenderer>
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import Tag from '@/components/common/Tag.vue';
import Button from '@/components/common/Button.vue';
import { formatDate } from '@/utils/date';

// TODO: Update HTML title

interface BlogParsedContent extends ParsedContent {
  date: string;
  tags?: string[];
}

const route = useRoute();
const { data } = await useAsyncData(`blog:${route.path}`, () => queryContent<BlogParsedContent>(route.path).findOne());
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

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}
</style>