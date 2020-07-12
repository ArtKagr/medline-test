<template>
    <div class="app">
        <div class="app__header">
        </div>
        <div class="app__sidebar">
        </div>
        <div class="app__content">
        </div>
    </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    this.$store.dispatch('posts/fetchPosts')
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>

<style src="./assets/styles/app.scss" lang="scss" />
