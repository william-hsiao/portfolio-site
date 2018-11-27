<template lang="pug">
  .home
    Intro
    Contact
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'home',
  components: {
    Intro,
    Contact
  }
}
</script>

<style lang='scss' scoped>
.home {
  height: 100%;
}
</style>
