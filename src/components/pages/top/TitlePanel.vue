<template>
  <Panel class="title-panel" :class="{ 'transition-in': transitionIn }" background-variant="home-header">
    <div class="logo">
      <img src="@/assets/images/logo.svg" />
    </div>

    <div class="title">
      <div class="container">
        <h1>William Hsiao</h1>
        <Socials />
      </div>
    </div>
  </Panel>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Panel from '@/components/Panel.vue';
import Socials from './Socials.vue';

const transitionIn = ref(true)

onMounted(() => {
  setTimeout(() => (transitionIn.value = false), 1500);
})
</script>
  
  
<style lang="scss" scoped>
$transition-time: .35s;

.title-panel {
  box-sizing: border-box;
  padding: 10vh 0;
  min-height: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all calc($transition-time * 1.5) linear $transition-time;


  &:deep(.bg) {

    .bg-main,
    .bg-sub {
      transition: all calc($transition-time / 2) linear $transition-time;
    }
  }

  &:deep(.content) {
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

    .container {
      padding-left: 10vw;
    }

    h1 {
      color: $color-background-primary-contrast;
      white-space: nowrap;
    }
  }

  &.transition-in {
    min-height: 100vh;

    &:deep(.content) {
      min-width: 0;
    }

    .title {
      max-width: 0;
      opacity: 0;
    }

    &:deep(.bg) {

      .bg-main,
      .bg-sub {
        transform: none;
      }
    }

  }
}
</style>