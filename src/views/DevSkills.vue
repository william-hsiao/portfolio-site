<template lang="pug">
  #DevSkills
    .section(v-for="category in detailed")
      h4 {{ category.name }}
      .skill-field-container(v-for='subcategory in category.subcategories')
        h6(v-if="subcategory.name") {{ subcategory.name }}
        .skill-field(v-for='item in subcategory.items')
          .label {{ item.name }}
          RatingBar(:value='item.rating')
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import RatingBar from '@/components/RatingBar.vue';

export default {
  name: 'DevSkills',
  components: {
    RatingBar
  },
  computed: {
    ...mapState({
      detailed: state => state.devSkills.detailed,
    })
  },
  methods: {
    ...mapMutations({
      updateTitle: 'updateTitle',
    })
  },
  mounted() {
    this.updateTitle('Dev Skills');
  }
}
</script>

<style lang='scss' scoped>
// More to assets
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
