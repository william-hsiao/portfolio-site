<template lang="pug">
  #Article
    //- h1 Title
    //- p Body

    //- img(src='../../assets/images/university-in-japan.jpg')
    h1 University in Japan, My Experience

    p Japan, the land of ramen, anime and crazy inventions sprawn across the internet. If you are reading this post, chances are, you are considering about coming to study Japan or just curious about what it is like. When I first started looking into coming to Japan, I was disappointed in the lack of information available particularly from someone who has experienced the whole system. I’m not here to persuade you to come or not but simply to hopefully provide some insight that will be useful for you. I will start off with very general topics and gradually steer towards my personal experience as a Software Engineering student at Waseda University.

    p DISCLAIMER: The contents of this post is based purely on my own experience and biases. Your experiences may and will most likely vary depending on a wide range of reasons.

    .tldr
      h2 TL;DR
      ul
        li Make sure you are clear on the reason why you want to come study in Japan

    p Just a little bit about me before I start, to give you some context of where I come from since this will be a large factor in my experience.

    p First up,

    h2 Why do you want to study in Japan?
    p Arguably the most important question you have to ask yourself is, why do you want to come study in Japan? I’m not here to tell you what is a good reason to justify coming to Japan for your education, that is something you have to determine yourself. Moving to a foreign country not just Japan is likely going to be a huge change in environment for you that will potentially change your life forever. For Japan however, it has a very unique culture that is unlike any other, even around Asia, that you will have to adapt to and perhaps even accept that you may never be able to fully integrate into. Japan is a very homogenous society with more than 98% of the population being ethnically Japanese. 

    h3 Full-time enrollment or short-term exchange?
    p Once you are set on coming to Japan, the next question you must ask yourself is whether to complete your entire degree over here or just for an exchange. 

    h2 The University Experience

    h2 Importance of Japanese Ability
    p If you plan to stay in Japan for any significant amount of time studying, Japanese ability is of utmost importance. 

    p Is it possible to get by with no Japanese? For sure, but you will be heavily limiting yourself.

    p If you want to work in Japan, depending on the position, companies tend to require a minimum of N2 if not N1 straight up.

    h2 After Graduation

    p Some final tips if you do decide to come:
    ul
      li Make the most out of this opportunity. Push yourself as much as you can outside your comfort zone. There are plenty of opportunities and resources available here that is among the top in the world.

    p Now onto the details regarding studying in the field of Science and Engineering.

    h2 University Structure

    p Perhaps I never got to know the people in my cohort that well but I felt like there was a lack of ambition or initiative to go beyond the course work.
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'BlogArticle',
  methods: {
    ...mapMutations({
      updateTitle: 'updateTitle',
    })
  },
  mounted() {
    this.updateTitle('Blog');
  },
}
</script>

<style lang='scss' scoped>
img {
  width: 100%;
}
h1, h2, h3, h4, h5, h6 {
  letter-spacing: 0;
  text-align: left;
}
ul {
  width: 100%;
  box-sizing: border-box;
}
p, a, ul {
  font-size: 12px;
  line-height: 2;
  text-align: left;
}
.tldr {
  border: 1px solid #353535;
  background-color: #f5f5f5;
  padding: 15px;
  h2 {
    margin: 0;
  }
}
</style>
