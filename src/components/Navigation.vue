<template>
    <div>
        <!-- <router-link class="logo" :to="{name : ''}">Constance Devanne</router-link> -->
        <router-link :to="{name : 'about'}">
            <Card
                title="Constance Devanne"
                desc="Young digital designer"
                caption="Discover Things About Me"
            >
                <svg width="44" height="55" viewBox="0 0 44 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 17C8.66667 17 4.11111 23.749 2 27.1235C4.22222 30.3333 8.33333 37 22 37C35.6667 37 39.7778 30.4979 42 27.1235C39.8889 23.749 32.9333 17 22 17Z" stroke="#414141" stroke-width="2.5"/>
                <circle cx="22" cy="27" r="9.75" stroke="#414141" stroke-width="2.5"/>
                <circle cx="22" cy="27" r="2.75" stroke="#414141" stroke-width="2.5"/>
                <rect x="21" width="2" height="12" rx="1" fill="#595959"/>
                <rect x="6" y="7.66797" width="2" height="8" rx="1" transform="rotate(-19.5101 6 7.66797)" fill="#595959"/>
                <rect x="36.0077" y="7" width="2" height="8" rx="1" transform="rotate(19.51 36.0077 7)" fill="#595959"/>
                <rect width="2" height="12" rx="1" transform="matrix(1 0 0 -1 21 54.7914)" fill="#595959"/>
                <rect width="2.07664" height="8.30655" rx="1.03832" transform="matrix(0.942583 0.333973 0.333973 -0.942583 5.38895 46.8296)" fill="#595959"/>
                <rect width="2.07664" height="8.30655" rx="1.03832" transform="matrix(0.942583 -0.333971 -0.333971 -0.942583 36.5465 47.5232)" fill="#595959"/>
                </svg>

            </Card>
        </router-link>

        <router-link :to="{name : 'motion'}">
            <Card
                title="Motion Design"
                caption="Discover My Motion Projects"
            >

                <svg width="34" height="46" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 20.8542C33 29.4523 26.1282 36.3991 17.68 36.3991C9.23186 36.3991 2.36 29.4523 2.36 20.8542C2.36 12.2561 9.23186 5.30933 17.68 5.30933C26.1282 5.30933 33 12.2561 33 20.8542Z" stroke="white" stroke-width="2"/>
                <path d="M4.49567 40.8115L5.60932 36.9227C6.07502 35.2965 7.79239 34.3767 9.40412 34.8903L17.3369 37.4178C17.9984 37.6285 18.7126 37.6033 19.3576 37.3464L24.9724 35.1102C26.5579 34.4788 28.3502 35.2954 28.914 36.9062L30.2231 40.6463C30.9058 42.5969 29.4581 44.6374 27.3915 44.6374H7.37973C5.38583 44.6374 3.94673 42.7284 4.49567 40.8115Z" stroke="white" stroke-width="2"/>
                <rect x="20.4" y="17.0627" width="6.12" height="1.37874" rx="0.68937" fill="white"/>
                <rect x="22.78" y="20.8542" width="6.20433" height="1.36" rx="0.68" transform="rotate(-90 22.78 20.8542)" fill="white"/>
                <rect y="2.20306" width="3.4" height="0.765966" rx="0.382983" fill="white"/>
                <rect x="1.32222" y="4.30939" width="3.44685" height="0.755556" rx="0.377778" transform="rotate(-90 1.32222 4.30939)" fill="white"/>
                <path d="M22.12 27.0585C22.12 27.6613 21.6415 28.1266 21.08 28.1266C20.5185 28.1266 20.04 27.6613 20.04 27.0585C20.04 26.4556 20.5185 25.9904 21.08 25.9904C21.6415 25.9904 22.12 26.4556 22.12 27.0585Z" stroke="white" stroke-width="2"/>
                <line y1="-1" x2="13.1197" y2="-1" transform="matrix(0.881116 -0.4729 0.462899 0.886411 3.40001 20.8542)" stroke="white" stroke-width="2"/>
                <line y1="-1" x2="13.1197" y2="-1" transform="matrix(0.881116 -0.4729 0.462899 0.886411 3.40001 27.0586)" stroke="white" stroke-width="2"/>
                </svg>

            </Card>
        </router-link>

        <router-link :to="{name : 'ui'}">
            <Card
                title="UX/UI Design"
                caption="Discover Things About Me"
            />
        </router-link>

        <router-link :to="{name : 'print'}">
            <Card
                title="Print"
                caption="Discover Things About Me"
            />
        </router-link>
    </div>
</template>

<script>
import Card from '@/components/Home/Card.vue'

export default {
  name: 'Navigation',
  components: {
    Card
  }
}
</script>

<style lang="stylus" scoped>

$section-number = 4
$border-width = 6px

a
    height "calc(92vh/ %s)" % $section-number
    margin 10px
    padding 15px
    text-decoration none
    box-sizing border-box

a:first-of-type
    display block
    color #595959
    min-height 250px

a:not(:first-of-type)
    display block
    color white
    min-height 105px

a:nth-of-type(1)
  border $border-width solid #595959
  border-top: none
  margin-top: 0
  padding-top: 25px

a:nth-of-type(2)
  border $border-width solid #ee6b71
  background #ee6b71

a:nth-of-type(3)
  border $border-width solid #6b6991
  background #6b6991

a:nth-of-type(4)
  border $border-width solid #b9dae3
  background #b9dae3

@media screen and (max-width: 420px) {
//   a:not(:first-of-type) {
//       height auto
//   }
}

</style>
