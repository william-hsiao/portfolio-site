<template lang="pug">
  section.panel.projects
    .panel-bg
    .panel-contents
      h1 Projects
      .temp-content
</template>

<script>
export default {
  name: 'projects',
}
</script>

<style lang='scss'>
  .projects {
    padding-bottom: 100px;
    margin-bottom: -40px;
    .panel-bg {
      background-color: #343434;
      transform: skew(0, -12deg);
    }
  }
</style>
