<template>
  <div class="footer-panel">
    <BackgroundPanes class='bg' variant="home-footer" />

    <div class="content">
      {{ COPYRIGHT_STATEMENT }}
    </div>
  </div>
</template>
  
<script setup lang="ts">
import BackgroundPanes from '@/components/BackgroundPanes.vue';
import { COPYRIGHT_STATEMENT } from '@/constants';
</script>

<style lang="scss" scoped>
.footer-panel {
  box-sizing: border-box;

  position: relative;

  .bg {
    position: absolute;
  }

  .content {
    position: relative;
    padding: 15vh 0 5vh;
    color: $color-background-primary-contrast-sub;
    text-align: center;
    font-size: 1.5vh;
  }

}
</style>