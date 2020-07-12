import axios from "axios";

export default {
  namespaced: true,
  state: {
    todos: [],
    ststus: ''
  },
  mutations: {
    SET_STATUS(state, status) {
      state.status = status
    },
    SAVE_TODOS(state, todos) {
      state.todos = todos;
    }
  },
  actions: {
    async fetchTodos({ commit }) {
        commit('SET_STATUS', 'fetching');
        try {
            let { data } = await axios.get(`/todos`);
            commit('SAVE_TODOS', data);
            commit('SET_STATUS', 'todos-is-fetched');
        } catch {
            commit('SET_STATUS', 'error');
        }
    },
  },
};