import Vue from 'vue';
import Router from 'vue-router';

import Posts from '@/pages/Posts'
import CurrentPost from '@/pages/CurrentPost'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', redirect: '/posts'},
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
    },
    {
      path: '/posts/:id',
      name: 'CurrentPost',
      component: CurrentPost,
    },
  ],
});
