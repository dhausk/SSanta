/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    groupSize: 3,
    showData: false,
    group: [
      {
        id: 0,
        name: '',
        email: '',
      },
    ],
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    setShowData(state, value) {
      state.showData = value;
    },
    clearGroupArray(state) {
      state.group = [];
    },
    // add one group member obj
    addGroupMember(state) {
      state.group.push({
        id: state.group.length + 1,
        name: '',
        email: '',
      });
    },
    // remove one group mem obj
    deleteGroupMember(state) {
      state.group.pop();
    },
  },
  actions: {
    createSSGroup(context) {
      context.commit('setShowData');
    },
    addToGroup(context) {
      context.commit('addGroupMember');
      context.commit('addToGroupSize');
    },
    removeFromGroup(context) {
      context.commit('deleteGroupMember');
      context.commit('subtractFromGroupSize');
    },
  },
});
