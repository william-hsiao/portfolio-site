<template lang="pug">
.container
  nav-menu
  cover
  socials
  intro
  projects
  blog
  about

  .panel.footer
    .panel-bg
</template>

<script>
import NavMenu from '@/components/Nav.vue'
import Cover from '@/components/Cover.vue'
import Socials from '@/components/Socials.vue'
import Intro from '@/components/Intro.vue'
import Projects from '@/components/Projects.vue'
import Blog from '@/components/Blog.vue'
import About from '@/components/About.vue'

export default {
  name: 'home',

  components: {
    NavMenu,
    Cover,
    Socials,
    Intro,
    Projects,
    Blog,
    About
  },

  created() {
    window.addEventListener('scroll', () => {
      const socials = document.querySelector('.socials');
      if (window.scrollY > 0) socials.classList.add('docked');
      else socials.classList.remove('docked');
    })
  },
}
</script>

<style lang='scss'>
.container {
  overflow: hidden;
}
.panel {
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 1;
  color: #fff;
  min-height: 800px;

  &:nth-of-type(even) {
    z-index: 100;
    color: #000;

    .panel-contents {
      text-align: left;
    }

    .panel-bg .accent {
      position: absolute;
      height: 5%;
      width: 10%;

      &.top-left {
        top: 200px;
        left: 100px;
        border-top: 1px solid #a7a7a7;
        border-left: 1px solid #a7a7a7;
        transform: skew(0, -32deg);
      }
      &.top-right {
        top: 100px;
        right: 100px;
        border-top: 1px solid #a7a7a7;
        border-right: 1px solid #a7a7a7;
      }
      &.bottom-left {
        bottom: 100px;
        left: 100px;
        border-bottom: 1px solid #a7a7a7;
        border-left: 1px solid #a7a7a7;
      }
      &.bottom-right {
        bottom: 200px;
        right: 100px;
        border-bottom: 1px solid #a7a7a7;
        border-right: 1px solid #a7a7a7;
        transform: skew(0, -32deg);
      }
    }
  }
}
.panel-contents {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  max-width: 1440px;
  z-index: 100;
  width: 60%;
  margin-top: 200px;
  margin-bottom: 200px;
  text-align: right;

  h1 {
    font-size: 2em;
    font-weight: 300;
  }
}
.panel-bg {
  box-sizing: border-box;
  position: absolute;
  height: 100%;
  width: 100%;
  box-shadow: 0 30px 50px rgba(0,0,0,.25);
  z-index: 0;
}

.footer {
  margin-bottom: -500px;
  margin-top: -155px;
  height: 800px;
  .panel-bg {
    background-color: #E8E8E8;
    transform: skew(0, 12deg);
    top: 220px;
  }
}

@media only screen and (max-width: 1080px) {
  .panel-bg .accent {
    display: none;
  }
}
</style>
