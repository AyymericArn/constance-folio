<template>
  <div class="card">
    <h1>{{ title }}
      <!-- pictogram -->
      <slot>
      </slot>
    </h1>
    <p v-if="desc">{{ desc }}</p>
    <p>
      {{ caption }}
      <template>
        <!-- arrow -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="width" :height="height">
          <title>arrow right</title>
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="1.5"
            fill="none"
            stroke="#111111"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </g>
        </svg>
      </template>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Card',
  data () {
    return {
      width: 24,
      height: 24
    }
  },
  props: {
    title: String,
    desc: String,
    caption: String
  }
}
</script>

<style lang="stylus" scoped>

@import url('https://fonts.googleapis.com/css?family=Volkhov&display=swap')

@font-face
  font-family "Vesterbro"
  src: url("../../assets/fonts/vesterbro/TRYVesterbro-Extrabold.woff") format("woff")

.card
  height 100%
  display flex
  flex-direction column
  justify-content space-between

h1, p
  text-align left

h1
  font-family Vesterbro
  font-size 36px
  display: flex
  justify-content: space-between

  svg
    margin-left 20px

p:last-of-type
  justify-self flex-end
  display flex
  justify-content space-between
  align-items center

p
  padding-top 16px
  border-top solid white 1px

a:first-of-type p:last-of-type
  border-color black

svg
  // min-width 34px

  path
    stroke white

a:first-of-type svg path
  stroke #595959

@media screen and (max-width: 420px) {
  h1 {
    font-size: 28px;
  }
  p {
    font-size: 14px;
  }
}

</style>
