<template>
  <div class="footer-panel">
    <BackgroundPanes class='bg' variant="home-footer" />

    <div class="content">
    </div>
  </div>
</template>
  
<script setup lang="ts">
import BackgroundPanes from '@/components/BackgroundPanes.vue';
</script>

<style lang="scss" scoped>
.footer-panel {
  box-sizing: border-box;
  height: 20vh;

  position: relative;

  .bg {
    position: absolute;
  }

}
</style>