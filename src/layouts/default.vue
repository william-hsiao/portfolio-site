<template>
  <div class="layout">
    <header>
      <Panel background-variant="header">
        <div class="banner">
          <NuxtLink to="/">
            <img src="@/assets/images/logo.svg" class="logo" />
          </NuxtLink>

          <img
            src="@/assets/images/menu.svg"
            class="menu"
            @click="toggleExapndMenu"
          />
        </div>

        <div class="expandable" :class="{ expand: expandMenu }">
          <div class="links">
            <NuxtLink to="/blog">Blog</NuxtLink>
            <NuxtLink to="/career">Career</NuxtLink>
          </div>

          <div class="spacer" />

          <Socials />
        </div>
      </Panel>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <Panel background-variant="footer">
        {{ COPYRIGHT_STATEMENT }}
      </Panel>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Panel from '@/components/Panel.vue';
import Socials from '@/components/pages/top/Socials.vue';
import { COPYRIGHT_STATEMENT } from '@/constants';

const expandMenu = ref(false);
const toggleExapndMenu = () => {
  expandMenu.value = !expandMenu.value;
};
</script>

<style lang="scss" scoped>
.layout {
  background-color: $color-background-base;
}

header {
  margin-bottom: 5rem;

  &:deep(.content) {
    padding: 1.5rem 5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .banner {
      .logo {
        height: 3rem;
      }
      .menu {
        cursor: pointer;
        display: none;
        height: 2rem;
      }
    }

    .expandable {
      display: flex;
      flex-grow: 1;

      .links {
        margin-left: 2rem;

        a {
          box-sizing: border-box;
          color: $color-background-primary-contrast;
          font-size: 1rem;
          text-decoration: none;
          text-transform: uppercase;
          font-family: $font-family-headers;
          letter-spacing: 0.15rem;
          padding: 0.5rem 0.5rem;
          border-bottom: 1px solid $color-transparent;
          transition: border-color 0.2s ease;

          &:hover {
            border-color: $color-background-primary-contrast-sub;
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
}
@media (max-width: 800px) {
  header {
    &:deep(.content) {
      flex-direction: column;

      .banner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .menu {
          display: block;
        }
      }

      .expandable {
        flex-direction: column;
        max-height: 0;
        transition: max-height 0.5s ease;
        overflow: hidden;

        &.expand {
          max-height: 80vh;
        }

        .links {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 1rem 0;

          a:not(:last-child) {
            margin-right: 0;
          }
        }
      }
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
