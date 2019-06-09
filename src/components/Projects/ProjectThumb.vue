<template>
    <div class="proj">
        <h3>{{ title }}</h3>
        <h4>{{ caption }}</h4>
        <div :style="`background-color:${primaryColor}`" class="project_wrapper">
            <img :src="src" :alt="alt">
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProjectThumb',
  props: {
    title: String,
    caption: String,
    src: String,
    alt: String,
    primaryColor: String
  }
}
</script>

<style lang="stylus" scoped>

.proj
    margin-top 50px

    h3, h4
        text-decoration none
        color: rgba(0, 0, 0, 0.95);
    h3
        font-weight: 600;
        font-size: 16px;

    h4
        font-weight normal

    .project_wrapper
        background attr(data-color)
        min-height 200px
        height 35vh
        margin-top 18px

        img
            width 100%
            height 100%
            object-fit cover

</style>
