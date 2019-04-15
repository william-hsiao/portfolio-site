<template lang="pug">
  #Home
    .instagram
      h2 Instagram
      h3 Monthly Cookbook
      iframe(width="100%", height="450", frameborder="no", src="https://www.instagram.com/p/Bs5UFuJB8gD/embed")
      iframe(width="100%", height="450", frameborder="no", src="https://www.instagram.com/p/BtXbTDhARVT/embed")
      iframe(width="100%", height="450", frameborder="no", src="https://www.instagram.com/p/BuoMHw1gX5l/embed")
      iframe(width="100%", height="450", frameborder="no", src="https://www.instagram.com/p/BwO18WvAlNZ/embed")
    .soundcloud
      h2 Soundcloud
      iframe(width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/575231160&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true")
</template>

<script>
import { mapMutations } from 'vuex';
import ArticleContainer from '@/components/ArticleContainer.vue';
import { twitterFeed } from '@/assets/javascript/twitterFeed';

export default {
  name: 'Extras',
  mixins: [ twitterFeed ],
  components: {
    ArticleContainer,
  },
  methods: {
    ...mapMutations({
      updateTitle: 'updateTitle',
    })
  },
  mounted() {
    this.updateTitle('Extras');
  },
  created() {
    let instagram = document.createElement('script');
    instagram.setAttribute('async', '');
    instagram.setAttribute('src', "//www.instagram.com/embed.js");
    document.head.appendChild(instagram);
  },
  data() {
    return {
    }
  },
}
</script>

<style lang='scss' scoped>
.instagram iframe {
  box-sizing: border-box;
  display: inline-block;
  max-width: 50%;
  min-width: 200px;
  height: 450px;
  padding: 0 5px;
  &:first-child {
    padding-left: 0px;
  }
  &:last-child {
    padding-right: 0px;
  }
}
</style>
