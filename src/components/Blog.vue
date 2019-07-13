<template lang="pug">
  section#blog.panel
    .panel-bg
    .panel-contents
      h1 Blog &amp; Articles
      .temp-content
</template>

<script>
export default {
  name: 'blog',
}
</script>

<style lang='scss'>
  #blog {
    .panel-bg {
      background-color: #E7E7E7;
      transform: skew(0, 12deg);
    }
  }
</style>
