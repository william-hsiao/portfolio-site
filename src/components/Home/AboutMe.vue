<template lang="pug">
  #AboutMe.container
    .frame
      .summary.contents.active
        h1.article-link(@click="changeArticle('base')") About Me
        .field-container
          .section.outline
            .field.article-link(@click="changeArticle('experience')")
              h3.label Current Position:
              .body
                p Software Engineering Intern
                span Repro Inc.
            .field.article-link(@click="changeArticle('languages')")
              h3.label Languages:
              .body
                p English, Japanese, Chinese (Mandarin)
            .field.article-link(@click="changeArticle('education')")
              h3.label Education: 
              .body 
                p Bachelors of Engineering
                span Computer Science and Engineering
                span Waseda University, Tokyo, Japan
                .subscript Graduate September 2019
            .field.article-link(@click="changeArticle('interests')")
              h3.label Interests:
              .body
                p Tennis, Archery, Violin
            .field.locations
              .body
                p Taiwan
                span Taoyuan
              .arrow →
              .body 
                p Australia
                span Brisbane
              .arrow →
              .body 
                p Japan
                span Tokyo
          .section.article-container
            transition(name="fade" mode="out-in")
              .article.main(v-if="showArticle === 'base'", key="1")
                p.indent I am an aspiring full-stack developer currently based in Tokyo. Although my work so far has mostly been around web development, I am always eager to venture into new fields and face new challenges. I believe that to create the best applications, one must have a solid understanding of all components not only on the technical aspects but also how each component contributes to the greater purpose of the project. It is with this mindset that I step into projects and aim to learn as much as I can from each experience. Even if it’s something I am already familiar with, there is always more to gain, more to discover, more to improve upon.
                i "Jack of all trades, but master of none"
                p is a phrase that is quite befitting of me yet one that I despise. Although I always strive to be an all-rounder in the fields I commit to in order to open the doors to as many opportunities possible, I cannot say that I am satisfied with where I am now. There is always more to learn and that is what drives me to keep improving myself everyday, constantly chasing to be the best that I can be.
                p I want to challenge the world.
                p I want to develop a product that changes lives.
                p I want to meet and work with like-minded people and see how far we can go.
              .article(v-if="showArticle === 'experience'", key="2")
                h3 Work Experience
                .item
                  h4 Software Engineering Intern, Repro Inc.
                  h6 March 2018 - Present
                  p Software engineering intern working as a core member in several large projects ranging from UI/UX development to SDK development. The work is mainly conducted in Japanese and involves constant communication with team members and work within a live production environment utilizing AWS.
                .item
                  h4 Teaching Assistant, Waseda University
                  h6 April 2017 - Present
                  p Assisting in teaching programming to students in the international program using English
                  p Courses: 
                  ul
                    li Introduction to Programming (C)
                    li Intermediate Programming (C)
                    li Advanced Java Programming (Java)
                    li Numerical Analysis
                    li Survey of Modern Mathematical Sciences A
                .item
                  h4 Senior Managing Assistant, SIAM
                  h6 March 7th - March 10th 2018
                  p Assisting with the Society for Industrial and Applied Mathematics (SIAM) 18 Conference on Parallel Processing for Scientific Computing
                  ul
                    li Overseeing equipment 
                    li Coordinating assistants to sessions 
                    li Responding to issues during the sessions
                .link(@click="changeArticle('base')")
                  | ← return
              .article.languages(v-else-if="showArticle === 'languages'", key="3")
                h3 Languages
                .item
                  h4 English
                  RatingBar.medium(:value=5)
                  p Native
                .item
                  h4 Japanese
                  RatingBar.medium(:value=4)
                  p Working Proficiency
                .item
                  h4 Chinese (Mandarin)
                  RatingBar.medium(:value=3)
                  p Conversational
                .link(@click="changeArticle('base')")
                  | ← return
              .article(v-else-if="showArticle === 'education'", key="4")
                h3 Education
                .item
                  h4 Bachelors of Engineering, Waseda University
                  h6 Sepetember 2015 - September 2019
                  p Computer Science and Engineering
                  p Nakajima Lab
                .item
                  h4 Bachelor of Engineering/IT, University of Queensland
                  h6 February 2015 - Jun 2015
                  p Software Engineering
                  p *Incomplete - Completed one semester before leaving to attend Waseda University
                .item
                  h4 Highschool Diploma, Brisbane Grammar School
                  h6 January 2010 - November 2014
                .link(@click="changeArticle('base')")
                  | ← return
              .article(v-else-if="showArticle === 'interests'", key="5")
                h3 Interests
                .item
                  h4 Tennis
                  ul
                    li 10+ years
                    li Brisbane Grammar School 2nds Tennis Team (2014)
                    li Tennis Brisbane Superleague Fixtures Northside Division 5 Finalists (2013)
                .item
                  h4 Archery
                  ul
                    li 2.5+ years
                    li Waseda Sagittarius Archery Circle
                .item
                  h4 Violin
                  ul
                    li 10+ years
                    li Australian Music Examination Board 8th Grade
                    li 
                      | Brisbane Grammar School Music Program
                      ul 
                        li Brisbane Grammar Symphony Orchestra
                        li Chamber Strings Ensemble
                .link(@click="changeArticle('base')")
                  | ← return
