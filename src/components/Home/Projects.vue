<template lang="pug">
  #Projects.container
    .frame
      .summary.contents.active
        h1 Projects
        .slide-container.scroll-left.scroll-right
          .slide-wrapper
            .slide.repro-web-sdk-slide(@click="viewTemplate('summary', 'repro-web-sdk', 'fade-up')")
              .image-container
                .image-border
                  img(alt='repro', src='../../assets/images/repro.png')
              h3 Repro Web SDK
              .description
                | I work as one of the core members in developing the Repro Web SDK which enables user activity on web pages to be tracked with the Repro marketing service. The Web SDK was launched in December 2018 and is continuing to be developed to form one of the pillars of Repro.
            .slide.gaze-key-slide(@click="viewTemplate('summary', 'gaze-key', 'fade-up')")
              .image-container
                .image-border
                  img(alt='gakuhub', src='../../assets/images/gaze_key_mock.png')
              h3 gaze-key
              .description 
                | Human-Computer Interaction research utilizing current eye tracking technology to develop an efficient typing system based only on gaze, without inputs such as blink and dwell time.
            .slide.gakuhub-slide(@click="viewTemplate('summary', 'gakuhub', 'fade-up')")
              .image-container
                .image-border
                  img(alt='gakuhub', src='../../assets/images/gakuhub_transparent.png')
              h3 gakuhub
              .description
                | Building an online service that aims to provide a platform for internationals students within Japan to connect with each other. In addition, becoming a gateway for prospective students to obtain information and consult with current students on their experiences.
            .slide.portfolio-slide(@click="viewTemplate('summary', 'portfolio', 'fade-up')")
              .image-container
                .image-border
                  img(alt='gakuhub', src='../../assets/images/logo.png')
              h3 Portfolio
              .description 
                | I want this project to be more than just a portfolio site. I want this to be a reflection what I am capable of. This will be a project that I will constantly be working on and adding new features to in my free time so check back every so often to see what’s new!
      .repro-web-sdk.contents.details
        h1 Repro Web SDK
        .body
          p I work as one of the core members in developing the Repro Web SDK which enables user activity on web pages to be tracked with the Repro marketing service. The Web SDK was launched in December 2018 and is continuing to be developed to form one of the pillars of Repro. The SDK is written in a mix of JavaScript and TypeScript and uses a variety of testing frameworks such as Karma + Jasmine for unit testing and Testcafe + Browserstack for E2E and integration tests.
          a.button(href='https://repro.io/jp/products/web/') More about Repro Web Service (Japanese only)

          h4 About Repro
          p Repro is a easy to use analysis and marketing service that is widely used in 50+ countries and has notable domestic customers such as KDDI, TV Tokyo and DeNA. It provides analytic tools and statistics such as user retention, access, funnelling, etc and allows targeted marketing to an audience that meet the set criteria. With Repro, you can view screen recording of actual users and send out push notifications and messages to users through the web interface.
          a.button(href='https://repro.io/en/') More about Repro
        .link(@click="viewTemplate('repro-web-sdk', 'summary', 'fade-down')")
          | ← return
      .gaze-key.contents.details
        h1 gaze-key
        .body
          p The ability to input text in an electronic device is one of the most powerful interaction methods available to a user. While traditional keyboards have asserted themselves as the primary hands-on input method on almost all commercial computer systems, there is yet to be an outstanding method for hands-free input, more specifically in the field utilizing eye tracking. There has been a lot of research within this field, most notably in assisting individuals with disabilities, and has improved with alongside the advancement of eye tracking technology. As we head more towards the world of filled with Virtual Reality (VR) or perhaps more notably, Artificial Reality (AR), an efficient hands-free system of text input becomes ever so important to further unlock potential interactions using these technologies.

          p In this research, I aim to create an input system using pure eye tracking that is easy and efficient to use within the graphical interface provided by a head mounted displays (HMD). The main scenario this research is based upon is the use within a head-up display (HUD) from a device such as glasses, that is connected with a smartphone to provide basic notification and interactions without physically interacting with the smartphone itself. There is not expectation for such a method to rival traditional keyboards but has the goal to allow simple interactions such as text messaging or inputting keywords for a search.
        .link(@click="viewTemplate('gaze-key', 'summary', 'fade-down')")
          | ← return
      .gakuhub.contents.details
        h1 gakuhub
        .body
          p gakuhub is a personal side project that I started aimed to provide a platform for internationals students within Japan to connect with each other. When I first started looking into completing my Bachelor’s degree in Japan, I found that there was a lack of first-hand resource available for me to consult with and see if is was for me. Even after getting to university in Japan, I found that there was little infrastructure available to connect the international students of different year groups.

          p I want this service to become a gateway for prospective students to obtain information and consult with current students on their experiences. Even after arriving in Japan, provide a platform to which anyone may seek help whether to setup everything they need, deal with the language barrier most encounter on arrival or simply to find new people and have a community to connect with.

          p The frameworks used for this project are:
          ul
            li Front-end: Node.js with Vue CLI - webpack
            li Back-end: Loopback (Node.js) Express Server
            li Database: MongoDB

        .link(@click="viewTemplate('gakuhub', 'summary', 'fade-down')")
          | ← return
      .portfolio.contents.details
        h1 Portfolio Site
        .body 
          p I want this project to be more than just a portfolio site. I want this to be a reflection what I am capable of. Everything from the design to custom animations has been created by me on top of the Vue framework. This will be a project that I will constantly be working on and adding new features to in my free time so check back every so often to see what’s new!

          p As of now, the site is still fairly bare-bones but I would like to keep expanding on top of it including:
          ul
            li Blog
            li Small tools
            li Updates as I keep developing my skills so that this will be a true reflection of my work

          h5 Planned to support more features:
          p Vue CLI with Server-side Rendering served on a Express server
            ul
              li Vue.js
              ul
                li Vue Router
                li Vuex
                li Node.js Backend with MySQL database

        .link(@click="viewTemplate('portfolio', 'summary', 'fade-down')")
          | ← return
