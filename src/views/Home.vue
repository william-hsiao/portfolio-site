<template lang="pug">
  .container
    section.panel.title
      .panel-bg
      .panel-contents
        img.logo(src='@/assets/images/logo_cover.png')
        .title-container
          span.name William Hsiao
          span.subtitle Software Engineer

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

    section.panel.intro
      .panel-bg
      .panel-contents
        h1 Hello!
        .temp-content

    section.panel.projects
      .panel-bg
      .panel-contents
        h1 Projects
        .temp-content

    section.panel.blog
      .panel-bg
      .panel-contents
        h1 Blog &amp; Articles
        .temp-content

    section.panel.about
      .panel-bg
      .panel-contents
        h1 About
        .temp-content

    section.panel.footer
      .panel-bg
</template>

<script>

export default {
  name: 'home',

  components: {
  },

  created() {
    window.addEventListener('scroll', () => {
      const socials = document.querySelector('.socials');
      if (window.scrollY > 0) socials.classList.add('docked');
      else socials.classList.remove('docked');
    })
  },

  mounted() {
  }
}
</script>

<style lang='scss'>
  .container {
    overflow: hidden;
  }
  .panel {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    z-index: 1;
    color: #fff;

    &:nth-of-type(even) {
      z-index: 100;
      color: #000;
    }
  }
  .panel-contents {
    display: flex;
    align-content: center;
    justify-content: center;
    max-width: 2560px;
    z-index: 100;
    width: 100%;
    padding: 200px 75px;
  }
  .panel-bg {
    position: absolute;
    height: 100%;
    width: 100%;
    box-shadow: 0 30px 50px rgba(0,0,0,.25);
    z-index: 0;
  }

  .title {
    margin-bottom: 75px;
    margin-top: -200px;
    padding-top: 200px;

    .panel-contents {
      padding-top: 120px;
      padding-bottom: 160px;
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

  .intro {
    margin-bottom: 50px;
    .panel-bg {
      background-color: #E8E8E8;
      transform: skew(0, 12deg);
    }
  }

  .projects {
    padding-bottom: 100px;
    margin-bottom: -40px;
    .panel-bg {
      background-color: #343434;
      transform: skew(0, -12deg);
    }
  }

  .blog {
    .panel-bg {
      background-color: #E7E7E7;
      transform: skew(0, 12deg);
    }
  }

  .about {
    .panel-bg {
      background-color: #232323;
      transform: skew(0, -12deg);
    }
  }

  .footer {
    margin-bottom: -500px;
    margin-top: -155px;
    height: 800px;
    .panel-bg {
      background-color: #E8E8E8;
      transform: skew(0, 12deg);
      top: 220px;
    }
  }

  .temp-content {
    height: 1000px;
  }
</style>
