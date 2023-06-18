<template>
  <main>
    <TitlePanel />

    <Panel class="section">
      <h2>Hello!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Panel>

    <Panel class="section blog" background-variant="home-section">
      <h2>Blog</h2>
      <ContentList :query="query" v-slot="{ list }">
        <ListItem v-for="article in list" :article="article" :key="article._path" class="article" />
      </ContentList>

      <NuxtLink to="/blog">
        <Button>
          Read more
        </Button>
      </NuxtLink>
    </Panel>

    <Panel class="section">
      <h2>Past Work</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Panel>

    <Panel class="footer" backgroundVariant="home-footer">
      {{ COPYRIGHT_STATEMENT }}
    </Panel>
  </main>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
import Panel from '@/components/Panel.vue';
import Button from '@/components/common/Button.vue';
import TitlePanel from '@/components/pages/top/TitlePanel.vue';
import ListItem from '@/components/pages/blog/ListItem.vue';
import { COPYRIGHT_STATEMENT } from '@/constants';

const query: QueryBuilderParams = { path: '/blog', limit: 3, sort: [{ date: -1 }] }

definePageMeta({
  layout: false
})
</script>


<style lang="scss" scoped>
main {
  background-color: $color-white;
  overflow: hidden;


  &:deep() {
    h1 {
      font-size: 5vh;
    }

    h2 {
      font-size: 4vh;
    }

    h3 {
      font-size: 3vh;
    }

    p {
      font-size: 2vh;
    }
  }

  .section {
    &:deep(.content) {
      padding: 35vh 15vw;
      box-sizing: border-box;
    }
  }

  .blog:deep(.content) {
    padding-top: 20vh;
    padding-bottom: 30vh;

    color: $color-white;
    text-align: right;

    .article {
      h3 {
        color: $color-white;
      }

      p {
        font-size: 1.8vh;
      }

      .tag,
      .date {
        font-size: 1.5vh;
      }
    }
  }
}

.footer:deep(.content) {
  box-sizing: border-box;
  padding: 15vh 0 5vh;
  color: $color-background-primary-contrast-sub;
  text-align: center;
  font-size: 1.5vh;
}
</style>
