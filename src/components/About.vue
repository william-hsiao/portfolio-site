<template lang="pug">
  section#about.panel
    .panel-bg
    .panel-contents(v-fade-in)
      .main
        h1 About
        p I am an aspiring full-stack developer currently based in Tokyo. Although my work so far has mostly been around web development, I am always eager to venture into new fields and face new challenges. I believe that to create the best applications, one must have a solid understanding of all components not only on the technical aspects but also how each component contributes to the greater purpose of the project. It is with this mindset that I step into projects and aim to learn as much as I can from each experience. Even if it’s something I am already familiar with, there is always more to gain, more to discover, more to improve upon.
        i "Jack of all trades, but master of none"
        p is a phrase that is quite befitting of me yet one that I despise. Although I always strive to be an all-rounder in the fields I commit to in order to open the doors to as many opportunities possible, I cannot say that I am satisfied with where I am now. There is always more to learn and that is what drives me to keep improving myself everyday, constantly chasing to be the best that I can be.
        p I want to challenge the world.
        p I want to develop a product that changes lives.
        p I want to meet and work with like-minded people and see how far we can go.
      .bio
        img(src='@/assets/images/logo.png')
        .name William Hsiao
        table
          tr
            td.label Current Position:
            td.value
              span Software Engineer,
              span Repro. Inc
          tr
            td.label Languages:
            td.value
              span English
              span Japanese
              span Chinese (Mandarin)
          tr
            td.label Interests:
            td.value
              span Tennis
              span Violin
</template>

<script>
export default {
  name: 'about',
}
</script>

<style lang='scss' scoped>
  #about {
    .panel-bg {
      background-color: #232323;
      transform: skew(0, -12deg);
    }

    .panel-contents {
      flex-direction: row-reverse;
      font-size: .8em;

      .main {
        margin-left: 50px;
        width: 50%;
        text-align: center;
        h1 {
          margin-bottom: 50px;
        }
        p {
          margin-bottom: 30px;
          margin-top: 30px;
        }
      }
      .bio {
        width: 50%;
        margin-top: 50px;
        justify-content: center;
        display: flex;
        flex-direction: column;
        img {
          width: 50%;
          margin: 0 auto;
          border-radius: 5px;
        }
        .name {
          text-align: center;
          font-size: 1.8em;
          margin-top: 25px;
          margin-bottom: 25px;
          font-family: 'Play', sans-serif;
          letter-spacing: 3px;
        }
        table {
          border-spacing: 25px 10px;
          font-size: .9em;

          .label {
            color: #888888;
            vertical-align: text-top;
          }
          .value {
            text-align: left;
            span {
              display: block;
            }
          }
        }
      }
    }

    @media only screen and (max-width: 1080px) {
      .panel-contents {
        flex-direction: column;
        .main {
          width: auto;
          margin-left: 0;
        }
        .bio {
          width: auto;
        }
      }
    }
  }
</style>
