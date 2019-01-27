<template lang="pug">
  #Blog.container
    .frame
      .contents.active
        h1 Blog
        h3 Latest
        article-container(:articles='latest', keyPrefix='latest')
        h3 Featured
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
          title: 'University in Japan, my experience',
          body: 'This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. ',
          imgURL: '',
          url: 'university-in-japan',
        },
      ],
      featured: [
        {
          title: 'University in Japan, my experience',
          body: 'This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. ',
          imgURL: '',
          url: 'university-in-japan',
        },
        {
          title: 'University in Japan, my experience',
          body: 'This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. ',
          imgURL: '',
          url: 'university-in-japan',
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
