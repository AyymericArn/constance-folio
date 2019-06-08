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

export default {
  name: 'motion',
  components: {
    Projects
  },
  data () {
    return {
      projects: [
        {
          title: 'NoDisk Records',
          caption: 'Association - 2019',
          content: 'I realized this motion as part of a school project. It aims to present the application we developed with Kotlin. I did it with After Effects, the illustrations were made by Manon Buée and the interface by Alexandre Chabeau.',
          insert: {
            title: 'What is Nodisk :',
            content: 'Nodisk is a student association for which i just created this motion. '
          },
          src: require('@/assets/img/motion-proj-1.png')
        },
        {
          title: 'Teaser',
          caption: 'Application - 2019'
        },
        {
          title: 'Teaser',
          caption: 'Application - 2019'
        }
      ]
    }
  }
}
</script>
