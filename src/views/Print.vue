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

export default {
  name: 'motion',
  components: {
    Projects
  },
  data () {
    return {
      projects: [
        {
          title: 'Synerg\'hetic',
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
