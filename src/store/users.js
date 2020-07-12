import axios from "axios";

export default {
  namespaced: true,
  state: {
    users: [],
    ststus: ''
  },
  mutations: {
    SET_STATUS(state, status) {
      state.status = status
    },
    SAVE_USERS(state, users) {
      state.users = users;
    }
  },
  actions: {
    async fetchUsers({ commit }) {
        commit('SET_STATUS', 'fetching');
        try {
            let { data } = await axios.get(`/users`);
            commit('SAVE_USERS', data);
            commit('SET_STATUS', 'users-is-fetched');
        } catch {
            commit('SET_STATUS', 'error');
        }
    },
  },
};