<template>
    <div class="posts_counter">
        В нашем блоге уже {{postsCounter}} {{pluralizePosts(postsCounter)}}
    </div>
</template>

<script>
    import { pluralizeWords } from "@/tools/tools";
    export default {
        name: 'posts-counter',
        computed: {
            postsCounter() {
                return this.$store.getters['posts/postsCounter']
            }
        },
        methods: {
            pluralizePosts(hour) {
                return pluralizeWords(hour, ['статья', 'статьи', 'статей']);
            },
        }
    }
</script>

<style src="./PostsCounter.scss" lang="scss" />