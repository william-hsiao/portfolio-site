<template>
  <div class="title-panel" :class="{ 'transition-in': transitionIn }">
    <BackgroundPanes class="bg" variant="home-header" />

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
import BackgroundPanes from '@/components/BackgroundPanes.vue';

const transitionIn = ref(true)

onMounted(() => {
  setTimeout(() => (transitionIn.value = false), 1500);
})
</script>
  
  
<style lang="scss" scoped>
$transition-time: .35s;

.title-panel {
  padding: 10vh 0;
  box-sizing: border-box;
  min-height: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all calc($transition-time * 1.5) linear $transition-time;

  position: relative;

  .bg {
    position: absolute;

    &:deep {

      .bg-main,
      .bg-sub {
        transition: all calc($transition-time / 2) linear $transition-time;
      }

    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    transition: min-width $transition-time linear;
  }

  .logo {
    img {
      height: 40vh;
      aspect-ratio: 1 / 1;
    }
  }

  .title {
    max-width: 100%;
    opacity: 1;
    text-align: right;
    overflow: hidden;
    transition: max-width $transition-time linear,
      opacity calc($transition-time * 1.5) linear;

    h1 {
      color: $color-background-primary-contrast;
      padding-left: 10vw;
      white-space: nowrap;
    }
  }

  &.transition-in {
    min-height: 100vh;

    .content {
      min-width: 0;
    }

    .title {
      max-width: 0;
      opacity: 0;
    }


    .bg:deep {

      .bg-main,
      .bg-sub {
        transform: none;
      }
    }
  }
}
</style>