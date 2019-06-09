<template>
  <Projects
    title="Motion Design"
    test="jeej"
    primaryColor="#EE6B72"
    :projects="projects"
  />
</template>

<script>
// @ is an alias to /src
import Projects from '@/components/Projects/Projects.vue'
import { TimelineLite, TweenLite } from 'gsap'

export default {
  name: 'motion',
  components: {
    Projects
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (from.name === 'home') {
        const tl = new TimelineLite()
        tl.add('label')
        tl.add(
          TweenLite.to(
            vm.$children[0].$refs.transitionnerin,
            0.2,
            {
              transformOrigin: 'top let',
              height: 0,
              width: 0
            }
          ), 'label'
        )

        tl.add('label2', '+=0.3')

        tl.add(
          TweenLite.to(
            vm.$children[0].$refs.transitionnerin,
            0.3,
            {
              display: 'none'
            }), 'label2'
        )
        tl.play()
      } else {
        const tl = new TimelineLite()
        tl.add(TweenLite.to(
          vm.$children[0].$refs.transitionnerin,
          0.2,
          {
            opacity: 0
          }
        ))
        tl.add(TweenLite.to(
          vm.$children[0].$refs.transitionnerin,
          0.2,
          {
            display: 'none'
          }
        ))
        tl.play()
      }
    })
  },
  beforeRouteLeave (to, from, next) {
    if (to.name === 'home') {
      const tl = new TimelineLite()
      tl.add(
        TweenLite.to(
          this.$children[0].$refs.projects,
          0.2,
          {
            ease: Power2.easeOut,
            height: 200,
            overflow: 'hidden',
            width: '85%',
            margin: 'auto',
            position: 'relative',
            top: this.top,
            minHeight: 'initial',
            backgroundColor: 'rgb(238, 107, 114)'
          }
        )
      )
      tl.play()
      setTimeout(() => {
        next()
      }, 200)
    } else {
      next()
    }
  },
  data () {
    return {
      top: 270,
      projects: [
        {
          title: '1 - Oskourses',
          caption: 'Android Project - 2019',
          content: 'For this project, I was a motion designer. From the illustrations of Manon Buée and Alexandre Chabeau\'s interface, I was able to animate a short video of about twenty seconds presenting the concept of the application. This is my first motion! Aymeric Arnoult and Alphonse Bouy worked on its development, while Loana Gentric managed us.',
          insert: {
            title: 'What is Oskourses :',
            content: 'It is an application that aims to create a shopping list from a selected meal and avoid food waste.'
          },
          src: require('@/assets/img/projects/motion/motion-1.png'),
          isVideo: true,
          videoSrc: require('@/assets/img/projects/motion/motion-1.mp4')
        }
      ]
    }
  }
}
</script>
