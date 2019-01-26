export const twitterFeed = {
  created() {
    let feed = document.createElement('script');
    feed.setAttribute('async', '');
    feed.setAttribute('src',"https://platform.twitter.com/widgets.js")
    feed.setAttribute('charset',"utf-8");
    document.head.appendChild(feed);
  }
}
