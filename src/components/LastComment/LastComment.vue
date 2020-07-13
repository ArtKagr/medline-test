<template>
    <div class="last_comment">
        <h2 class="last_comment-header">Последний комментарий</h2>
        <div class="last_comment-body" v-for="(comment, key) in randomComments" :key="key" @click="openPost(comment.postId)">
            <h1 class="last_comment-body-title">{{comment ? comment.name : 'Автор'}}</h1>
            <p class="last_comment-body-description">{{comment ? comment.body : 'Комментарий'}}</p>
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

<style src="./LastComment.scss" lang="scss" />