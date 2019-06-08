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
          caption: 'Association - 2019'
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
