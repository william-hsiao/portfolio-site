<template lang="pug">
  #Skills.container
    .frame
      .summary.contents.active
        h1 Other Skills
        ul
          li Graphics Design
          li Computer Repairs/Maintenance
        .spacer
        h1(@click="viewTemplate('summary', 'lang', 'fade-left')") Languages
        ul
          li English
          li Japanese
          li Chinese (Mandarin)
      .lang.contents
        .section
          h1 Languages
          .field
            .label English
            RatingBar(:value=5)
          .description
            | Native
          .field
            .label Japanese
            RatingBar(:value=4)
          .description
            | Professional Working Proficiency
          .field
            .label Chinese (Mandarin)
            RatingBar(:value=3)
          .description
            | Conversational
          .link(@click="viewTemplate('lang', 'summary', 'fade-left')")
            | ← return
</template>

<script>
import RatingBar from '@/components/RatingBar.vue'
import { transitions } from '@/assets/javascript/transition';

export default {
  name: 'Skills',
  components: {
    RatingBar
  },
  mixins: [ transitions ],
}
</script>

<style lang='scss' scoped>
#Skills {
  .spacer {
    margin-top: 50px;
  }
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
.description {
  font-size: 0.8em;
  margin-top: 1em;
  margin-bottom: 3em;
}
</style>
