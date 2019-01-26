<template lang="pug">
  .article-container
    router-link.article(v-for="(article, index) in articles", :to='getLink(article.url)', key='index')
      .img
      .body
        h4 {{ article.title }}
        | {{ article.body }}
</template>

<script>
export default {
  name: 'ArticleContainer',
  props: {
    articles: Array,
  },
  methods: {
    getLink(url) {
      return url ? `/blog/${url}` : this.$route.path;
    }
  }
}
</script>

<style lang='scss' scoped>
.article-container {
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: auto;
  .article {
    display: flex;
    height: 100px;
    margin: 15px 0;
    padding: 10px;
    &:hover {
      background-color: var(--background-alt);
      // border-top: 1px solid var(--secondary);
      // border-bottom: 1px solid var(--secondary);
    }
    .img {
      flex-shrink: 0;
      height: 100px;
      width: 178px;
      border: 1px solid var(--secondary);
      margin-right: 25px;
      @media (max-width: 800px) {
        display: none;
      }
    }
    .body {
      overflow: hidden;
      height: 100%;
      text-align: left;
      font-size: 10px;
      h4 {
        font-size: 12px;
        margin-top: 0;
        margin-bottom: 5px;
        letter-spacing: initial;
      }
    }
  }
}
</style>
