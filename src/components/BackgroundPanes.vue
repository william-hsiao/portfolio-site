<template>
  <div class="bg-pane" :class="[variant]">
    <div class="bg-sub" />
    <div class="bg-main" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  variant: 'home-header' | 'home-footer' | 'home-section' | 'header'
}>()
</script>

<style lang="scss" scoped>
.bg-pane {
  position: relative;
  isolation: isolate;
  overflow: visible;
  height: 100%;
  width: 100%;

  .bg-main,
  .bg-sub {
    width: 100%;
    mix-blend-mode: multiply;
    position: absolute;
    height: 200%;

    box-shadow: 0 1vh 4vh rgb(0 0 0 / 35%);
  }

  .bg-main {
    transform: skew(0deg, -10deg);
  }

  .bg-sub {
    transform: skew(0deg, 15deg);
  }

  &.home-header {
    .bg-main {
      background-color: $color-background-primary;
      bottom: 0;

    }

    .bg-sub {
      background-color: $color-background-tertiary;
      bottom: -3%;
    }
  }

  &.home-footer {
    .bg-main {
      background-color: $color-background-secondary;
      transform: skew(0deg, -10deg);
      top: -5%;
    }

    .bg-sub {
      background-color: $color-background-tertiary;
      transform: skew(0deg, 15deg);
      top: 0;
    }
  }

  &.home-section {
    .bg-main {
      background-color: $color-background-secondary;
      transform: skew(0deg, -10deg);
      height: 100%;
    }

    .bg-sub {
      background-color: $color-background-tertiary;
      transform: skew(0deg, 15deg);
      height: 110%;
      top: -5%;
    }
  }
}
</style>