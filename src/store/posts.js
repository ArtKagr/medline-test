import axios from "axios";

export default {
    namespaced: true,
    state: {
        posts: [],
        ststus: ''
    },
    getters: {
        postsCounter: state => {
            return state.posts.length
        }
    },
    mutations: {
        SET_STATUS(state, status) {
            state.status = status
        },
        SAVE_POSTS(state, posts) {
            state.posts = posts;
        },
        SAVE_CURRENT_POST(state, currentPost) {
            state.currentPost = currentPost
        }
    },
    actions: {
      async fetchPosts({ commit }) {
          commit('SET_STATUS', 'fetching');
          try {
              let { data } = await axios.get(`/posts`);
              commit('SAVE_POSTS', data);
              commit('SET_STATUS', 'posts-is-fetched');
          } catch {
              commit('SET_STATUS', 'error');
          }
      },
      async fetchCurrentPost({ commit }, id) {
        commit('SET_STATUS', 'fetching');
        try {
            let { data } = await axios.get(`/posts/${id}`);
            commit('SAVE_CURRENT_POST', data);
            commit('SET_STATUS', 'current-post-is-fetched');
        } catch {
            commit('SET_STATUS', 'error');
        }
    },
    },
};