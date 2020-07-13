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
            pluralizePosts(post) {
                return pluralizeWords(post, ['статья', 'статьи', 'статей']);
            },
        }
    }
</script>