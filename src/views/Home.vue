<template lang="pug">
  #home
    Navbar
    Cover
    Intro
    DevSkills
    Skills
    Projects
    AboutMe
    Contact
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Home/Navbar.vue'
import Cover from '@/components/Home/Cover.vue'
import Intro from '@/components/Home/Intro.vue'
import DevSkills from '@/components/Home/DevSkills.vue'
import Skills from '@/components/Home/Skills.vue'
import Projects from '@/components/Home/Projects.vue'
import AboutMe from '@/components/Home/AboutMe.vue'
import Contact from '@/components/Home/Contact.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Cover,
    Intro,
    DevSkills,
    Skills,
    Projects,
    AboutMe,
    Contact,
  },
  mounted() {
    const frames = document.getElementsByClassName('container')
    for(let i = 0; i < frames.length; i++) {
      if (i % 2 === 0) frames[i].classList.add('dark');
      else frames[i].classList.add('light');

      if (frames[i].id === 'Cover') frames[i].classList.add('theme-cover');
      else frames[i].classList.add(`theme-${(i - 1) % 4 + 1}`);
    };
  }
}
</script>

<style lang='scss'>
#home {
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
}

.theme-cover {
  background-color: #000000;
}
.theme-1 {
  background-color: #efefef;
}
.theme-2 {
  background-color: #6c6c6c;
}
.theme-3 {
  background-color: #ffffff;
}
.theme-4 {
  background-color: #353535;
}

.container {
  align-items: center;
  box-sizing: border-box;
  color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  padding: 100px 0;
  scroll-snap-align: start;
  width: 100%;

  .frame {
    box-sizing: border-box;
    max-width: 1000px;
    min-height: 100%;
    padding: 0 50px;
    position: relative;
    width: 100%;

    .contents {
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: hidden;
      &.active {
        position: relative;
        visibility: visible;
      }
      &.standby {
        visibility: visible;
      }
      h1 {
        display: inline-block;
      }
    }
  }
}
</style>
