<template>
    <div class="app">
        <div class="app__header">
            <div class="app__header-logo">LOGO</div>
            <PostsCounter/>
        </div>
        <div class="app__sidebar">
            <RandomPost :serial-number="0" @post-is-selected="postIsSelected"/>
            <LastComment :random-comments="randomComments"/>
            <RandomPost :serial-number="1" @post-is-selected="postIsSelected"/>
        </div>
        <div class="app__content">
            <Posts v-if="slot === 'posts'"/>
            <CurrentPost v-else :selected-post="selectedPost" :previous-post="previousPost" :next-post="nextPost" @post-is-selected="postIsSelected"/>
        </div>
    </div>
</template>

<script>
import PostsCounter from './components/PostsCounter/PostsCounter.vue'
import RandomPost from './components/RandomPost/RandomPost.vue'
import LastComment from './components/LastComment/LastComment.vue'
import CurrentPost from './pages/CurrentPost/CurrentPost.vue'
import Posts from './pages/Posts/Posts.vue'

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
            randomComments: []

        }
    },
    created() {
        this.$store.dispatch('posts/fetchPosts')
        this.$store.dispatch('comments/fetchComments')
    },
    watch: {
        posts: function() {
            this.getRandomComments()
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
        lastPostId() {
            return this.$store.getters['posts/lastPostId']
        },
        postsCounter() {
            return this.$store.getters['posts/postsCounter']
        }
    },
    methods: {
        postIsSelected(selectedPost) {
            this.slot = 'post'
            this.selectedPost = selectedPost
            let selectedPostIndex = this.posts.findIndex(post => post.id === selectedPost.id)
            selectedPostIndex === 0 ? this.previousPost = null : this.previousPost = this.posts[selectedPostIndex - 1]
            selectedPostIndex === this.lastPostId ? this.nextPost = null : this.nextPost = this.posts[selectedPostIndex + 1]
        },
        getRandomComments() {
            let numberOfComments = 5,
                randomComments = [],
                randomId = Math.floor(Math.random() * (this.postsCounter - 1) + 1)
            while(numberOfComments > 0) {
                randomComments.push(this.comments.find(comment => comment.postId === randomId))
                numberOfComments --
            }
            this.randomComments = randomComments
        }
    }
}
</script>

<style src="./assets/styles/app.scss" lang="scss" />
