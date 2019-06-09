<template>
    <div class="title">
        <!-- <router-link :to="{name: this.$route.params.fromPath}">
            <img :src="Eye" alt="Constance Devanne">
        </router-link> -->
        <router-link :to="{name: frompath}">
          <div ref="eye" class="eye"></div>
        </router-link>
        <div class="wrapper">
          <h1>{{ title }}</h1>
          <slot></slot>
        </div>
    </div>
</template>

<script>
import Eye from '@/assets/img/oeil.svg'
import bodymovin from 'lottie-web'
import anim from '@/assets/eye.json'

export default {
  name: 'Headd',
  props: {
    title: String,
    frompath: String
  },
  data () {
    return {
      Eye
    }
  },
  mounted () {
    this.animation = bodymovin.loadAnimation({
      container: this.$refs.eye,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: anim
    })
    this.$refs.eye.childNodes[0].style = `width: 100%; height: 100%; transform: scale(1.7)`
  }
}
</script>

<style lang="stylus" scoped>

@import url('https://fonts.googleapis.com/css?family=Volkhov&display=swap')

div.title
    width 100%
    padding 40px 30px
    box-sizing border-box
    font-family 'Volkhov'

    a
      width: min-content;
      align-self: center;
      margin auto

    .eye
      height 80px
      width 80px
      margin auto
      overflow hidden

      svg
        transform scale(1.5)

        path:first-of-type
          fill-opacity 0

    .wrapper
      display flex
      justify-content space-between
      align-items center

      svg
          min-width 44px
          margin-left 20px

      h1
          display inline
          font-size 38px
          font-weight bolder
          text-align left
          margin-top 30px

          @media screen and (min-width 1025px) {
            font-size 44px
            margin-left 70px
          }

</style>
