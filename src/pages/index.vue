<template>
  <main>
    <TitlePanel />
    <FooterPanel />
  </main>
</template>

<script setup lang="ts">
import TitlePanel from '@/components/pages/top/TitlePanel.vue';
import FooterPanel from '@/components/pages/top/FooterPanel.vue';
</script>


<style lang="scss" scoped>
main {
  overflow: hidden;
}
</style>
