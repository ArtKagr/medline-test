import axios from "axios";

export default {
  namespaced: true,
  state: {
    photos: [],
    ststus: ''
  },
  mutations: {
    SET_STATUS(state, status) {
      state.status = status
    },
    SAVE_PHOTOS(state, photos) {
      state.photos = photos;
    }
  },
  actions: {
    async fetchPhotos({ commit }) {
        commit('SET_STATUS', 'fetching');
        try {
            let { data } = await axios.get(`/photos`);
            commit('SAVE_PHOTOS', data);
            commit('SET_STATUS', 'photos-is-fetched');
        } catch {
            commit('SET_STATUS', 'error');
        }
    },
  },
};