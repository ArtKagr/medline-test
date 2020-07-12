<template>
    <div class="app">
        <div class="app__header">
            <div class="app__header-logo">LOGO</div>
            <PostsCounter/>
        </div>
        <div class="app__sidebar">
            <RandomPost/>
        </div>
        <div class="app__content">
        </div>
    </div>
</template>

<script>
import PostsCounter from './components/PostsCounter/PostsCounter.vue'
import RandomPost from './components/RandomPost/RandomPost.vue'

export default {
    name: 'App',
    components: {
        PostsCounter,
        RandomPost
    },
    created() {
        this.$store.dispatch('posts/fetchPosts')
    },
    computed: {
        posts() {
            return this.$store.state.posts
        }
    }
}
</script>

<style src="./assets/styles/app.scss" lang="scss" />
