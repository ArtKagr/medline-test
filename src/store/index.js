import Vue from 'vue';
import Vuex from 'vuex';

import posts from './posts';
import comments from './comments';
import albums from './albums';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    comments,
    albums
  },
});
