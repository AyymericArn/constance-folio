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
import { TweenLite } from 'gsap'

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
    TweenLite.to(
      this.$children[0].$refs.transitionnerout,
      0.2,
      {
        transformOrigin: 'bottom right',
        height: '165vw',
        width: '165vw',
        left: '-25vw',
        top: '-25vw'
      }
    )
    setTimeout(() => {
      next()
    }, 300)
  }
}
</script>
