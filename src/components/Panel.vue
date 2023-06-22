<template>
  <div class="panel">
    <div v-if="backgroundVariant" class="bg" :class="[backgroundVariant]">
      <div class="bg-sub" />
      <div class="bg-main" />
    </div>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  backgroundVariant?: 'home-header' | 'home-footer' | 'home-section' | 'header' | 'footer'
}>()
</script>

<style lang="scss" scoped>
.panel {
  position: relative;

  .content {
    position: relative;
  }

  .bg {
    position: absolute;
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
        height: 104%;
        top: -2%;
      }
    }

    &.header {
      .bg-main {
        background-color: $color-background-primary;
        transform: skew(0deg, -1deg);
        bottom: 0;
      }

      .bg-sub {
        background-color: $color-background-tertiary;
        transform: skew(0deg, 2deg);
        bottom: -3%;
      }
    }

    &.footer {
      .bg-main {
        background-color: $color-background-secondary;
        transform: skew(0deg, -1deg);
        top: -3%;
      }

      .bg-sub {
        background-color: $color-background-tertiary;
        transform: skew(0deg, 2deg);
        top: 0;
      }
    }
  }
}
</style>