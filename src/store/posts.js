import axios from "axios";

export default {
    namespaced: true,
    state: {
        posts: [],
        currentPost: {},
        randomPosts: [],
        ststus: ''
    },
    getters: {
        postsCounter: state => {
            return state.posts.length
        },
        lastPostId: state => {
            let idsArray = state.posts.map(post => post.id)
            return Math.max.apply(null, idsArray);
        }
    },
    mutations: {
        SET_STATUS(state, status) {
            state.status = status
        },
        SAVE_POSTS(state, posts) {
            state.posts = posts;
        },
        SAVE_RANDOM_POST(state, randomPost) {
            state.randomPosts.push(randomPost)
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
      async fetchRandomPost({ commit }, id) {
        commit('SET_STATUS', 'fetching');
        try {
            let { data } = await axios.get(`/posts/${id}`);
            commit('SAVE_RANDOM_POST', data);
            commit('SET_STATUS', 'current-post-is-fetched');
        } catch {
            commit('SET_STATUS', 'error');
        }
    },
    },
};