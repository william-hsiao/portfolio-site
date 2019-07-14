<template lang="pug">
  section#projects.panel
    .panel-bg
    .panel-contents
      h1(v-fade-in) Projects
      .project-container(v-fade-in)
        .project-item
          .date
            span 2018
            span ~
            span Ongoing
          .thumbnail
          .text-content
            h3 Repro Web SDK
            p I work as one of the core members in developing the Repro Web SDK which enables user activity on web pages to be tracked with the Repro marketing service. The Web SDK was launched in December 2018 and is continuing to be developed to form one of the pillars of Repro.
        .project-item
          .date
            span 2019
          .thumbnail
          .text-content
            h3 Testcafe Browser Provider CrossBrowserTesting
            p A package that
        .project-item
          .date
            span 2018
            span ~
            span 2019
          .thumbnail
          .text-content
            h3 gaze-key
            p Human-Computer Interaction research utilizing current eye tracking technology to develop an efficient typing system based only on gaze, without inputs such as blink and dwell time.
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
          text-align: center;
        }
        .thumbnail {
          display: flex;
          justify-content: center;
          align-content: center;
          width: 20%;
          background-color: #c2c2c2;
        }
        .text-content {
          text-align: left;
          margin-left: 25px;
          width: 60%;
          h3 {
            margin-top: 5px;
          }
        }
      }
    }
  }
</style>
