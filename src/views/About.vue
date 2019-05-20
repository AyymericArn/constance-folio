<template>
  <div class="about">
    <Head/>
    <Section title="About Me" color="red">
      I am Constance Devanne, currently a student at HETIC and freelance since April 2018. Passionate about digital, I work every day to find solutions to the problems encountered through design.
    </Section>

    <Section title="Work" color="blue">
      <h4>Digital Designer</h4>
      <p>Freelance - April 2018 <br></p>
      <h4>Motion Design Intern</h4>
      <p>Fresqo — Amsterdam</p>
      <p>July - October 2019</p>
    </Section>

    <Section title="Contact" color="green">
      <p>Want to work or just discuss ? Write me here !</p>
      <a href="mailto:devconstance@gmail.com">Email</a>
      <a href="https://www.linkedin.com/in/constancedevanne/">LinkedIn</a>
      <a href="https://twitter.com/ConstieDvn">Twitter</a>
      <a href="https://dribbble.com/ConstanceDevanne">Dribbble</a>
    </Section>
  </div>
</template>

<script>
import Head from '@/components/About/Head.vue'
import Section from '@/components/About/Section.vue'

export default {
  name: 'about',
  components: {
    Head,
    Section
  }
}
</script>

<style lang="stylus" scoped>

.about
  border solid #414141 6px
  min-height 98.2vh
  color #414141

</style>
