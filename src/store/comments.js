import axios from "axios";

export default {
  namespaced: true,
  state: {
      comments: [],
      currentPostCommets: [],
      ststus: ''
  },
  getters: {
      commentsByPostId: state => postId => {
          return state.comments.filter(comment => comment.postId === postId)
      }
  },
  mutations: {
      SET_STATUS(state, status) {
          state.status = status
      },
      SAVE_COMMENTS(state, comments) {
          state.comments = comments;
      },
      SAVE_CURRENT_POST_COMMENTS(state, currentPostComments) {
          state.currentPostCommets = currentPostComments
      }
  },
  actions: {
    async fetchComments({ commit }) {
        commit('SET_STATUS', 'fetching');
        try {
            let { data } = await axios.get(`/comments`);
            commit('SAVE_COMMENTS', data);
            commit('SET_STATUS', 'comments-is-fetched');
        } catch {
            commit('SET_STATUS', 'error');
        }
    },
    async fetchCurrentPostComments({ commit }, postId) {
      commit('SET_STATUS', 'fetching');
      try {
          let { data } = await axios.get(`/posts/${postId}/comments`);
          commit('SAVE_CURRENT_POST_COMMENTS', data);
          commit('SET_STATUS', 'comments-is-fetched');
      } catch {
          commit('SET_STATUS', 'error');
      }
  },
  },
};