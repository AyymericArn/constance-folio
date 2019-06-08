<template>
  <div id="app">
    <!-- <transition name="fade" mode="out-in"> -->
      <router-view/>
    <!-- </transition> -->
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  opacity 0

</style>
