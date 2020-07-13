<template>
    <div class="current_post">
        <div class="current_post-body -card">
            <h1 class="current_post-body-title">{{selectedPost ? selectedPost.title : 'Заголовок'}}</h1>
            <p class="current_post-body-description" type="text" maxlength="60">{{selectedPost ? selectedPost.body : 'Описание'}}</p>
        </div>
        <div class="current_post-comments -card">
            <h2 class="current_post-comments-header">Комментарии</h2>
            <div class="current_post-comments-comment -card" v-for="(comment, key) in comments" :key="key">
                <h3 class="current_post-comments-comment-author">{{comment.name}}</h3>
                <p class="current_post-comments-comment-description">{{comment.body}}</p>
            </div>
        </div>
        <div class="current_post-pagination -card">
            <p class="current_post-pagination-link" @click="openPost(previousPost)">
                <router-link :to="`/posts/${previousPost ? previousPost.id : 1}`" :class="previousPost ? '' : '-disabled'">{{previousPost ? previousPost.title : 'Предыдущая статья'}}</router-link>
            </p>
            <p class="current_post-pagination-link" @click="openPost(nextPost)">
                <router-link :to="`/posts/${nextPost ? nextPost.id : 1}`" :class="nextPost ? '' : '-disabled'">{{nextPost ? nextPost.title : 'Следующая статья'}}</router-link>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'current-post',
        props: {
            selectedPost: Object,
            previousPost: [Object, null],
            nextPost: [Object, null]
        },
        computed: {
            comments() {
                return this.$store.getters['comments/commentsByPostId'](this.selectedPost.id)
            }
        },
        methods: {
            openPost(selectedPost) {
                if(selectedPost) this.$emit('post-is-selected', selectedPost)
                else return
            }
        }
    }
</script>