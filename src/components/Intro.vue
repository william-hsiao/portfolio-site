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
      p(v-fade-in) My work is primary around Web Development
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
