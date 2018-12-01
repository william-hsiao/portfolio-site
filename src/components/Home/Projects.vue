<template lang="pug">
  #Projects.container
    .frame
      .summary.contents.active
        h1 Projects
        .slide-container.scroll-left.scroll-right
          .slide-wrapper
            .slide.gakuhub-slide
              .image-container
                img(alt='gakuhub', src='../../assets/images/gakuhub_transparent.png')
              h3 gakuhub
              .description 
                | Building an online service that aims to provide a platform for internationals students within Japan to connect with each other. In addition, becoming a gateway for prospective students to obtain information and consult with current students on their experiences. 
              //- .link
              //-   .button(@click="viewTemplate('summary', 'gakuhub', 'fade-up')") Details
            .slide
              .image-container
                img(alt='gakuhub', src='../../assets/images/gaze_key_mock.png')
              h3 gaze-key
              .description 
                | Human-Computer Interaction research utilizing current eye tracking technology to develop an efficient typing system based only on gaze, without inputs such as blink and dwell time.
              //- .link
              //-   .button(@click="viewTemplate('summary', 'gaze-key', 'fade-up')") Details
            .slide.portfolio-slide
              .image-container
                .image-border
                  img(alt='gakuhub', src='../../assets/images/logo.png')
              h3 Portfolio
              .description 
                | This site!
              //- .link
              //-   .button(@click="viewTemplate('summary', 'portfolio', 'fade-up')") Details
      .gakuhub.contents
        h1 gakuhub
        .link(@click="viewTemplate('gakuhub', 'summary', 'fade-down')")
          | ← return
      .gaze-key.contents
        h1 gaze-key
        .link(@click="viewTemplate('gaze-key', 'summary', 'fade-down')")
          | ← return
      .portfolio.contents
        h1 Portfolio Site
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
    margin: 0 50px;
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
      width: 90%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &.gakuhub-slide .image-container {
      padding: 15px;
      background-color: #124773;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: auto;
      }
    }
    &.portfolio-slide .image-container {
      background-color: #000000;
      .image-border {
        border: 1px solid #808080;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        img {
          width: auto;
          height: 100%;
        }
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
