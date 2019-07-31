/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    groupSize: 3,
    showData: false,
    peoples: [
      {
        id: 1,
        name: '',
        email: '',
      },
      {
        id: 2,
        name: '',
        email: '',
      },
      {
        id: 3,
        name: '',
        email: '',
      },
    ],
  },
  getters: {
    getField,
  },
  mutations: {
    setShowData(state, value) {
      state.showData = value;
    },
    clearGroupArray(state) {
      state.peoples = [];
    },
    // add one peoples member obj
    addGroupMember(state) {
      state.peoples.push({
        id: state.peoples.length + 1,
        name: '',
        email: '',
      });
    },
    // remove one group mem obj
    deleteGroupMember(state) {
      state.peoples.pop();
    },
    updateField,
  },
  actions: {
    addToGroup(context) {
      context.commit('addGroupMember');
    },
    removeFromGroup(context) {
      context.commit('deleteGroupMember');
    },
  },
});
