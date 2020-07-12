<template>
    <div class="posts_counter">
        В нашем блоге уже {{postsCounter}} статей
    </div>
</template>

<script>
    export default {
        name: 'posts-counter',
        computed: {
            postsCounter() {
                return this.$store.getters['posts/postsCounter']
            }
        }
    }
</script>

<style src="./PostsCounter.scss" lang="scss" />