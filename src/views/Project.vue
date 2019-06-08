<template>
    <Project
        :section="section"
        :title="title"
        :caption="caption"
        :content="content"
        :insert="insert"
        :src="src"
        :alt="alt"
        :primaryColor="primaryColor"
    />
</template>

<script>
import Project from '@/components/Project/Project.vue'
export default {
  name: 'Project-view',
  components: {
    Project
  },
  props: {
    section: String,
    title: String,
    caption: String,
    content: String,
    src: String,
    alt: String,
    insert: Object,
    primaryColor: String
  },
  beforeRouteLeave (to, from, next) {
    setTimeout(() => {
      next()
    }, 300)
  }
}
</script>
