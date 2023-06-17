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
  padding: 5rem 0;
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

    min-width: 80%;
    transition: min-width $transition-time linear;
  }

  .logo {
    display: flex;
    justify-content: flex-start;
    width: 100%;

    img {
      height: 300px;
      width: 300px;
    }
  }

  .title {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    position: absolute;
    padding-right: 3rem; // offset for img whitespace

    color: $color-background-primary-contrast;

    opacity: 1;
    transition: all $transition-time linear $transition-time;
  }

  &.transition-in {
    min-height: 100vh;

    .content {
      min-width: 0;
    }

    .title {
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