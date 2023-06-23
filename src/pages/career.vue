<template>
  <h1>Career</h1>

  <p>
    These are some of the key projects that I have worked on throughout my career. I've learnt an incredible amount from
    each of them and I hope I can provide you with some value by sharing my career path.
  </p>


  <ContentRenderer v-for="article in data" :value="article" :key="article._path">
    <section>
      <h3>{{ article.title }}</h3>

      <div class="subtitle">
        <div>
          {{ article.date }} @ {{ article.company }}
        </div>
        <div>
          {{ article.role }}
        </div>
      </div>

      <div v-if="article.tags && article.tags.length > 0" class="tags-container">
        <Tag v-for="tag in article.tags" :key="tag">
          {{ tag }}
        </Tag>
      </div>

      <ContentRendererMarkdown :value="article" />
    </section>
  </ContentRenderer>
</template>

<script setup lang="ts">
import Tag from '@/components/common/Tag.vue';

const { data } = await useAsyncData('career-md', () => queryContent('/career').find())
</script>

<style lang="scss" scoped>
section {
  margin: 3rem 0;

  h3 {
    margin: .5rem 0;
  }

  .subtitle {
    font-size: $font-size-s;
    color: $color-background-base-contrast-sub;
    margin-bottom: .5rem;
  }

  .tags-container {
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;
  }

  &:deep(blockquote) {
    margin: 0;
    color: $color-background-base-contrast-sub;
    font-style: italic;
  }

  &:deep(a) {
    text-decoration: underline;
  }
}
</style>