</template>

<script>
import { transitions } from '@/assets/javascript/transition';

export default {
  name: 'Projects',
  mixins: [ transitions ],
}
</script>

<style lang='scss' scoped>
#Projects {
  .summary {
    max-height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    h1 {
      margin-top: 50px;
    }
  }
  .details {
    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 14px;
      text-align: left;
      p, a {
        display: inline-block;
        margin-top: 0;
      }
      ul {
        margin: 0;
      }
      .button {
        margin: auto;
      }
    }
  }
  .slide-container {
    position: relative;
    margin-top: 20px;
    flex: 1;
    display: flex;
    &.scroll-left::before {
      content: '';
      width: 15px;
      position: absolute;
      left: 0;
      top: 0;
      height: calc(100% - 10px);
      background: linear-gradient(to right, var(--panel-background), rgba(255,255,255,0))
    }
    &.scroll-right::after {
      content: '';
      width: 15px;
      position: absolute;
      right: 0;
      height: calc(100% - 10px);
      top: 0;
      background: linear-gradient(to left, var(--panel-background), rgba(255,255,255,0))
    }
  }
  .slide-wrapper {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 50px;
    &::-webkit-scrollbar {
      height: 10px;
    }
    &::-webkit-scrollbar-track {
      background: linear-gradient(var(--panel-background), var(--panel-background) 44%, var(--primary) 45%, var(--primary) 55%, var(--panel-background) 56%, var(--panel-background));
    }
    &::-webkit-scrollbar-thumb {
      background: #808080;
      -webkit-border-radius: 3px;
      border-radius: 3px;
    }
  }
  .slide {
    scroll-snap-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
    margin: 0 30px;
    cursor: pointer;
    border-top: 1px solid rgba(255,255,255,0);
    border-bottom: 1px solid rgba(255,255,255,0);
    padding: 10px;
    &:hover {
      border-color: #808080;
      background-color: var(--background-alt);
      border-radius: 3px;
    }
    h1 {
      flex-shrink: 0;
    }
    .description {
      &::-webkit-scrollbar {
        width: 3px;
      }
      &::-webkit-scrollbar-track {
        background-color: var(--primary);
      }
      &::-webkit-scrollbar-thumb {
        background-color: #808080;
      }
      flex-shrink: 1;
      font-size: 12px;
      overflow-y: auto;
      overflow-x: hidden;
      width: 100%;
    }
    .image-container {
      border: 5px solid var(--primary);
      box-sizing: border-box;
      height: 150px;
      flex-shrink: 0;
      max-width: 70vw;
      margin-top: 10px;
      width: 90%;
      .image-border {
        border: 1px solid #808080;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    &.gakuhub-slide .image-border {
      padding: 15px;
      background-color: #124773;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: auto;
      }
    }
    &.portfolio-slide .image-border {
      background-color: #000000;
      img {
        width: auto;
      }
    }
    &.repro-web-sdk-slide .image-border {
      background-color: #333744;
      img {
        box-sizing: border-box;
        padding: 5% 0;
        width: auto;
      }
    }
  }
  .placeholderImg {
    width: 100%;
    background-color: var(--panel-background);
  }
}
.link {
  margin-top: 10px;
  cursor: pointer;
}
</style>
