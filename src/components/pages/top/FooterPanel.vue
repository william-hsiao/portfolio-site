<template>
  <div class="footer-panel">
    <div class="bg-main" />
    <div class="bg-sub" />

    <div class="content">
    </div>
  </div>
</template>
  
<script setup lang="ts">
</script>
  
  
<style lang="scss" scoped>
$transition-time: .35s;

.footer-panel {
  position: relative;
  isolation: isolate;
  overflow: visible;
  box-sizing: border-box;

  // Temp
  margin-top: 1000px;
  height: 500px;

  .bg-main,
  .bg-sub {
    width: 100vw;
    mix-blend-mode: multiply;
    height: 200%;
    position: absolute;
  }

  .bg-main {
    background-color: $color-background-secondary;
    transform: skew(0deg, -10deg);
    top: 0;
  }

  .bg-sub {
    background-color: $color-background-tertiary;
    transform: skew(0deg, 15deg);
    top: 5rem;
  }

}
</style>