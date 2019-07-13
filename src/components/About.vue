<template lang="pug">
  section#about.panel
    .panel-bg
    .panel-contents(v-fade-in)
      h1 About
      .temp-content
</template>

<script>
export default {
  name: 'about',
}
</script>

<style lang='scss'>
  #about {
    .panel-bg {
      background-color: #232323;
      transform: skew(0, -12deg);
    }
  }
</style>
