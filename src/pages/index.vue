<template>
  <TitlePanel />
</template>

<script setup lang="ts">
import TitlePanel from '@/components/pages/top/TitlePanel.vue';
</script>


<style lang="scss">
body {
  margin: 0;
  font-family: $font-family-body;
}

h1,
h2,
h3,
h4 {
  font-family: $font-family-headers;
  letter-spacing: 0.25rem;
}
</style>