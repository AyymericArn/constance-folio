<template>
    <div>
        <div ref="transitionner" class="transitionner"></div>
        <!-- <router-link class="logo" :to="{name : ''}">Constance Devanne</router-link> -->
        <router-link data-color="#595959" @expansion="emphase" @click.native="expand" ref="card-about" :to="{name : 'about', top: 0}">
            <Card
                title="Constance Devanne"
                desc="Young digital designer"
                caption="Discover Things About Me"
            >
                <div ref="eye" class="eye"></div>

            </Card>
        </router-link>

        <router-link data-color="#ee6b71" @expansion="emphase" @click.native.prevent="expand" ref="card-motion" :to="{name : 'motion', params:{fromPath: 'home'}}">
            <Card
                title="Motion Design"
                caption="Discover My Motion Projects"
            >
            </Card>
        </router-link>

        <router-link data-color="#6b6991" @expansion="emphase" @click.native="expand" ref="card-ui" :to="{name : 'ui', params:{fromPath: 'home'}}">
            <Card
                title="UX/UI Design"
                caption="Discover Things About Me"
            />
        </router-link>

        <router-link data-color="#b9dae3" @expansion="emphase" @click.native="expand" ref="card-print" :to="{name : 'print', params:{fromPath: 'home'}}">
            <Card
                title="Print"
                caption="Discover Things About Me"
            />
        </router-link>
    </div>
</template>

<script>
import Card from '@/components/Home/Card.vue'
import { TweenLite, TimelineLite } from 'gsap'
// import { clearInterval } from 'timers'

// eye
import bodymovin from 'lottie-web'
import anim from '@/assets/eye.json'

export default {
  name: 'Navigation',
  components: {
    Card
  },
  data () {
    return {
      positions: []
    }
  },
  // beforeRouteLeave (to, from, next) {
  //   console.log(to)
  //   console.log('puuuuute')
  //   setTimeout(() => {
  //     console.log('pute')
  //     next()
  //   }, 300)
  // },
  methods: {
    expand (e) {
      this.event()
      const tl = new TimelineLite()
      const vals = e.currentTarget.getBoundingClientRect()
      this.vals = vals
      // const color = e.currentTarget.dataset.color
      // console.log(this.$children[0].$el.offsetHeight)
      // scrollBy(0, this.$children[0].$el.offsetHeight)
      // let x = 1
      // let interval = setInterval(() => {
      //   x *= 2
      //   window.scrollBy(0, x)
      // }, 50)
      // setTimeout(() => {
      //   clearInterval(interval)
      // }, 300)
      TweenLite.to(
        e.currentTarget.childNodes[0],
        0.3,
        {
          ease: Power3.easeInOut,
          opacity: 0
        }
      )
      tl.add(TweenLite.to(
        e.currentTarget,
        0.3,
        {
          ease: Power3.easeInOut,
          width: '100vw',
          height: '101vh',
          position: 'relative',
          top: -vals.top,
          // backgroundColor: 'white',
          color: 'black'
        }
      ))
      // tl.add(TweenLite.to(
      //   this.$refs.transitionner,
      //   0.2,
      //   {
      //     transformOrigin: 'top left',
      //     height: '165vw',
      //     width: '165vw',
      //     backgroundColor: color
      //   }
      // ))
      tl.play()
    },
    emphase (e) {
      TweenLite.to(
        e.target,
        0.1,
        {
          opacity: 0,
          marginTop: 100
        }
      )
    },
    event () {
      this.$emit('expansion')
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
    this.$refs.eye.childNodes[0].style = `width: 100%; height: 100%; transform: scale(1.7) translateY(-10px)`
    for (const card of this.$children) {
      // card.props.to.params.vals = Math.round(card.$el.getBoundingClientRect())
      this.positions.push(Math.round(card.$el.getBoundingClientRect().top))
    }
  }
}
</script>

<style lang="stylus" scoped>

$section-number = 4
$border-width = 6px

.transitionner
  width 0
  height 0
  border-radius 50%
  position absolute
  top -50vw
  left -50vw
  z-index 10

a
  height "calc(92vh/ %s)" % $section-number
  padding 15px
  text-decoration none
  box-sizing border-box
  // top "calc(92vh/ %s)" % $section-number
  // left 10px
  width calc(100% - 200px)
  margin 20px auto

  @media screen and (max-width 680px) {
    width 97%
    margin 10px
  }

// a:nth-of-type(even)
//   margin-left 50%

  @media screen and (max-width 680px) {
    margin-left 10px
  }

  .eye
    height 80px
    width 80px
    overflow hidden

a:first-of-type
    display block
    color #595959
    min-height 250px

a:not(:first-of-type)
    display block
    color white
    min-height 105px

a:nth-of-type(1)
  top -10px
  left -10px
  transform-origin top
  border $border-width solid #595959
  border-top: none
  margin-top: 0
  padding-top: 25px

a:nth-of-type(2)
  border $border-width solid #ee6b71
  background #ee6b71

a:nth-of-type(3)
  border $border-width solid #6b6991
  background #6b6991

a:nth-of-type(4)
  border $border-width solid #b9dae3
  background #b9dae3

@media screen and (max-width: 420px) {
//   a:not(:first-of-type) {
//       height auto
//   }
}

</style>
