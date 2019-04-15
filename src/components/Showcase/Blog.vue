<template lang="pug">
  #Blog.container
    .frame
      .contents.active
        h1 Blogs & Articles
        // h3 Latest
        // article-container(:articles='latest', keyPrefix='latest')
        // h3 Featured
        article-container(:articles='featured', keyPrefix='featured')
        router-link.link(to='/blog')
          .button View more →
        a.medium-link(href="https://medium.com/@william_hsiao" target="_blank") Read on Medium.com
</template>

<script>
import ArticleContainer from '@/components/ArticleContainer.vue';

export default {
  name: 'Blog',
  components: {
    ArticleContainer
  },
  data() {
    return {
      latest: [
        {
          title: '',
          body: '',
          url: '',
        },
      ],
      featured: [
        {
          title: 'Job Hunting as a Software Engineering Student (Part 1)',
          body: 'Finding your first job isn’t easy, at least for the majority of people. There are so many things to look through and even more to stress about. Where do you even start? What are you even meant to say during interview but even before then, how do you even land one?',
          url: 'job-hunting-as-a-software-engineering-student-part-1',
        },
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
#Blog {
  .medium-link {
    display: block;
    margin-top: 25px;
    font-size: 12px;
  }
  h3 {
    margin-bottom: 0;
  }
}
</style>
