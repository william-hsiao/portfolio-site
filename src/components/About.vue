<template lang="pug">
  section.panel.about
    .panel-bg
    .panel-contents
      h1 About
      .temp-content
</template>

<script>
export default {
  name: 'about',
}
</script>

<style lang='scss'>
  .about {
    .panel-bg {
      background-color: #232323;
      transform: skew(0, -12deg);
    }
  }
</style>
