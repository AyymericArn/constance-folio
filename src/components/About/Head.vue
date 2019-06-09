<template>
    <div class="title">
        <h1>Hello, I'm Constance !</h1>
        <router-link :to="{name: 'home'}">
            <div ref="eye" class="eye"></div>
        </router-link>
    </div>
</template>

<script>
import bodymovin from 'lottie-web'
import anim from '@/assets/eye.json'

export default {
  name: 'Section',
  mounted () {
    this.animation = bodymovin.loadAnimation({
      container: this.$refs.eye,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: anim
    })
    this.$refs.eye.childNodes[0].style = `width: 100%; height: 100%; transform: scale(1.7) translateY(-10px)`
  }
}
</script>

<style lang="stylus" scoped>

@import url('https://fonts.googleapis.com/css?family=Volkhov&display=swap')

.title
    display flex
    justify-content space-between
    align-items center
    width 100%
    padding 40px 30px
    box-sizing border-box
    font-family 'Volkhov'

    .eye
        height 80px
        width 80px
        overflow hidden

    svg
        min-width 44px
        margin-left 20px

    h1
        display inline
        font-size 38px
        font-weight bolder
        text-align left

</style>
