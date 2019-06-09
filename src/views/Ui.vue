<template>
  <Projects
    title="UX/UI Design"
    primaryColor="#6B6991"
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
            backgroundColor: '#6b6991'
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
      top: 507,
      projects: [
        {
          title: '1 - Nodo Project',
          caption: 'Freelance Project - 2019',
          insert: {
            title: 'What is Nodo Project :',
            content: 'It is a project on the theme of health aimed at giving a pre-diagnosis to children with attention deficit disorders.'
          },
          src: require('@/assets/img/projects/ui/Nodo-project.png'),
          content: 'We have been working on this project for a few weeks now, with Dr. Louis Vera and Aymeric Arnoult. In this project, I have a role as a UX/UI designer. I will seek to better create a meaningful experience for parents who are often overwhelmed and lost.'
        },
        {
          title: '2 - Astrologic',
          caption: 'School Project - 2019',
          insert: {
            title: 'What is Astrologic :',
            content: 'An application to get your daily horoscope, as well as a dish, a cocktail and a movie associated with your mood every day.'
          },
          src: require('@/assets/img/projects/ui/Astrologic-all.png'),
          content: 'I was designer on this project. The goal was to provide a simple but effective experience, without the user having to search the site for hours to find what they are looking for. The design is intended to be quite feminine and sober. I worked on it with Aymeric Arnoult and Jules Stalin.You can try it at <a href="astrologiic.space">astrologiic.space</a>'
        }
      ]
    }
  }
}
</script>
