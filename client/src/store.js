/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';
import API from './Lib/Api';

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
        admin: false,
      },
      {
        id: 2,
        name: '',
        email: '',
        admin: false,
      },
      {
        id: 3,
        name: '',
        email: '',
        admin: false,
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
        admin: false,
      });
    },
    addToGroupSize(state) {
      state.groupSize += 1;
    },
    removeOneFromGroup(state) {
      state.groupSize -= 1;
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
      context.commit('addToGroupSize');
    },
    removeFromGroup(context) {
      context.commit('deleteGroupMember');
      context.commit('removeOneFromGroup');
    },
    async sendListToServer() {
      const res = await API.sendList();
      console.log(res);
    },
  },
});
