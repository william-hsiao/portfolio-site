<template lang="pug">
  #Article
    h1 Job Hunting as a Software Engineering Student (Part 1)
    p Finding your first job isn’t easy, at least for the majority of people. There are so many things to look through and even more to stress about. Where do you even start? What are you even meant to say during interview but even before then, how do you even land one?

    .highlight-box
      h2 Standard Disclaimer:
      p I am by no means an expert in any way. This article is based on what I personally experienced, heard from other people and what I wished I had done. Your experiences will more than likely differ from mine but I hope this will at least provide you with a few things to think about.

    h2 Baby steps: What you should be doing now
    p Months or perhaps even a year before you even begin thinking about job interviews, it’s important to outline for yourself things that will set you apart from other candidates. This can be anything from technical knowledge, communication skills or even pure passion. Knowing this will help you outline your initial path to begin searching.
    p Once you’ve outlined your strengths, ask yourself how can you demonstrate it to other people? This is where a big divide in the candidates lies. Words are just words and anyone can say them. Having something to show interviewers to backup those words even before the interview will make everything easier down the road.

    h3 Work on a project
    p Working on a project is, in my opinion, the most valuable thing you can have even if you’re still in school. Whether it be starting your own or joining an existing project, having something you are working on pushes you to go beyond coursework and get exposed to frameworks, systems, protocols, etc that you may never get the opportunity to touch in your classes. Not sure which which career path to follow? Start a project around what you’re most interested in and see how it goes. With the internet, the only barrier to working on a project is yourself. If you’re finding it hard to stay motivated, don’t be afraid to stop and try your hand on another project. The goal right now is to get yourself familiar with at least one set of systems from which you can further expand your skill set. Rather than following tutorials, I personally find it easier to come up with a concept and learn as you go while you slowly build the program you envisioned. Lastly, if you’re more into the front-end or design, make yourself a portfolio site! You’ll be grateful of yourself for doing so.

    h3 Get yourself an internship
    p No matter how much you study by yourself, it is hard to replicate the experience you get working with a team in a production environment. Being a software engineer isn’t only about how well you can write code, it’s also about how well you can work along other people and produce a final product. There’s also the indisputable fact that you don’t know what you don’t know. Having a mentor that can guide you down a path that’s tailored to you can accelerate your personal growth exponentially and open the doors to many more career paths. Working with a team also allows you to meet people who already have years of experience working within a wide range of industries. Try to make the most out of this opportunity and ask around, get some insight into fields that you are curious about. There may be times where you feel like it isn’t working out for you but try sticking with it. Often, you don’t realize how much you’ve learnt until later on where you’ll start to reap all the benefits and really enjoy the work.

    h4 Internships sound great but how do I get one? 
    p Sadly, there is no simple answer but if you have already been working on a project, that’ll become the ace up your sleeve. Start applying for positions and make sure you mention your project. If you can make your project (even if it’s only partially working) accessible online, send them the link. Not only does having an active project show initiative, once you’re in the interview, it’s far easier to explain to the interviewers your thinking process on something you are already very familiar with. Don’t be afraid to hijack the interview and steer it in the direction you want. If you don’t, you might not be able to show them what you’ve got.


    h3 The next step
    p Now that you’ve got some actual skills and experience under your belt, it’s time to begin the search (Part 2 coming soon).
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
    this.updateTitle('Blogs & Articles');
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
.highlight-box {
  border: 1px solid #353535;
  background-color: #f5f5f5;
  padding: 15px;
  h2 {
    margin: 0;
  }
}
</style>
