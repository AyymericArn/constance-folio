<template>
    <div @resize="resize" :style="`border-color: ${primaryColor}`" class="project_wrapper">
        <div ref="transitionner" :style="`background-color: ${primaryColor}`" class="transitionner"></div>
        <!-- the eye in the sky -->
        <!-- <router-link :to="{name: this.$route.params.fromPath}">
            <img :src="Eye" alt="Constance Devanne">
        </router-link> -->
        <Headd :title="section" :frompath="this.$route.params.fromPath"/>
        <div class="top">
            <h3 class="projects">projects</h3>
            <div>
                <h3>{{ title }}</h3>
                <h4>{{ caption }}</h4>
            </div>
        </div>

        <img class="illu" :src="src" :alt="alt">
        <div class="container">
          <div v-if="desktop" class="insert">
              <h5>{{ insert.title }}</h5>
              <p>{{ insert.content }}</p>
          </div>
          <p class="content">{{ content }}</p>
        </div>
        <router-link class="back" :to="{name:this.$route.params.fromPath}">
          Go back to projects
        </router-link>
    </div>
</template>

<script>

import Headd from '@/components/Shared/Headd.vue'
import Eye from '@/assets/img/oeil.svg'
import { TimelineLite, TweenLite } from 'gsap'

export default {
  name: 'Project',
  components: {
    Headd
  },
  props: {
    section: String,
    title: String,
    caption: String,
    src: String,
    alt: String,
    insert: Object,
    content: String,
    primaryColor: String,
    fromPath: String
  },
  data () {
    return {
      Eye,
      desktop: false
    }
  },
  methods: {
    resize () {
      if (window.innerWidth > 1024) {
        this.desktop = true
      } else {
        this.desktop = false
      }
    }
  },
  mounted () {
    this.resize()
    const tl = new TimelineLite()
    tl.add(TweenLite.to(
      this.$refs.transitionner,
      0.2,
      {
        opacity: 0
      }
    ))
    tl.add(
      TweenLite.to(
        this.$refs.transitionner,
        0.3,
        {
          display: 'none'
        })
    )
    tl.play()
  }
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,900&display=swap');

.project_wrapper
    text-align left
    border solid #EE6B72 6px
    color #414141
    min-height 98.7vh
    height 100%
    display flex
    flex-direction column

    .transitionner
        position absolute
        left 0
        top 0
        height 100vh
        width 100vw

    // a
    //     width: min-content;
    //     align-self: center;
    //     img
    //         margin-top 40px

    .top
        display flex
        margin-top 46px
        margin-left 7%
        flex-wrap wrap

        @media screen and (min-width 1025px) {
          margin-left 100px
          margin-right 100px
        }

        .projects
            width 25%
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 900;
            font-size: 18px;
            line-height: 23px;
            // font-variant: small-caps;
            text-transform uppercase
            color: #414141;

            @media screen and (min-width 1025px) {
              width 100%
              margin-bottom 56px
              font-size 30px
            }

        h3, h4
            font-family: 'Source Sans Pro';
            font-style: normal;
            line-height: 24px;
            color: rgba(0, 0, 0, 0.95);
            @media screen and (min-width 1025px) {
              font-size 22px
            }

        h3
            font-weight: 600;
            font-size: 16px;

        h4
            font-size: 16px;
            font-weight normal

        div
            flex 1

    img.illu
        margin-top 20px
        width 85%
        max-height: 520px;
        object-fit: cover;
        margin-left 7%

        @media screen and (min-width 1025px) {
          margin-left 100px
          margin-right 100px
        }

    .container
        margin-top 28px
        width calc(100% - 200px)
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        margin-left 7%
        line-height: 24px;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.95);
        margin-bottom 40px

        @media screen and (min-width 1025px) {
          align-items initial
          margin-top 60px
        }

        .insert
          margin-right 25%

          h5
            font-weight: 600;
            font-size: 22px;
            line-height: 33px;
            color: rgba(0, 0, 0, 0.95);

        @media screen and (min-width 1025px) {
          margin-left 100px
          margin-right 100px
        }

      a.back
        margin-bottom 26px
        padding-left 7%
        padding-right 7%
        text-align right
        font-family: Source Sans Pro
        font-style: normal
        font-weight: 900
        font-size: 16px
        line-height: 20px
        text-align: right
        text-transform: uppercase
        color: #414141
        text-decoration none

</style>
