<template lang="pug">
  #home
    Navbar
    Cover.theme-cover
    Intro.theme-1
    DevSkills.theme-2
    Skills.theme-3
    Projects.theme-4
    AboutMe.theme-1
    Contact.theme-2
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Cover from '@/components/Cover.vue'
import Intro from '@/components/Intro.vue'
import DevSkills from '@/components/DevSkills.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import AboutMe from '@/components/AboutMe.vue'
import Contact from '@/components/Contact.vue'

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
  }
}
</script>

<style lang='scss'>
#home {
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  box-sizing: border-box;
  height: 100%;
}

.container {
  min-height: 100%;
  padding: 100px 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  &:nth-child(odd) {
    color: #000000;
  }
  &:nth-child(even) {
    color: #ffffff;
  }
  .inner {
    max-width: 1000px;
    padding: 0 50px;
  }
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
</style>
