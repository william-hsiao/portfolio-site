<template lang="pug">
  #Showcase
    Navbar
    Cover
    Intro
    DevSkills
    Projects
    AboutMe
    Blog
    Contact
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Showcase/Navbar.vue'
import Cover from '@/components/Showcase/Cover.vue'
import Intro from '@/components/Showcase/Intro.vue'
import DevSkills from '@/components/Showcase/DevSkills.vue'
import Projects from '@/components/Showcase/Projects.vue'
import AboutMe from '@/components/Showcase/AboutMe.vue'
import Blog from '@/components/Showcase/Blog.vue'
import Contact from '@/components/Showcase/Contact.vue'

export default {
  name: 'showcase',
  components: {
    Navbar,
    Cover,
    Intro,
    DevSkills,
    Projects,
    AboutMe,
    Blog,
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
#Showcase {
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
      .link {
        cursor: pointer;
      }
    }
  }
}
</style>
