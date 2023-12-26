<template>
  <main>
    <TitlePanel />

    <Panel class="section intro">
      <h2>Hello!</h2>
      <p>
        Welcome to my corner of the internet! I am a Full-stack Web Engineer
        based in Tokyo. I consider myself more of a generalist, working my way
        through the frontend, backend and infrastructure. That said, my personal
        preference has always leaned toward the frontend where I started my
        career. When developing, I like to be involved in every step, from
        deciding on specs, designing, implementation, testing and all the way to
        release. Aside from coding, I've had experiences leading teams, managing
        multiple projects and even dipping my hands into UI/UX design.
      </p>
      <p>Got a project in mind? Have a question? Let's talk!</p>
    </Panel>

    <Panel class="section blog" background-variant="home-section">
      <h2>Blog</h2>
      <ContentList v-slot="{ list }" :query="query">
        <ListItem
          v-for="article in list"
          :key="article._path"
          :article="article"
          class="article"
        />
      </ContentList>

      <NuxtLink to="/blog">
        <Button variant="white"> Read more </Button>
      </NuxtLink>
    </Panel>

    <Panel class="section career">
      <h2>Past Work & Experience</h2>

      <p>
        Some of the projects I've been a part of include a 3rd party JavaScript
        SDK, vector-based search engine and ML-integrated image processing
        pipeline. You can find the details on the stack we used and my role in
        each project through the link below.
      </p>

      <p>
        Here are some of the technologies/tools that I have used and are
        comfortable with on a production level:
      </p>
      <div class="tags-container">
        <Tag
          v-for="tag in [
            'Vue.js / Nuxt.js',
            'React / Next.js',
            'Node.js / Express & NestJS',
            'TypeScript',
            'SASS',
            'Python / Django & FastAPI',
            'MySQL',
            'Postgresql',
            'Elasticsearch',
            'AWS',
            'Terraform',
            'Kubernetes',
            'Figma',
          ]"
          :key="tag"
        >
          {{ tag }}
        </Tag>
      </div>

      <NuxtLink to="/career">
        <Button> View career </Button>
      </NuxtLink>
    </Panel>

    <Panel class="footer" background-variant="home-footer">
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
import Tag from '@/components/common/Tag.vue';
import { COPYRIGHT_STATEMENT } from '@/constants';

const query: QueryBuilderParams = {
  path: '/blog',
  limit: 2,
  sort: [{ date: -1 }],
};

definePageMeta({
  layout: false,
});
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

    button {
      padding: 1vh 2vw;
      font-size: 1.75vh;
    }
  }

  .section {
    &:deep(.content) {
      padding: 35vh 15vw;
      box-sizing: border-box;
    }
  }

  .blog:deep(.content) {
    padding-top: 25vh;
    padding-bottom: 25vh;

    color: $color-white;
    text-align: right;

    .article {
      h3 {
        color: $color-white;
      }

      p {
        font-size: 1.8vh;
      }

      .date {
        font-size: 1.5vh;
      }
    }
  }

  .blog:deep(.content) .tags-container,
  .career .tags-container {
    gap: 0.5vw;

    .tag {
      padding: 0.25vh 0.75vw;
      font-size: 1.5vh;
    }
  }

  .career .tags-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5vh;
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
