<template lang="pug">
  #app
    #nav
      .navbar
        router-link.logo(to="/")
          img.logo(alt="logo" src="./assets/logo.png")
          span William Hsiao
        .menu
          router-link(to="/about") About
    router-view
</template>

<style lang="scss">
html {
  background-color: black;
  height: 100%;
}
body {
  margin: 100px 0 0 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
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
  border-bottom: 3px solid white;
  box-sizing: border-box;
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
      font-size: 30px;
      display: inline-flex;
      align-items: center;
      img {
        height: 75px;
        display: inline-block;
        vertical-align: middle;
      } 
    }
    .menu {
      flex-grow: 1;
      text-align: right;
    }
  }
}
</style>
