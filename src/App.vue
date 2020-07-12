<template>
    <div class="app">
        <Header/>
        <Sidebar/>
        <Content/>
    </div>
</template>

<script>
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

export default {
  name: 'App',
  components: {
      Header,
      Sidebar,
      Content
  },
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
