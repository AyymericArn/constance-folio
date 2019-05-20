<template>
    <div>
        <h3>{{ title }}</h3>
        <h4>{{ caption }}</h4>
        <div class="project_wrapper">
            <img src="" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: {
        title: String,
        caption: String
    }
}
</script>

<style lang="stylus" scoped>

</style>
