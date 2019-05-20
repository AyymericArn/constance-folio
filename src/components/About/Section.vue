<template>
    <section>
        <h3 :class="color">
            {{ title }}
        </h3>
        <p>
            <slot></slot>
        </p>
    </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: String,
    color: String
  }
}
</script>

<style lang="stylus" scoped>

// @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,900&display=swap');

section
    padding 30px
    display flex
    justify-content space-between

    h3
        text-transform uppercase
        font-weight 900

    p, h3
        text-align left
        font-family 'Source Sans Pro'

    p
        width 65%
        line-height: 24px;
        transform: translateY(-4px);
        font-weight 400

    .red
        color #EE6B72

    .blue
        color #6B6991

    .green
        color #C2E3DC

    a
        display inline-block
        text-align left
        width 35%
        text-decoration none
        color #414141

    h4
        line-height 32px
        font-weight 600

</style>
