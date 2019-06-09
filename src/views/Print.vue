<template>
  <Projects
    title="Print"
    primaryColor="#B9D9E3"
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
            height: 200,
            overflow: 'hidden',
            width: '85%',
            margin: 'auto',
            position: 'relative',
            top: this.top,
            minHeight: 'initial',
            backgroundColor: '#b9dae3'
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
      top: 744,
      projects: [
        {
          title: '1 - Synerg\'hetic',
          caption: 'Junior Company - 2018/2019',
          insert: {
            title: 'What is Synerg\'hetic :',
            content: 'Synerg’Hetic is the junior company of my school, like a students agency which meets business needs by providing digital know-how.'
          },
          src: require('@/assets/img/projects/print/RFP-Synerg.png'),
          content: 'I created this poster for the recruitment campaign for the new 2019-2020 mandate. The aim was to show the team spirit but also the youth of the team and their determination.'
        },
        {
          title: '2 - Synerg\'hetic',
          caption: 'Junior Company - 2018/2019',
          insert: {
            title: 'What is Synerg\'hetic :',
            content: 'Synerg’Hetic is the junior company of my school, like a students agency which meets business needs by providing digital know-how.'
          },
          src: require('@/assets/img/projects/print/Synerg-apero.png'),
          content: 'I created this poster as part of a meeting between students and junior entrepreneurs at school.'
        },
        {
          title: '3 - Nodisk Records',
          caption: 'Music Assocation - 2019',
          insert: {
            title: 'What is Nodisk :',
            content: 'Nodisk is a music association of which I am a member, as a digital project manager and event designer.'
          },
          src: require('@/assets/img/projects/print/Nodisk-Lancement.png'),
          content: 'I created this visual as part of the launch of our first event. It was our first evening on the theme of pop/rock, in a Parisian bar'
        },
        {
          title: '4 - Nodisk Records',
          caption: 'Music Assocation - 2019',
          insert: {
            title: 'What is Synerg\'hetic :',
            content: 'Nodisk is a music association of which I am a member, as a digital project manager and event designer'
          },
          src: require('@/assets/img/projects/print/NODISK-fetemusique.png'),
          content: 'I created this visual as part of the music festival for which we made an event at school, so that all students can enjoy a friendly moment before the holidays or internships.'
        },
      ]
    }
  }
}
</script>
