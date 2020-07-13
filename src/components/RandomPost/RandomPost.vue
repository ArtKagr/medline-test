<template>
    <div class="random_post" @click="openPost">
        <h2 class="random_post-header">Случайная статья</h2>
        <h1 class="random_post-title">{{randomPost ? randomPost.title : 'Заголовок'}}</h1>
        <p class="random_post-description" type="text" maxlength="60">{{randomPost ? randomPost.body : 'Описание'}}</p>
    </div>
</template>

<script>
    export default {
        name: 'random-post',
        props: {
            posts: Array
        },
        data() {
            return {
                randomId: null,
                randomPost: {}
            }
        },
        watch: {
            postsCounter: function(newCounter) {
                this.randomId = Math.floor(Math.random() * (newCounter - 1) + 1)
            },
            posts: function(newPosts) {
                this.randomPost = newPosts.find(post => post.id === this.randomId)
            }
        },
        computed: {
            postsCounter() {
                return this.$store.getters['posts/postsCounter']
            }
        },
        methods: {
            openPost() {
                this.$emit('post-is-selected', this.randomPost)
            }
        }
    }
</script>

<style src="./RandomPost.scss" lang="scss" />