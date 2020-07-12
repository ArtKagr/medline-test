<template>
    <div class="random_post">

    </div>
</template>

<script>
    export default {
        name: 'random-post',
        created() {
            this.$store.dispatch('posts/fetchCurrentPost', this.randomPost)
        },
        computed: {
            postsCounter() {
                return this.$store.getters['posts/postsCounter']
            },
            randomPost() {
                return Math.floor(Math.random() * (this.postsCounter - 1) + 1) ? Math.floor(Math.random() * (this.postsCounter - 1) + 1) : 1
            }
        },
    }
</script>

<style src="./RandomPost.scss" lang="scss" />