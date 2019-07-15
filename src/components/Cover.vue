<template lang="pug">
  section#top.panel
    .panel-bg
    .panel-contents
      img.logo(src='@/assets/images/logo_cover.png')
      .title-container
        span.name William Hsiao
        span.subtitle Software Engineer
</template>

<script>
  export default {
    name: 'cover',
  }
</script>

<style lang='scss'>
  #top {
    margin-bottom: 75px;

    .panel-contents {
      margin-top: 150px;
      margin-bottom: 160px;
      flex-direction: row;
      width: 80%;
    }
    .panel-bg {
      background-color: #000;
      transform: skew(0, -10deg);
      height: 150%;
      bottom: 0;
    }
    .title-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      letter-spacing: 5px;
      margin-left: 100px;
      text-align: center;
      font-family: 'Play', sans-serif;
    }
    .name {
      font-size: 36px;
      padding: 50px 150px;
      position: relative;
    }
    .name::before {
      content: '';
      border-top: 1px solid white;
      border-left: 1px solid white;
      height: 35%;
      width: 25%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .name::after {
      content: '';
      border-bottom: 1px solid white;
      border-right: 1px solid white;
      height: 35%;
      width: 25%;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .subtitle {
      margin: 50px auto 0;
      font-size: 18px;
      color: #595959;
    }
    .logo {
      height: 500px;
      position: relative;
      animation-duration: 1s;
      animation-name: bobble;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }

  @keyframes bobble {
    from {
      bottom: 0;
    }
    to {
      bottom: 8px;
    }
  }
</style>
