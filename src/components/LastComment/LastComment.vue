<template>
    <div class="last_comment">
        <!-- <div class="last_comment-body" v-for="(comment, key) in randomComments" :key="key">
            <p>{{comment.postId}}</p>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'last-comment',
        props: {
            randomComments: Array
        }
    }
</script>

<style src="./LastComment.scss" lang="scss" />