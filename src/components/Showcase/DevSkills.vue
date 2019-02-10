<template lang="pug">
  #DevSkills.container
    .frame
      .summary.contents.active
        h1 Developer Skills
        .list-container
          .list(v-for="category in summary")
            h4 {{ category.name }}
            ul
              li(v-for='item in category.items') {{ item }}
        .button(@click="viewTemplate('summary', 'detailed', 'fade-up')")
          | View full list & details
      .detailed.contents
        h1 Developer Skills
        .section(v-for="category in detailed")
          h4 {{ category.name }}
          .skill-field-container(v-for='subcategory in category.subcategories')
            h6(v-if="subcategory.name") {{ subcategory.name }}
            .skill-field(v-for='item in subcategory.items')
              .label {{ item.name }}
              RatingBar(:value='item.rating')
        .link(@click="viewTemplate('detailed', 'summary', 'fade-down')")
          | ← return
</template>

<script>
import { mapState } from 'vuex';
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
    }
  },
  computed: {
    ...mapState({
      summary: state => state.devSkills.summary,
      detailed: state => state.devSkills.detailed,
    })
  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/stylesheets/DevSkills.scss';
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
</style>
