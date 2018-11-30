<template lang="pug">
  #Cover.container
    .inner
      img.logo(alt="logo" src="../../assets/logo.png")
      h1 William Hsiao
      h3 Web Developer
      .links
        a.item(href="https://www.linkedin.com/in/william-hsiao/", target="_blank")
          //- LinkedIn
          img(src="../../assets/linkedin.svg")
        a.item(href="https://github.com/william-hsiao", target="_blank")
          //- Github
          img(src="../../assets/github.svg")
        .item.tooltip
          //- Email
          img(src="../../assets/email.svg")
          .tooltipContent
            | contact@william-hsiao.com
</template>

<script>
export default {
  name: 'Cover',
}
</script>

<style lang='scss' scoped>
#Cover {
  box-sizing: border-box;
  padding-bottom: 100px;

  h1 {
    font-size: 30px;
    letter-spacing: 10px;
    margin: 15px 0;
  }
  h3 {
    font-size: 10px;
    color: #c1c1c1;
    letter-spacing: 5px;
  }
  .logo {
    height: 100px;
  }

  .links {
    margin: 50px 0 0 0;
    .item {
      display: inline-block;
      margin: 0 10px;
      cursor: pointer;
      &:hover img {
        filter: invert(.5);
      }
    }
    img {
      height: 25px;
      width: 25px;
      display: block;
    }
  }
}
</style>
