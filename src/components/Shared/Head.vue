<template>
    <div>
        <h1>{{ title }}</h1>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Head',
  props: {
    title: String
  }
}
</script>

<style lang="stylus" scoped>

@import url('https://fonts.googleapis.com/css?family=Volkhov&display=swap')

.title
    display flex
    justify-content space-between
    align-items center
    width 100%
    padding 40px 30px
    box-sizing border-box
    font-family 'Volkhov'

    svg
        min-width 44px
        margin-left 20px

    h1
        display inline
        font-size 38px
        font-weight bolder
        text-align left

</style>