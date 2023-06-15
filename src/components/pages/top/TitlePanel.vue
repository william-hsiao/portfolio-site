<template>
  <div class="title-panel" :class="{ 'transition-in': transitionIn }">
    <div class="bg-main" />
    <div class="bg-sub" />

    <div class="content">
      <div class="logo">
        <img src="@/assets/images/logo.svg" />
      </div>

      <div class="title">
        <h1>William Hsiao</h1>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const transitionIn = ref(true)

onMounted(() => {
  setTimeout(() => (transitionIn.value = false), 1500);
})
</script>
  
  
<style lang="scss" scoped>
$transition-time: 1.5s;

.title-panel {
  position: relative;
  isolation: isolate;
  overflow: visible;
  padding: 5rem 0;
  box-sizing: border-box;
  min-height: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all $transition-time linear;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .logo {
    height: 300px;
    width: 300px;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .title {
    padding-left: 2rem;
    opacity: 1;
    max-width: 100%;
    translate: none;
    overflow: visible;
    white-space: nowrap;

    color: $color-background-primary-contrast;

    transition: max-width calc($transition-time / 2) linear, opacity $transition-time linear, translate $transition-time linear;
  }

  .bg-main,
  .bg-sub {
    width: 100vw;
    mix-blend-mode: multiply;
    height: 200%;
    position: absolute;

    transition: all calc($transition-time / 3) linear;
  }

  .bg-main {
    background-color: $color-background-primary;
    transform: skew(0deg, -10deg);
    bottom: 0;
  }

  .bg-sub {
    background-color: $color-background-secondary;
    transform: skew(0deg, 15deg);
    bottom: 0;
  }

  &.transition-in {
    min-height: 100vh;

    .title {
      padding-left: 0;
      opacity: 0;
      max-width: 0;
      translate: -1rem 0;
    }

    .bg-main,
    .bg-sub {
      transform: none;
    }
  }
}
</style>