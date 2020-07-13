<template>
    <div class="last_comment -card">
        <h2 class="last_comment-header">Последний комментарий</h2>
        <div class="last_comment-body" v-for="(comment, key) in randomComments" :key="key" @click="openPost(comment.postId)">
            <router-link class="last_comment-body-link" :to="`/posts/${comment.postId}`">
                <h1 class="last_comment-body-link-title">{{comment ? comment.name : 'Автор'}}</h1>
                <p class="last_comment-body-link-description">{{comment ? comment.body : 'Комментарий'}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'last-comment',
        props: {
            randomComments: Array
        },
        methods: {
            openPost(postId) {
                this.$emit('post-is-selected', postId)
            }
        }
    }
</script>