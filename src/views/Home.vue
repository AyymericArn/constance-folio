<template>
  <div ref="home" class="home">
    <Navigation/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import { TweenLite } from 'gsap'

export default {
  name: 'home',
  components: {
    Navigation
  },
  beforeRouteLeave (to, from, next) {
    setTimeout(() => {
      next()
    }, 300)
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(from)
      if (from.name === 'motion' || from.name === 'print' || from.name === 'ui' || from.name === 'about') {
        const cards = vm.$refs.home.childNodes[0].querySelectorAll('a')
        cards.forEach(card => {
          if (card.getAttribute('href') !== from.path) {
            TweenLite.fromTo(
              card,
              0.3,
              {
                opacity: 0
              },
              {
                opacity: 1
              }
            )
          }
        })
      }
    })
  }
}
</script>
