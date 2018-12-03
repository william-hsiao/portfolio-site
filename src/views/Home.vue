<template lang="pug">
  #home
    Navbar
    Cover
    Intro
    DevSkills
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
    }
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
  --panel-background: #000000;
}
.theme-1 {
  --panel-background: #efefef;
  --background-alt: #eaeaea;
}
.theme-2 {
  --panel-background: #6c6c6c;
  --background-alt: #808080;
}
.theme-3 {
  --panel-background: #dedede;
}
.theme-4 {
  --panel-background: #353535;
}

.container {
  align-items: center;
  background-color: var(--panel-background);
  box-sizing: border-box;
  color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  padding: 100px 0;
  scroll-snap-align: start;
  width: 100%;
  overflow-x: hidden;

  .frame {
    box-sizing: border-box;
    max-width: 1000px;
    min-height: 100%;
    padding: 0 50px;
    position: relative;
    width: 100%;

    .contents {
      height: 0;
      left: 0;
      overflow: hidden;
      position: absolute;
      right: 0;
      top: 0;
      visibility: hidden;
      &.active {
        height: auto;
        position: relative;
        visibility: visible;
      }
      &.standby {
        height: auto;
        visibility: visible;
      }
      h1 {
        display: inline-block;
      }
      .link {
        cursor: pointer;
      }
    }
  }
}
</style>
