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
            span now
          .text-content
            .title
              h3 Repro Web SDK
              span Typescript
            p I work as one of the core members in developing the Repro Web SDK which enables user activity on web pages to be tracked with the Repro marketing service. The Web SDK was launched in December 2018 and is continuing to be developed to form one of the pillars of Repro.
            .link
              a(href='https://docs.repro.io/en/dev/web/index.html#web', target='_blank') Learn more

        .project-item
          .date
            span 2019
          .text-content
            .title
              h3 Testcafe Browser Provider CrossBrowserTesting
              span Javascript
            p A package that
            .link
              a(href='https://www.npmjs.com/package/testcafe-browser-provider-cbt', target='_blank') View on npm

        .project-item
          .date
            span 2018
            span ~
            span 2019
          .text-content
            .title
              h3 gaze-key
              span C#
            p Human-Computer Interaction research utilizing current eye tracking technology to develop an efficient typing system based only on gaze, without inputs such as blink and dwell time.
</template>

<script>
export default {
  name: 'projects',
}
</script>

<style lang='scss' scoped>
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
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          width: 20%;
          text-align: center;
        }
        .text-content {
          flex-grow: 1;
          text-align: left;
          margin-left: 25px;
          .title {
            * {
              display: inline-block;
            }

            h3 {
              margin-top: 5px;
            }
            span {
              padding-left: 10px;
              color: #b8b8b8;
            }
          }
          p {
            margin: 0;
          }
          .link {
            margin-top: 10px;
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
