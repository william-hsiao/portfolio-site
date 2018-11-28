<template lang="pug">
  #DevSkills.container
    .inner
      h1 Developer Skills
      .list-container
        .list
          h4 Languages
          ul
            li JavaScript
            li Java
            li C/C++
        .list
          h4 Front-End
          ul
            li Vue.js
            li Sass
        .list
          h4 Back-End
          ul
            li Node.js
            li MySQL
            li MongoDB
        .list
          h4 Services
          ul
            li AWS
            li Git
            li Wercker
      .details
        | and more! 
        br
        //- router-link(to='/') > Details
</template>

<script>
export default {
  name: 'DevSkills',
}
</script>

<style lang='scss' scoped>
#DevSkills {
  .list-container {
    display: flex;
    text-align: center;
    .list {
      margin: 0 25px;
    }
  }
  .details {
    margin-top: 25px;
    width: 100%;
    a {
      float: right;
      font-size: 12px;
    }
  }
}
</style>
