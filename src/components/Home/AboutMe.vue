<template lang="pug">
  #AboutMe.container
    .inner
      h1 About Me
      .field.center Taoyuan, Taiwan → Brisbane, Australia → Tokyo, Japan
      .field
        .label Education: 
        .body 
          | Bachelors of Engineering - Computer Science and Engineering
          br
          | Waseda University, Tokyo, Japan
      .field
        .label Hobbies: 
        .body Tennis, Archery, Violin
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>

<style lang='scss' scoped>
#AboutMe {
  
  .field {
    margin-top: 50px;
    display: flex;
    text-align: left;
    &.center {
      text-align: center;
      justify-content: center;
    }

    .label {
      font-weight: 600;
      margin-right: 25px;
      width: 100px;
    }
  }
}
</style>
