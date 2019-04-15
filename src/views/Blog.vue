<template lang="pug">
  #Blog
    // h2 Latest
    article-container(:articles="articles")
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ArticleContainer from '@/components/ArticleContainer.vue';
import { twitterFeed } from '@/assets/javascript/twitterFeed';

export default {
  name: 'Blog',
  components: {
    ArticleContainer,
  },
  methods: {
    ...mapMutations({
      updateTitle: 'updateTitle',
    })
  },
  mounted() {
    this.updateTitle('Blogs & Articles');
  },
  data() {
    return {
      latest: {
        title: '',
        body: '',
        url: '',
      },
      articles: [
        {
          title: 'Job Hunting as a Software Engineering Student (Part 1)',
          body: 'Finding your first job isn’t easy, at least for the majority of people. There are so many things to look through and even more to stress about. Where do you even start? What are you even meant to say during interview but even before then, how do you even land one?',
          url: 'job-hunting-as-a-software-engineering-student-part-1',
        },
      ]
    }
  },
}
</script>

<style lang='scss' scoped>
.socials {
  display: flex;
  margin-top: 50px;
  .left-panel {
    flex-grow: 0;
    min-width: 200px;
    margin-right: 15px;
  }
  .right-panel {
    flex-grow: 1;
  }
}
</style>
