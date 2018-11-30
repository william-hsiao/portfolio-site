<template lang="pug">
  #DevSkills.container
    .inner
      .contents(:class="{ hide: !show('summary') }")
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
        .details(@click="viewTemplate('detailed')")
          | View full details
      .contents(:class="{ hide: !show('detailed') }")
        h1 Developer Skills
        .section
          h4 Languages
          .grid
            .field(v-for='item in detailed.lang')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
        .section
          h4 Front-End
          .grid
            .field(v-for='item in detailed.front')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
        .section
          h4 Back-End
          .grid
            .field(v-for='item in detailed.back.frameworks')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
          h6 Databases
          .grid
            .field(v-for='item in detailed.back.databases')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
        .section
          h4 Services & Others
          .grid
            .field(v-for='item in detailed.others.others')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
          h6 AWS
          .grid
            .field(v-for='item in detailed.others.aws')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
        .details(@click="viewTemplate('summary')")
          | ← return
</template>

<script>
import RatingBar from '@/components/RatingBar.vue'

export default {
  name: 'DevSkills',
  components: {
    RatingBar
  },
  data() {
    return {
      view: 'summary',
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
            { name: 'Git', rating: 4 },
            { name: 'Wercker', rating: 3 }, 
            { name: 'Unity', rating: 3 },
          ],
          aws: [
            { name: 'S3', rating: 4 },
            { name: 'CloudFront', rating: 4 },
            { name: 'IAM', rating: 4 },
          ],
        }
      }
    }
  },
  methods: {
    viewTemplate(page) {
      this.view = page;
      this.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    show(page) {
      return this.view === page;
    }
  },
}
</script>

<style lang='scss' scoped>
#DevSkills {
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
  .details {
    margin-top: 25px;
    width: 100%;
    cursor: pointer;
  }
}

.contents {
  transition: all 1s ease-in-out;
  opacity: 1;
  &.hide {
    transition-duration: 0.5s;
    transform: translateY(200px);
  }
}
.section {
  margin-bottom: 3em;
}
.hide {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  // display: none;
  visibility: hidden;
  opacity: 0;
}
.field {
  display: flex;
  width: 100%;
  max-width: 300px;
  margin: auto;
  .label {
    flex-grow: 1;
    text-align: left;
  }
}
</style>
