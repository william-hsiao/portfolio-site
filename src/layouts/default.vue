<template>
  <header>
    <BackgroundPanes class="bg" variant="header" />

    <div class="content">
      <NuxtLink to="/">
        <img src="@/assets/images/logo.svg" class="logo" />
      </NuxtLink>

      <div class="links">
        <NuxtLink to="/blog">
          Blog
        </NuxtLink>
      </div>
    </div>

  </header>

  <main>
    <slot />
  </main>

  <footer>
    <BackgroundPanes class="bg" variant="footer" />

    <div class="content">
      {{ COPYRIGHT_STATEMENT }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import BackgroundPanes from '@/components/BackgroundPanes.vue';
import { COPYRIGHT_STATEMENT } from '@/constants';
</script>

<style lang="scss" scoped>
header {
  position: relative;
  margin-bottom: 5rem;

  .bg {
    position: absolute;
  }

  .content {
    position: relative;
    padding: 1.5rem 5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: 3rem;
    }

    .links {
      a {
        color: $color-background-primary-contrast;
        font-size: 1rem;
        text-decoration: none;
        text-transform: uppercase;
        font-family: $font-family-headers;
        letter-spacing: 0.25rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

main {
  width: 85%;
  max-width: 1000px;
  margin: 0 auto;
}

footer {
  position: relative;
  margin-top: 5rem;

  .bg {
    position: absolute;
  }

  .content {
    position: relative;
    padding: 1.5rem 5rem;
    box-sizing: border-box;

    color: $color-background-primary-contrast-sub;
    text-align: center;
    font-size: $font-size-s;
  }
}
</style>