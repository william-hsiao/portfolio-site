<template lang="pug">
  .article-container
    .empty(v-if="articles.length === 0")
      | No entries found
    router-link.article(v-for="(article, index) in articles", :to='getLink(article.url)', :key='getKey(index)')
      h4 {{ article.title }}
      | {{ article.body }}
</template>

<script>
export default {
  name: 'ArticleContainer',
  props: {
    articles: Array,
    keyPrefix: String,
  },
  methods: {
    getLink(url) {
      return url ? `/blog/${url}` : this.$route.path;
    },
    getKey(index) {
      return `${this.keyPrefix}-${index}`;
    },
  },
}
</script>

<style lang='scss' scoped>
.article-container {
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: auto;
  .article {
    max-height: 100px;
    margin: 15px 0;
    padding: 10px;
    overflow: hidden;
    text-align: left;
    font-size: 10px;
    h4 {
      font-size: 14px;
      margin-top: 0;
      margin-bottom: 10px;
      letter-spacing: initial;
    }
    &:hover {
      background-color: var(--background-alt);
      // border-top: 1px solid var(--secondary);
      // border-bottom: 1px solid var(--secondary);
    }
  }
  .empty {
    color: #5b5b5b;
  }
}
</style>
