<template lang="pug">
  #Projects
    h2 Projects
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Projects',
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

<style lang='scss' scope>
</style>
