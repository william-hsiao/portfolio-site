<template lang="pug">
  section#projects.panel
    .panel-bg
    .panel-contents
      h1 Projects
      .project-container
        .project-item(v-for='n in 5')
          .date
            span 2017
            span ~
            span 2018
          .thumbnail
          .text-content
            h3 Title
            p Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body
</template>

<script>
export default {
  name: 'projects',
}
</script>

<style lang='scss'>
  #projects {
    padding-bottom: 100px;
    margin-bottom: -40px;
    .panel-bg {
      background-color: #343434;
      transform: skew(0, -12deg);
    }

    .project-container {
      .project-item {
        display: flex;
        margin: 50px auto;
        .date {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          width: 20%;
        }
        .thumbnail {
          display: flex;
          justify-content: center;
          align-content: center;
          width: 30%;
          background-color: #c2c2c2;
        }
        .text-content {
          text-align: left;
          margin-left: 25px;
        }
      }
    }
  }
</style>
