<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();

const siteTitle = 'William Hsiao';
useHead({
  titleTemplate: () => route.meta.title ? `${route.meta.title} - ${siteTitle}` : siteTitle,
  meta: [
    {
      property: 'og:title',
      content: () => route.meta.title ? `${route.meta.title} - ${siteTitle}` : siteTitle,
    },
    {
      property: 'og:image',
      content: `${config.public.domain}/ogp.png`,
    }
  ]
})
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: $font-family-body;
  color: $color-background-base-contrast;
  background-color: $color-background-base;
  line-height: 1.5;
}

#__nuxt {
  overflow: hidden;
}

h1,
h2,
h3,
h4 {
  font-family: $font-family-headers;
  letter-spacing: 0.1rem;
}

a {
  color: $color-background-base-contrast;
  text-decoration: none;
}
</style>
