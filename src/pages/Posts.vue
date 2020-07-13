<template>
    <div class="posts">
        <div class="posts-posts_field">
            <div class="posts-posts_field-post -card" v-for="(post, key) in selectedPosts[currentPage - 1]" :key="key" @click="openPost(post)">
                <router-link class="posts-posts_field-post-link" :to="`/posts/${post.id}`">
                    <h2 class="posts-posts_field-post-link-title">{{post.title}}</h2>
                    <p class="posts-posts_field-post-link-description">{{post.body}}</p>
                    <div class="posts-posts_field-post-link-comments">{{currentCommentsCounter(post.id)}} {{pluralizeComments(currentCommentsCounter(post.id))}} </div>
                </router-link>
            </div>
        </div>
        <div class="posts-pagination_field -card" >
            <b-pagination class="posts-pagination_field-pagination" align="left" v-model="currentPage" :total-rows="posts.length" :per-page="perPage"/>
        </div>
    </div>
</template>

<script>
    import { pluralizeWords } from "@/tools/tools";
    export default {
        name: 'posts',
        props: {
            posts: Array,
            comments: Array
        },
        data() {
            return {
                currentPage: 1,
                perPage: 5,
                currentComments: []
            }
        },
        computed: {
            selectedPosts() {
                let array = this.posts,
                    size = this.perPage,
                    subarray = []
                for (let i = 0; i <Math.ceil(array.length/size); i++){
                    subarray[i] = array.slice((i*size), (i*size) + size)
                }
                return subarray
            },
        },
        methods: {
            currentCommentsCounter(id) {
                return this.comments.filter(comment => comment.postId === id).length
            },
            pluralizeComments(comment) {
                return pluralizeWords(comment, ['комментарий', 'комментария', 'комментариев']);
            },
            openPost(post) {
                if(this.$route.params.id) this.$emit('post-is-selected', post)
                else return
            }
        }
    }
</script>