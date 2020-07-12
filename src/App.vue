<template>
    <div class="app">
        <div class="app__header">
            <PostsCounter/>
        </div>
        <div class="app__sidebar">
        </div>
        <div class="app__content">
        </div>
    </div>
</template>

<script>
import PostsCounter from './components/PostsCounter/PostsCounter.vue'

export default {
    name: 'App',
    components: {
        PostsCounter
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
