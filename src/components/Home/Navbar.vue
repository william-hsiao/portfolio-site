<template lang="pug">
  transition(name="fade")
    #nav(v-show="showNavbar")
      .navbar
        router-link.logo(to="/")
          img.logo(alt="logo" src="../../assets/images/logo.png")
          h1 William Hsiao
        .links
          a.item(href="https://www.linkedin.com/in/william-hsiao/", target="_blank")
            //- LinkedIn
            img(src="../../assets/images/linkedin.svg")
          a.item(href="https://github.com/william-hsiao", target="_blank")
            //- Github
            img(src="../../assets/images/github.svg")
          .item.tooltip
            //- Email
            img(src="../../assets/images/email.svg")
            .tooltipContent
              | contact@william-hsiao.com
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      showNavbar: false,
    }
  },
  methods: {
    navScroll() {
      this.showNavbar = (document.getElementById('home').scrollTop >= window.innerHeight) ? true : false;
    },
  },
  mounted() {
    document.getElementById('home').addEventListener('scroll', this.navScroll)
  },
}
</script>

<style lang='scss' scoped>
#nav {
  background-color: black;
  color: white;
  height: 100px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  z-index: 10000;
  .navbar {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    a {
      color: white;
      text-decoration: none;
      vertical-align: middle;
    }
    .logo {
      display: inline-flex;
      align-items: center;
      h1 {
        font-size: 30px;
        font-weight: 400;
        @media (max-width: 600px) {
          font-size: 15px;
        }
      }
      img {
        height: 75px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
        @media (max-width: 600px) {
          height: 40px;
        }
      } 
    }
    .links {
      flex-grow: 1;
      text-align: right;
      .item {
        display: inline-block;
        vertical-align: middle;
        margin: 0 10px;
        &:hover img {
          filter: invert(.5);
        }
        @media (max-width: 600px) {
          margin: 0 5px;
        }
      }
      img {
        height: 35px;
        width: 35px;
        display: block;
        @media (max-width: 600px) {
          height: 25px;
          width: 25px;
        }
      }
    }
  }
}
</style>
