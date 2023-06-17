<template>
  <main>
    <TitlePanel />

    <section class="intro">
      <div class="content">
        <h2>Hello!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>

    <section class='blog'>
      <BackgroundPanes class='bg' variant="home-section" />

      <div class="content">
        <h2>Blog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>

    <section class="past-work">
      <div class="content">
        <h2>Past Work</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>

    <FooterPanel />
  </main>
</template>

<script setup lang="ts">
import TitlePanel from '@/components/pages/top/TitlePanel.vue';
import FooterPanel from '@/components/pages/top/FooterPanel.vue';
import BackgroundPanes from '@/components/BackgroundPanes.vue';
</script>


<style lang="scss" scoped>
main {
  overflow: hidden;


  &:deep() {
    h1 {
      font-size: 5vh;
    }

    h2 {
      font-size: 4vh;
    }

    p {
      font-size: 2vh;
    }
  }

  section {
    padding: 35vh 15vw;
    box-sizing: border-box;

    position: relative;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .blog {
    padding-top: 20vh;
    padding-bottom: 30vh;

    .content {
      color: $color-background-primary-contrast;
      position: relative;
      text-align: right;
    }
  }
}
</style>
