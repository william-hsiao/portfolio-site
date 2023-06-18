<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
body {
  margin: 0;
  font-family: $font-family-body;
  color: $color-background-base-contrast;
  background-color: $color-background-base;
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
