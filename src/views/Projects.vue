<template lang="pug">
  #Projects
    .project-item(v-for="template in templates", v-html='template')
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Projects',
  computed: {
    ...mapState({
      templates: state => state.projects.templates,
    })
  },
  methods: {
    ...mapMutations({
      updateTitle: 'updateTitle',
    })
  },
  mounted() {
    this.updateTitle('Projects');
  }
}
</script>

<style lang='scss'>
#Projects {
  font-size: 12px;
  .project-item {
    margin-bottom: 50px;
    p {
      text-align: left;
      text-indent: 16px;
    }
    ul {
      margin-left: 0;
    }
  }
}
</style>
