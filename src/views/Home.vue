<template lang="pug">
  .container
    cover
    socials
    intro
    projects
    blog
    about

    section.panel.footer
      .panel-bg
</template>

<script>
import Cover from '@/components/Cover.vue'
import Socials from '@/components/Socials.vue'
import Intro from '@/components/Intro.vue'
import Projects from '@/components/Projects.vue'
import Blog from '@/components/Blog.vue'
import About from '@/components/About.vue'

export default {
  name: 'home',

  components: {
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

    &:nth-of-type(even) {
      z-index: 100;
      color: #000;
    }
  }
  .panel-contents {
    display: flex;
    align-content: center;
    justify-content: center;
    max-width: 2560px;
    z-index: 100;
    width: 100%;
    padding: 200px 75px;
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

  .temp-content {
    height: 1000px;
  }
</style>
