<template>
  <div :style="`border-color: ${primaryColor}`" class="project" ref="projects">
    <div ref="transitionnerin" :style="`background-color: ${primaryColor}`" class="transitionnerin"></div>
    <div ref="transitionnerout" :style="`background-color: ${primaryColor}`" class="transitionnerout"></div>
    <Headd :title="title" frompath="home"/>

    <div class="content">
      <h3>
        projects
      </h3>
      <div class="projects">
        <router-link
            @click.native="open"
            v-for="(project, key) in projects"
            :key="key"
            :to="{
                name: 'project',
                params: {
                    section: title,
                    title: project.title,
                    caption: project.caption,
                    content: project.content,
                    primaryColor: primaryColor,
                    insert: project.insert,
                    src: project.src,
                    alt: project.alt,
                    fromPath,
                    primaryColor

        }}">
            <ProjectThumb
            :title="project.title"
            :caption="project.caption"
            :primaryColor="primaryColor"
            :src="project.src"
            />
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Headd from '@/components/Shared/Headd.vue'
import ProjectThumb from '@/components/Projects/ProjectThumb.vue'
import { TweenLite } from 'gsap'

export default {
  name: 'motion',
  components: {
    Headd,
    ProjectThumb
  },
  props: {
    section: String,
    title: String,
    projects: Array,
    primaryColor: String
  },
  data () {
    return {
      fromPath: this.$route.name
    }
  },
  methods: {
    open () {
      const desktop = window.innerWidth > 1150
      TweenLite.to(
        this.$refs.transitionnerout,
        0.2,
        {
          transformOrigin: 'top left',
          width: desktop ? '165vw' : '170vh',
          height: desktop ? '165vw' : '170vh'
        }
      )
    }
  }
}
</script>

<style lang="stylus" scoped>

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,900&display=swap');

.project
  border solid #EE6B72 6px
  min-height 98.7vh
  height 100%
  color #414141

  .transitionnerin
      position absolute
      left -25vw
      top -25vw
      height 165vw
      width 165vw
      border-radius 50%
      z-index 10

  .transitionnerout
      position absolute
      top -25vh
      left -25vh
      width 0
      height 0
      z-index 10
      border-radius 50%

      @media screen and (min-width 1025px) {
        top -50vw
        left -50vw
      }

  .content
    display flex
    margin-top 50px

    @media screen and (min-width 1025px) {
      flex-wrap wrap
    }

    h3
      margin-top 50px
      width 25%
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 23px;
      text-transform: uppercase;
      // font-variant: small-caps;
      color: #414141;
      position fixed

      @media screen and (min-width 1025px) {
        position relative
        width 100%
        text-align left
        margin-left 100px
        margin-top 0
        font-size 30px
      }

    .projects
    //   margin-top 50px
      flex 1
      text-align left
      font-family: 'Source Sans Pro';
      font-style: normal;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.95);
      margin-left 25%

      @media screen and (min-width 1025px) {
        flex-wrap wrap
        margin-bottom 85px
      }

      a

        @media screen and (min-width 1025px) {
          width 45%
          display inline-block
        }

        h3, h4
          text-decoration none
          color: rgba(0, 0, 0, 0.95);

      @media screen and (min-width 1025px) {
        margin-left 100px
        margin-right 100px
        width 50%
        justify-content: space-between
        display: flex
      }

</style>
