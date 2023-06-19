<template>
  <header>
    <Panel backgroundVariant="header">
      <NuxtLink to="/">
        <img src="@/assets/images/logo.svg" class="logo" />
      </NuxtLink>

      <div class="links">
        <NuxtLink to="/blog">
          Blog
        </NuxtLink>

        <NuxtLink to="/career">
          Career
        </NuxtLink>
      </div>

      <div class="spacer" />

      <Socials />
    </Panel>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <Panel backgroundVariant="footer">

      {{ COPYRIGHT_STATEMENT }}
    </Panel>
  </footer>
</template>

<script setup lang="ts">
import Panel from '@/components/Panel.vue';
import Socials from '@/components/pages/top/Socials.vue';
import { COPYRIGHT_STATEMENT } from '@/constants';
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 5rem;

  &:deep(.content) {
    padding: 1.5rem 5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: 3rem;
    }

    .links {
      margin-left: 2rem;

      a {
        color: $color-background-primary-contrast;
        font-size: 1rem;
        text-decoration: none;
        text-transform: uppercase;
        font-family: $font-family-headers;
        letter-spacing: 0.15rem;

        &:hover {
          text-decoration: underline;
        }

        &:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }

    .spacer {
      flex-grow: 1;
    }
  }
}

main {
  width: 85%;
  max-width: 1000px;
  min-height: calc(100vh - 20rem);
  margin: 0 auto;
}

footer {
  margin-top: 5rem;

  &:deep(.content) {
    padding: 1.5rem 5rem;
    box-sizing: border-box;

    color: $color-background-primary-contrast-sub;
    text-align: center;
    font-size: $font-size-s;
  }
}
</style>