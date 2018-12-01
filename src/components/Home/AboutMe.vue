<template lang="pug">
  #AboutMe.container
    .frame
      h1 About Me
      .field-container
        | Taoyuan, Taiwan → Brisbane, Australia → Tokyo, Japan
      .field-container
        .section
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
  .field-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
  .field {
    display: flex;
    margin-bottom: 25px;
    text-align: left;
    .label {
      font-weight: 600;
      margin-right: 25px;
      width: 100px;
    }
  }
}
</style>
