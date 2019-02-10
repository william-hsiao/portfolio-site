<template lang="pug">
  #AboutMe
    .article.main
      p.indent I am an aspiring full-stack developer currently based in Tokyo. Although my work so far has mostly been around web development, I am always eager to venture into new fields and face new challenges. I believe that to create the best applications, one must have a solid understanding of all components not only on the technical aspects but also how each component contributes to the greater purpose of the project. It is with this mindset that I step into projects and aim to learn as much as I can from each experience. Even if it’s something I am already familiar with, there is always more to gain, more to discover, more to improve upon.
      i "Jack of all trades, but master of none"
      p is a phrase that is quite befitting of me yet one that I despise. Although I always strive to be an all-rounder in the fields I commit to in order to open the doors to as many opportunities possible, I cannot say that I am satisfied with where I am now. There is always more to learn and that is what drives me to keep improving myself everyday, constantly chasing to be the best that I can be.
      p I want to challenge the world.
      p I want to develop a product that changes lives.
      p I want to meet and work with like-minded people and see how far we can go.
    .article
      h3 Work Experience
      .item
        h4 Software Engineering Intern, Repro Inc.
        h6 March 2018 - Present
        p Software engineering intern working as a core member in several large projects ranging from UI/UX development to SDK development. The work is mainly conducted in Japanese and involves constant communication with team members and work within a live production environment utilizing AWS.
      .item
        h4 Teaching Assistant, Waseda University
        h6 April 2017 - Present
        p Assisting in teaching programming to students in the international program using English
        p Courses: 
        ul
          li Introduction to Programming (C)
          li Intermediate Programming (C)
          li Advanced Java Programming (Java)
          li Numerical Analysis
          li Survey of Modern Mathematical Sciences A
      .item
        h4 Senior Managing Assistant, SIAM
        h6 March 7th - March 10th 2018
        p Assisting with the Society for Industrial and Applied Mathematics (SIAM) 18 Conference on Parallel Processing for Scientific Computing
        ul
          li Overseeing equipment 
          li Coordinating assistants to sessions 
          li Responding to issues during the sessions

    .article.languages
      h3 Languages
      .item
        h4 English
        RatingBar.medium(:value=5)
        p Native
      .item
        h4 Japanese
        RatingBar.medium(:value=4)
        p Working Proficiency
      .item
        h4 Chinese (Mandarin)
        RatingBar.medium(:value=3)
        p Conversational

    .article
      h3 Education
      .item
        h4 Bachelors of Engineering, Waseda University
        h6 Sepetember 2015 - September 2019
        p Computer Science and Engineering
        p Nakajima Lab
      .item
        h4 Bachelor of Engineering/IT, University of Queensland
        h6 February 2015 - Jun 2015
        p Software Engineering
        p *Incomplete - Completed one semester before leaving to attend Waseda University
      .item
        h4 Highschool Diploma, Brisbane Grammar School
        h6 January 2010 - November 2014

    .article
      h3 Interests
      .item
        h4 Tennis
        ul
          li 10+ years
          li Brisbane Grammar School 2nds Tennis Team (2014)
          li Tennis Brisbane Superleague Fixtures Northside Division 5 Finalists (2013)
      .item
        h4 Archery
        ul
          li 2.5+ years
          li Waseda Sagittarius Archery Circle
      .item
        h4 Violin
        ul
          li 10+ years
          li Australian Music Examination Board 8th Grade
          li 
            | Brisbane Grammar School Music Program
            ul 
              li Brisbane Grammar Symphony Orchestra
              li Chamber Strings Ensemble
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import RatingBar from '@/components/RatingBar.vue'

export default {
  name: 'AboutMe',
  components: {
    RatingBar
  },
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

<style lang='scss' scoped>
.article {
  margin-bottom: 75px;
}
</style>