</template>

<script>
import RatingBar from '@/components/RatingBar.vue'

export default {
  name: 'AboutMe',
  components: {
    RatingBar
  },
  data() {
    return {
      showArticle: 'base',
    }
  },
  methods: {
    changeArticle(article) {
      this.showArticle = article;
    }
  }
}
</script>

<style lang='scss' scoped>
#AboutMe {
  .frame {
    display: flex;
    .contents {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    @media (max-width: 800px) {
      .field-container {
        flex-direction: column;
        height: auto;
        max-height: none;
        .section {
          width: auto;
          margin-bottom: 25px;
          &.outline {
            padding-right: 0;
            padding-bottom: 25px;
            border-right: none;
            border-bottom: 1px solid var(--background-alt);
          }
          &.article-container {
            margin-left: 0;
          }
        }
      }
    }
  }
  .field-container {
    display: flex;
    margin-top: 25px;
    height: calc(100vh - 200px - 100px);
    max-height: 600px;
  }
  .section {
    width: 50%;
    display: flex;
    flex-direction: column;
    &.outline {
      padding-right: 10px;
      border-right: 1px solid var(--background-alt)
    }
    &.article-container {
      margin-left: 30px;
      text-align: left;
      font-size: 14px;
      color: var(--secondary);
      h3 {
        color: var(--primary);
        text-align: center;
      }
      h4 {
        letter-spacing: 0;
        margin: 0;
      }
      h6 {
        letter-spacing: 0;
        font-size: 10px;
        text-align: right;
        margin: 5px 0;
      }
      ul {
        // margin-left: 15px;
        width: 90%;
        box-sizing: border-box;
        margin: auto;
      }
      p, i, li {
        font-size: 12px;
      }
      p {
        margin: 0;
        &.indent {
          text-indent: 30px;
        }
      }
      i {
        display: block;
        text-align: center;
        margin: 5px;
      }
    }
  }
  
  .article {
    height: 100%;
    overflow-y: auto;
    padding-right: 14px;
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background: linear-gradient(to left, var(--panel-background), var(--panel-background) 44%, var(--primary) 45%, var(--primary) 55%, var(--panel-background) 56%, var(--panel-background));
    }
    &::-webkit-scrollbar-thumb {
      background: #808080;
      -webkit-border-radius: 3px;
      border-radius: 3px;
    }
    .item {
      margin-bottom: 15px;
    }
    &.main {
      p, i {
        margin-bottom: 20px;
      }
    }
  }
  
  .link {
    margin-top: 10px;
    text-align: center;
  }
  
  .article-link {
    border-top: 1px solid rgba(255,255,255,0);
    border-bottom: 1px solid rgba(255,255,255,0);
    border-radius: 3px;
    padding: 10px;
    cursor: pointer;
    &:hover {
      border-color: #808080;
      background-color: var(--background-alt);
    }
  }
  
  .field {
    display: flex;
    margin-bottom: 25px;
    text-align: left;
    .label {
      margin-right: 25px;
      width: 100px;
      flex-shrink: 0;
      margin-top: 0;
      margin-bottom: 0;
      letter-spacing: 0;
    }
    .body {
      p {
        margin: 0;
      }
      span {
        display: block;
        font-size: 12px;
      }
      .subscript {
        font-size: 8px;
        margin-top: 5px;
      }
    }
  }
  .locations {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    .body span {
      font-size: 10px;
    }
    .arrow {
      margin: 0 15px;
    }
  }
}

.placeholderImg {
  width: 150px;
  height: 150px;
  border: 1px solid var(--primary);
  border-radius: 75px;
  margin: auto;
  margin-bottom: 50px;
}
.languages {
  .item {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    .rating-container {
      margin: 15px 0;
    }
  }
  p {
    font-size: 12px;
  }
}
</style>
