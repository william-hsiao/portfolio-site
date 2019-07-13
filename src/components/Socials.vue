<template lang="pug">
  .socials
    a.item(href="https://github.com/william-hsiao", target="_blank")
      //- Github
      img(src="@/assets/images/github.svg")
    a.item(href="https://twitter.com/william_hsiao_", target="_blank")
      //- Twitter
      img(src="@/assets/images/twitter.svg")
    a.item(href="https://www.linkedin.com/in/william-hsiao/", target="_blank")
      //- LinkedIn
      img(src="@/assets/images/linkedin.svg")
    .item.tooltip
      //- Email
      img(src="@/assets/images/email.svg")
      .tooltipContent
        | contact@william-hsiao.com
</template>

<script>
export default {
  name: 'socials',
}
</script>

<style lang='scss'>
  .socials {
    position: absolute;
    display: flex;
    right: 0;
    margin-right: 75px;
    margin-top: -50px;
    transition: all .3s ease;

    &.docked {
      position: fixed;
      right: 0;
      bottom: 10vh;
      margin-right: 0;
      flex-direction: column;
      padding: 10px;
      background-color: #FFF;
      z-index: 1000;
      box-shadow: 0 0 5px rgba(0,0,0,.25);
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    .item img {
      height: 32px;
      width: 32px;
      // background-color: #444;
    }
    .item:not(:first-child) {
      margin-left: 50px;
    }
    &.docked .item:not(:first-child) {
      margin-left: 0px;
    }
    &.docked .item:not(:last-child) {
      margin-bottom: 10px;
    }
  }
</style>
