/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    creatorName: '',
    creatorEmail: '',
    groupSize: 3,
    showData: false,
    group: [],
  },
  mutations: {
    setNewName(state, value) {
      state.creatorName = value;
    },
    setNewEmail(state, value) {
      state.creatorEmail = value;
    },
    setGroupSize(state, value) {
      state.groupSize = value;
    },
    setShowData(state, value) {
      state.showData = value;
    },
  },
  actions: {
  },
});
