<template>
    <div class="app">
        <div class="app-header">
            <div class="app-header-block">
                <h1 class="app-header-block-logo">LOGO</h1>
                <PostsCounter/>
            </div>
            <p v-if="slot === 'post'" class="app-header-link" @click="openTasksList">
                <router-link to="/posts">Вернуться к списку статей</router-link>
            </p>
        </div>
        <div class="app-sidebar">
            <RandomPost :posts="posts" @post-is-selected="postIsSelected"/>
            <LastComment :random-comments="randomComments" @post-is-selected="postIsSelected"/>
            <RandomPost :posts="posts" @post-is-selected="postIsSelected"/>
        </div>
        <div class="app-content">
            <Posts v-if="slot === 'posts'" :posts="posts" :comments="comments" @post-is-selected="postIsSelected"/>
            <CurrentPost v-else :selected-post="selectedPost" :previous-post="previousPost" :next-post="nextPost" @post-is-selected="postIsSelected"/>
        </div>
    </div>
</template>

<script>
import PostsCounter from './components/PostsCounter.vue'
import RandomPost from './components/RandomPost.vue'
import LastComment from './components/LastComment.vue'
import CurrentPost from './pages/CurrentPost.vue'
import Posts from './pages/Posts.vue'

export default {
    name: 'App',
    components: {
        PostsCounter,
        RandomPost,
        LastComment,
        CurrentPost,
        Posts
    },
    data() {
        return {
            slot: 'posts',
            selectedPost: {},
            previousPost: {},
            nextPost: {},
            numberOfComments: 5,
            randomComments: []
        }
    },
    created() {
        this.$store.dispatch('posts/fetchPosts')
        this.$store.dispatch('comments/fetchComments')
    },
    watch: {
        posts: function() {
            if(this.$route.params.id) this.postIsSelected(Number(this.$route.params.id))
        },
        comments: function() {
            this.getRandomComments()
        }
    },
    computed: {
        posts() {
            return this.$store.state.posts.posts
        },
        comments() {
            return this.$store.state.comments.comments
        },
        postsCounter() {
            return this.$store.getters['posts/postsCounter']
        },
        commentsCounter() {
            return this.$store.getters['comments/commentsCounter']
        }
    },
    methods: {
        postIsSelected(selectedPost) {
            this.slot = 'post'
            let selectedPostIndex
            if(typeof selectedPost === 'number') {
                this.selectedPost = this.posts.find(post => post.id === selectedPost)
                selectedPostIndex = this.posts.findIndex(post => post.id === selectedPost)
            } else {
                this.selectedPost = selectedPost
                selectedPostIndex = this.posts.findIndex(post => post.id === selectedPost.id)
            }
            selectedPostIndex === 0 ? this.previousPost = null : this.previousPost = this.posts[selectedPostIndex - 1]
            selectedPostIndex === this.postsCounter - 1 ? this.nextPost = null : this.nextPost = this.posts[selectedPostIndex + 1]
        },
        generateRandomId(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },
        getRandomComments() {
            while(this.numberOfComments > 0) {
                this.randomComments.push(this.comments[this.generateRandomId(this.commentsCounter, 1)])
                this.numberOfComments --
            }
        },
        openTasksList() {
            this.slot = 'posts'
        }
    }
}
</script>

<style src="./assets/styles/app.scss" lang="scss" />
