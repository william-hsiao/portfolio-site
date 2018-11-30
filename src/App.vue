<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import './assets/stylesheets/_animations.scss';
@import './assets/stylesheets/_base.scss';
@import './assets/stylesheets/_colours.scss';
@import './assets/stylesheets/_forms.scss';
@import './assets/stylesheets/_tooltips.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
}
</style>
