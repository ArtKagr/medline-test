import axios from "axios";

export default {
  namespaced: true,
  state: {
    albums: [],
    ststus: ''
  },
  mutations: {
    SET_STATUS(state, status) {
      state.status = status
    },
    SAVE_ALBUMS(state, albums) {
      state.albums = albums;
    }
  },
  actions: {
    async fetchAlbums({ commit }) {
        commit('SET_STATUS', 'fetching');
        try {
            let { data } = await axios.get(`/albums`);
            commit('SAVE_ALBUMS', data);
            commit('SET_STATUS', 'albums-is-fetched');
        } catch {
            commit('SET_STATUS', 'error');
        }
    },
  },
};