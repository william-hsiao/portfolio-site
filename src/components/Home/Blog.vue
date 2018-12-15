<template lang="pug">
  #Blog.container
    .frame
      .contents.active
        h1 Blog
        h3 Latest
        .article-container
          .article
            .img
            .body
              h4 {{ latest.title }}
              | {{ latest.body }}
        h3 Featured
        .article-container
          .article(v-for="article in featured")
            .img
            .body
              h4 {{ article.title }}
              | {{ article.body }}
        .link
          .button View more →
        a.medium-link(href="https://medium.com/@william_hsiao" target="_blank") Read on Medium.com
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      latest: {
        title: 'University in Japan, my experience',
        body: 'This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. ',
        imgURL: '',
      },
      featured: [
        {
          title: 'University in Japan, my experience',
          body: 'This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. ',
          imgURL: '',
        },
        {
          title: 'University in Japan, my experience',
          body: 'This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. ',
          imgURL: '',
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
  .article-container {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: auto;
    .article {
      display: flex;
      height: 100px;
      margin: 15px 0;
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
}
</style>
