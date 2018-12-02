<template lang="pug">
  #AboutMe.container
    .frame
      .summary.contents.active
        h1 About Me
        .field-container
          .section
            .field.locations
              .body
                p Taiwan
                span Taoyuan
              .arrow →
              .body 
                p Australia
                span Brisbane
              .arrow →
              .body 
                p Japan
                span Tokyo
            .field
              .label Current Position:
              .body
                p Software Engineering Intern
                span Repro Inc.
            .field
              .label Education: 
              .body 
                p Bachelors of Engineering
                span Computer Science and Engineering
                span Waseda University, Tokyo, Japan
                .subscript Graduate September 2019
            .field
              .label Interests:
              .body
                p Tennis, Archery, Violin
          .section.article
            p The phrase:
            i "Jack of all trades, but master of none"
            p is befitting for me but is also a phrase that I despise. Although I always strive to be an all-rounder in the fields I commit to in order to open the doors to as many opportunities possible, I am not satisfied with where I am now. I see the glaring faults in myself and that is what drives me to keep improving myself everyday, constantly chasing to be the best that I can be and perhaps see myself working with the best in the world.
      .background.contents
        .field-container
          | Taoyuan, Taiwan → Brisbane, Australia → Tokyo, Japan
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
    margin-top: 25px;
    @media (max-width: 800px) {
      flex-direction: column;
      .section {
        width: auto;
        margin-bottom: 25px;
      }
    }
  }
  .section {
    width: 50%;
    display: flex;
    flex-direction: column;
    &.article {
      padding-left: 30px;
      text-align: left;
      font-size: 14px;
      color: var(--secondary);
      p {
        margin: 0;
      }
      i {
        text-align: center;
        margin: 5px;
      }
    }
  }
  .field {
    display: flex;
    margin-bottom: 25px;
    text-align: left;
    .label {
      font-weight: 600;
      margin-right: 25px;
      width: 100px;
      flex-shrink: 0;
    }
    .body {
      p {
        margin: 0;
      }
      span {
        display: block;
        font-size: 12px;
      }
      .subscript {
        font-size: 8px;
        margin-top: 5px;
      }
    }
  }
  .locations {
    margin-bottom: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
    .body span {
      font-size: 10px;
    }
    .arrow {
      margin: 0 15px;
    }
  }
}
</style>
