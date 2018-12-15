<template lang="pug">
  #DevSkills.container
    .frame
      .summary.contents.active
        h1 Developer Skills
        .list-container
          .list
            h4 Languages
            ul
              li(v-for='item in summary.lang') {{ item }}
          .list
            h4 Front-End
            ul
              li(v-for='item in summary.front') {{ item }}
          .list
            h4 Back-End
            ul
              li(v-for='item in summary.back') {{ item }}
          .list
            h4 Services
            ul
              li(v-for='item in summary.services') {{ item }}
        .button(@click="viewTemplate('summary', 'detailed', 'fade-up')")
          | View full list & details
      .detailed.contents
        h1 Developer Skills
        .section
          h4 Languages
          .skill-field-container
            .skill-field(v-for='item in detailed.lang')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
        .section
          h4 Front-End
          .skill-field-container
            .skill-field(v-for='item in detailed.front')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
        .section
          h4 Back-End
          .skill-field-container
            .skill-field(v-for='item in detailed.back.frameworks')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
          h6 Databases
          .skill-field-container
            .skill-field(v-for='item in detailed.back.databases')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
        .section
          h4 Services & Others
          .skill-field-container
            .skill-field(v-for='item in detailed.others.others')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
          h6 Tests & CI
          .skill-field-container
            .skill-field(v-for='item in detailed.others.tests')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
          h6 AWS
          .skill-field-container
            .skill-field(v-for='item in detailed.others.aws')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
          h6 OS Familiarity
          .skill-field-container
            .skill-field(v-for='item in detailed.others.os')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
          h6 Graphic Design
          .skill-field-container
            .skill-field(v-for='item in detailed.others.graphic')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
        .link(@click="viewTemplate('detailed', 'summary', 'fade-down')")
          | ← return
</template>

<script>
import RatingBar from '@/components/RatingBar.vue';
import { transitions } from '@/assets/javascript/transition';

export default {
  name: 'DevSkills',
  mixins: [ transitions ],
  components: {
    RatingBar
  },
  data() {
    return {
      summary: {
        lang: [ 'JavaScript', 'Java', 'C/C++' ],
        front: [ 'Vue.js', 'Sass' ],
        back: [ 'Node.js', 'MySQL', 'MongoDB' ],
        services: [ 'Wercker', 'AWS' ],
      },
      detailed: {
        lang: [ 
          { name: 'JavaScript', rating: 5 },
          { name: 'Java', rating: 5 },
          { name: 'C/C++', rating: 4 },
          { name: 'C#', rating: 4 },
          { name: 'Python', rating: 3 },
          { name: 'Ruby', rating: 3 },
          { name: 'Go', rating: 2 },
          { name: 'Fortran', rating: 1 },
        ],
        front: [ 
          { name: 'Vue.js', rating: 5 },
          { name: 'Sass', rating: 5 },
          { name: 'TypeScript', rating: 3 },
        ],
        back: {
          frameworks: [ 
            { name: 'Node.js', rating: 5 },
            { name: 'Rails', rating: 3 },
          ],
          databases: [
            { name: 'MySQL', rating: 4 },
            { name: 'MongoDB', rating: 4 },
          ],
        },
        others: {
          others: [
            { name: 'npm', rating: 5 },
            { name: 'Git', rating: 4 },
            { name: 'Unity', rating: 3 },
            { name: 'nginx', rating: 2 },
          ],
          tests: [
            { name: 'Wercker', rating: 4 },
            { name: 'TestCafe', rating: 4 },
            { name: 'Mocha', rating: 3 },
            { name: 'Jasmine', rating: 3 },
          ],
          aws: [
            { name: 'S3', rating: 4 },
            { name: 'CloudFront', rating: 4 },
            { name: 'IAM', rating: 4 },
            { name: 'EC2', rating: 2 },
          ],
          os: [
            { name: 'Windows', rating: 5 },
            { name: 'Mac OS X', rating: 4 },
            { name: 'Linux', rating: 3 },
          ],
          graphic: [
            { name: 'Adobe Photoshop', rating: 4 },
            { name: 'GIMP', rating: 4 },
          ],
        }
      }
    }
  },
}
</script>

<style lang='scss' scoped>
#DevSkills {
  &::-webkit-scrollbar {
    appearance: none;
    width: 0;
  }
  .list-container {
    display: flex;
    text-align: center;
    justify-content: center;
    @media (max-width: 600px) {
      flex-direction: column;
    }
    .list {
      margin: 0 25px;
    }
  }
  .button, .link {
    margin-top: 25px;
  }
}
.section {
  margin-bottom: 3em;
}
.skill-field {
  display: flex;
  margin: auto;
  margin-bottom: 2px;
  max-width: 300px;
  width: 100%;
  .label {
    flex-grow: 1;
    text-align: left;
  }
}
</style>
