<template lang="pug">
  section#intro.panel
    .panel-bg
      .accent.top-left
      .accent.top-right
      .accent.bottom-left
      .accent.bottom-right
    .panel-contents
      h1 Hello!
      p I am a Software Engineer currently working in Tokyo, Japan
      .line
        .text Frontend
        .image
      .line
        .image
        .text Backend
      .line
        .text And even some design
        .image
</template>

<script>
export default {
  name: 'intro',
}
</script>

<style lang='scss'>
  #intro {
    margin-bottom: 50px;

    .panel-bg {
      background-color: #E8E8E8;
      transform: skew(0, 12deg);

      .accent {
        position: absolute;
        height: 5%;
        width: 10%;

        &.top-left {
          top: 200px;
          left: 100px;
          border-top: 1px solid #a7a7a7;
          border-left: 1px solid #a7a7a7;
          transform: skew(0, -32deg);
        }
        &.top-right {
          top: 200px;
          right: 100px;
          border-top: 1px solid #a7a7a7;
          border-right: 1px solid #a7a7a7;
        }
        &.bottom-left {
          bottom: 200px;
          left: 100px;
          border-bottom: 1px solid #a7a7a7;
          border-left: 1px solid #a7a7a7;
        }
        &.bottom-right {
          bottom: 200px;
          right: 100px;
          border-bottom: 1px solid #a7a7a7;
          border-right: 1px solid #a7a7a7;
          transform: skew(0, -32deg);
        }
      }
    }

    .panel-contents {
      font-size: 18px;

      .line {
        display: flex;
        padding-top: 100px;
        padding-bottom: 100px;
        margin: auto;
        width: 80%;

        .text {
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: center;
          flex-grow: 1;
          text-align: center;
        }
        .image {
          height: 100px;
          width: 200px;
          background-color: #a7a7a7;
        }
      }
    }
  }
</style>
