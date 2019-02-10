<template lang="pug">
  #MainLayout
    .section.title
      .contents
        router-link.black(to='/')
          img.logo(alt="logo" src="../assets/images/logo.png")
        router-link.white(:to='getBannerLink()')
          h5 William Hsiao
          h1 {{ pageTitle }}
    .spacer
    .section.body
      .contents
        .sidebar.dark
          .sidebar-content
            router-link.link(to='/')
              h3 Home
            router-link.link(to='/skills')
              h3 Dev Skills
            router-link.link(to='/projects')
              h3 Projects
            router-link.link(to='/about')
              h3 About Me
            //- router-link.link(to='/blog')
            //-   h3 Blog
            .spacer
            router-link.link(to='/extras')
              h3 Extras
            .spacer
            .socials
              a.item(:href="socials.github.url", target="_blank")
                //- Github
                img(src="@/assets/images/github.svg")
              a.item(:href="socials.twitter.url", target="_blank")
                //- Twitter
                img(src="@/assets/images/twitter.svg")
              a.item(:href="socials.github.url", target="_blank")
                //- LinkedIn
                img(src="@/assets/images/linkedin.svg")
            .spacer
            p contact@william-hsiao.com
            p Copyright &copy; 2019
        .main
          transition(name='fade', mode='out-in')
            router-view
    //- .footer
    //- .section.footer
    //-   .contents
    //-     .main
    //-     .sidebar
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MainLayout',
  computed: {
    ...mapState([
      'pageTitle',
      'socials',
    ])
  },
  methods: {
    getBannerLink() {
      if (this.pageTitle === 'Dev Skills') {
        return '/skills';
      } else if (this.pageTitle === 'Projects') {
        return '/projects';
      } else if (this.pageTitle === 'About Me') {
        return '/about';
      } else if (this.pageTitle === 'Blog') {
        return '/blog';
      } else {
        return '/';
      }
    }
  },
}
</script>

<style lang='scss' scoped>
#MainLayout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  background-color: #ffffff;
  .section {
    width: 100%;
    .contents {
      margin: auto;
      max-width: 1000px;
      height: 100%;
    }
  }
  .title {
    background: linear-gradient(to right, #282828, #282828 50%, #f1f1f1 50%, #f1f1f1);
    .contents {
      display: flex;
      height: 150px;
    }
    .black {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background-color: #000000;
      box-sizing: border-box;
      padding-right: 50px;
      img {
        height: 100px;
      }
    }
    .white {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: flex-start;
      justify-content: center;
      padding-left: 50px;
      background-color: #f1f1f1;
      h1 {
        font-size: 50px;
        margin: 0;
      }
      h5 {
        margin: 0;
      }
    }
  }
  .body {
    // background: linear-gradient(to right, #ffffff, #ffffff 50%, #353535 50%, #353535);
    background: linear-gradient(to right, #353535, #353535 50%, #ffffff 50%, #ffffff);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .contents {
      height: 100%;
      width: 100%;
      display: flex;
      flex-grow: 1;
    }
    .main {
      flex-grow: 1;
      background-color: #ffffff;
      padding: 15px 50px;
      width: 80%;
      box-sizing: border-box;
    }
    .sidebar {
      position: sticky;
      top: 15px;
      flex-shrink: 0;
      padding: 15px;
      width: 20%;
      box-sizing: border-box;
      color: #ffffff;
      background-color: #282828;
      .sidebar-content {
        max-width: 200px;
      }
      ul {
        width: 100%;
        box-sizing: border-box;
      }
      p, a, li {
        font-size: 12px;
      }
      .link {
        display: block;
        margin: 5px auto;
      }
      .socials {
        display: flex;
        justify-content: space-evenly;

        img:hover {
          filter: invert(.5);
        }
      }
      .spacer {
        margin: 30px auto;
        border-top: 1px solid #565656;
        width: 75%;
      }
    }
  }
}
</style>
