<template>
  <Panel class="title-panel" :class="{ 'transition-in': transitionIn }" background-variant="home-header">
    <div class="logo">
      <img src="@/assets/images/logo.svg" />
    </div>

    <div class="title">
      <div class="container">
        <h1>William Hsiao</h1>
        <Socials class="socials" />
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

  &:deep(.content) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .logo {
    img {
      height: 40vh;
      aspect-ratio: 1 / 1;
    }
  }

  .title {
    overflow: hidden;

    h1 {
      color: $color-background-primary-contrast;
      white-space: nowrap;
    }

    .socials:deep(img) {
      height: 4vh;
    }
  }
}

// Layout and transition styles
.title-panel {
  transition: all calc($transition-time * 1.5) linear $transition-time;

  &:deep(.bg) {

    .bg-main,
    .bg-sub {
      transition: all calc($transition-time / 2) linear $transition-time;
    }
  }

  &:deep(.content) {
    transition: min-width $transition-time linear;
  }

  .title {
    max-width: 100%;
    opacity: 1;
    transition:
      max-height $transition-time linear,
      max-width $transition-time linear,
      opacity calc($transition-time * 1.5) linear;

    .container {
      padding-left: 10vw;
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

@media (max-width: 480px) {
  .title-panel:deep(.content) {
    flex-direction: column;

    .title {
      max-height: 100vh;

      .container {
        padding-left: 0;
      }
    }
  }

  .title-panel.transition-in:deep(.content) {
    .title {
      max-width: 100%;
      max-height: 0;
    }
  }

}
</style>