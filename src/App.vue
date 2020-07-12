<template>
    <div class="app">
        <header/>
        <sidebar/>
        <content/>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';

export default {
  name: 'App',
  components: {
    'header': Header,
    'sidebar': Sidebar,
    'content': Content,
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
