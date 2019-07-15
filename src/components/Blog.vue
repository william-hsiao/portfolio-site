<template lang="pug">
  section#blog.panel
    .panel-bg
      .accent.top-left
      .accent.top-right
      .accent.bottom-left
      .accent.bottom-right
    .panel-contents(v-fade-in)
      h1 Blog &amp; Articles
      .posts-container
        .post(v-for='post in posts', :key='post.title')
          a.title(:href='post.href') {{ post.title }}
            .pubDate {{ post.pubDate }}
          .tags
            .tag(v-for='category in post.categories') {{ parseTag(category) }}
          .description {{ post.description }}
      .link
        a.button(href='https://medium.com/@william_hsiao', target="_blank") See all
</template>

<script>
export default {
  name: 'blog',

  data() {
    return {
      posts: []
    }
  },

  methods: {
    parseTag(label) {
      return label.replace(/-/g, ' ');
    }
  },

  beforeMount() {
    this.$http.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40william_hsiao')
      .then(res => {
        if (res.status !== 200) return;

        this.posts = res.data.items.slice(0, 5).map(item => {
          const title = item.title;
          const div = document.createElement('div');
          div.innerHTML = item.description;
          const description = div.querySelector('p').innerText;
          const href = item.guid;
          const pubDate = new Date(item.pubDate).toLocaleDateString('en-AU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          const categories = item.categories;

          return {
            title,
            description,
            href,
            pubDate,
            categories,
          }
        })
      });
  },
}
</script>

<style lang='scss'>
  #blog {
    h1 {
      margin: 0;
    }
    .panel-bg {
      background-color: #E7E7E7;
      transform: skew(0, 12deg);
    }

    .posts-container {
      margin-top: 50px;
    }

    .post {
      margin-bottom: 50px;

      .tags {
        margin-top: 10px;
        .tag {
          display: inline-block;
          padding: 3px 10px;
          background-color: #565656;
          color: #FFF;
          margin-bottom: 5px;
          border-radius: 5px;
          font-size: 9px;
          user-select: none;
          text-transform: capitalize;

          &:not(:last-child) {
            margin-right: 5px;
          }
        }
      }
      .title {
        font-size: 16px;
        word-break: break-all;

        &:hover {
          text-decoration: underline;
        }
      }
      .pubDate {
        display: inline-block;
        margin-left: 10px;
        font-size: 12px;
      }
    }

    .link {
      text-align: right;
    }
  }
</style>
