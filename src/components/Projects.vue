<template lang="pug">
section#projects.panel
  .panel-bg
  .panel-contents
    h1(v-fade-in) Projects
    .project-container(v-fade-in)
      .project-item
        .date
          span 2019
        .text-content
          .title
            h3 TestCafe Browser Provider: CrossBrowserTesting
            span Javascript
          p A CrossBrowserTesting browser provider plugin for TestCafe. Built using the TestCafe browser provider generator, this plugin posts test resutls back to the CrossBrowserTesting dashboard and uses a named local connection for each test allowing you to run multiple tests without interfering with each other.
          .link
            a(href='https://www.npmjs.com/package/testcafe-browser-provider-cbt', target='_blank') View on npm

      .project-item
        .date
          span 2018
          span ~
          span 2020
        .text-content
          .title
            h3 Repro Web SDK
            span Typescript
          p The Repro Web SDK enables tracking user activity on your web pages and can be view and analyized with the Repro marketing service. The Web SDK was launched in December 2018 and is continuing to be developed to form one of the pillars of Repro. I work as one of the core developers of the SDK having been responsible for many features such as cross-domain support.
          .link
            a(href='https://docs.repro.io/en/dev/web/index.html#web', target='_blank') Learn more

      .project-item
        .date
          span 2018
          span ~
          span 2019
        .text-content
          .title
            h3 gaze-key
            span Unity, C#
          p Human-Computer Interaction research utilizing current eye tracking technology to develop an efficient typing system based only on gaze, without inputs such as blink and dwell time. This research was to explore the viability of a new input method designed around eye-tracked inputs and was the topic of my Bachelor thesis.

      .project-item
        .date
          span On-going
        .text-content
          .title
            h3 Portfolio
            span Vue.js
          p This site itself is also a on-going project that I try to update regularly to reflect my current frontend skills. Everything from the design to the smallest components, I try to build myself from scratch without the use of libraries or other frameworks other than Vue.js as a base framework.
          .link
            a(href='https://github.com/william-hsiao/portfolio-site') View on Github
</template>

<script>
export default {
  name: "projects",
};
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
        font-size: 0.8em;
      }
      .text-content {
        flex-grow: 1;
        text-align: left;
        margin-left: 25px;
        .title {
          margin-bottom: 10px;

          * {
            display: inline-block;
          }

          h3 {
            margin: 0;
          }
          span {
            padding-left: 10px;
            color: #b8b8b8;
            font-size: 0.8em;
          }
        }
        p {
          margin: 0;
          font-size: 0.8em;
        }
        .link {
          margin-top: 10px;
          text-decoration: underline;
          text-align: right;
          font-size: 0.8em;
        }
      }
    }
  }

  @media only screen and (max-width: 1080px) {
    .project-container {
      .project-item {
        flex-direction: column;
        .date {
          flex-direction: row;
          justify-content: flex-start;
          width: auto;
          font-size: 0.8em;
          span:not(:last-child) {
            margin-right: 5px;
          }
        }
        .text-content {
          margin-left: 0;
          .title {
            * {
              display: block;
            }
            span {
              padding-left: 0;
            }
          }
        }
      }
    }
  }
}
</style>
