<template lang="pug">
  #Skills
    
    .frame
      h1 Skills
      
      .section
        h2 Other Skills
        .grid
          .field
            .label Graphics Design
            RatingBar(:value=4)
          .field
            .label Computer Maintenance
            RatingBar(:value=5)
      .section
        h2 Languages
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
</template>

<script>
// @ is an alias to /src
// import Navbar from '@/components/Navbar.vue'
import RatingBar from '@/components/RatingBar.vue'

export default {
  name: 'Skills',
  components: {
    // Navbar,
    RatingBar
  }
}
</script>

<style lang='scss'>
#Skills {
  padding-top: 100px;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  overflow-y: auto;
  .frame {
    background-color: #ffffff;
    max-width: 1000px;
    padding: 50px 50px;
    margin: auto;
    box-sizing: border-box;
    h4 {
      margin: 2em 0;
    }
  }
}
.section {
  margin-bottom: 3em;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  grid-template-rows: auto;
  grid-column-gap: 50px;
  grid-row-gap: 25px;
  justify-content: center;
  margin: 2em 3em;
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
