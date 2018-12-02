<template lang="pug">
  .rating-container
    .marked(v-for="n in rating")
    .unmarked(v-for="n in 5-rating")
</template>

<script>
export default {
  name: 'RatingBar',
  props: {
    value: Number
  },
  computed: {
    rating() {
      if (this.value < 0) return 0;
      else if (this.value > 5) return 5;
      else return this.value;
    }
  }
}
</script>

<style lang='scss'>
.rating-container {
  display: inline-flex;
  .marked, .unmarked {
    height: 15px;
    width: 15px;
    margin: 0 2px;
  }
  .marked {
    // background-color: #353535;
    background-color: var(--primary);
  }
  .unmarked {
    // background-color: #a8a8a8;
    background-color: #808080;
  }
}
</style>
