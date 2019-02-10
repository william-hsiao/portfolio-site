<template lang="pug">
  #PageNotFound
    h2 Page Not Found
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'PageNotFound',
  methods: {
    ...mapMutations({
      updateTitle: 'updateTitle',
    })
  },
  mounted() {
    this.updateTitle('404 (>.<)');
  },
}
</script>

<style lang='scss' scoped>
</style>
