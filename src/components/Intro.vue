<template lang="pug">
  section#intro.panel
    .panel-bg
      .accent.top-left
      .accent.top-right
      .accent.bottom-left
      .accent.bottom-right
    .panel-contents
      h1(v-fade-in) Hello!
      p(v-fade-in) I am a Software Engineer currently working in Tokyo, Japan
      p(v-fade-in) Recently, I've been working on a lot of web applications, focusing on the frontend, but I am certainly up for trying my hand in a variety of fields.
      .field-container(v-fade-in)
        .field
          .title Frontend
          .body {{ formatToString(frontend) }}
        .field
          .title Backend
          .body {{ formatToString(backend) }}
        .field
          .title Design
          .body {{ formatToString(design) }}
      p.align-right(v-fade-in) Got a project in mind? Just have a question? Let's talk!
</template>

<script>
export default {
  name: 'intro',
  data() {
    return {
      frontend: ['Typescript', 'Vue.js'],
      backend: ['NodeJS', 'Ruby on Rails', 'MySQL', 'MongoDB'],
      design: ['Figma', 'Photoshop'],
    }
  },
  methods: {
    formatToString(strArray) {
      return strArray.join('・');
    }
  }
}
</script>

<style lang='scss' scoped>
  #intro {
    margin-bottom: 50px;

    .panel-bg {
      background-color: #E8E8E8;
      transform: skew(0, 12deg);
    }

    .panel-contents {
      font-size: 18px;
      margin-bottom: 300px;

      .align-right {
        text-align: right;
      }

      .field-container {
        display: flex;
        margin-top: 50px;
        margin-bottom: 50px;
        .field {
          padding: 25px;
          width: 33%;
          box-sizing: border-box;
          text-align: center;
          &:not(:last-child) {
            border-right: 1px solid #a7a7a7;
          }
          .title {
            margin-bottom: 15px;
          }
          .body {
            font-size: 14px;
            color: #a7a7a7;
          }
        }
      }
    }
  }
</style>
