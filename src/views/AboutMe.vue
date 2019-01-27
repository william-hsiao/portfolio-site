<template lang="pug">
  #AboutMe
    h2 About Me
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'AboutMe',
  methods: {
    ...mapMutations({
      updateTitle: 'updateTitle',
    })
  },
  mounted() {
    this.updateTitle('About Me');
  },
}
</script>

<style lang='scss' scope>
</style>
