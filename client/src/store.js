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
    pushCreatorToGroup(state) {
      state.group.push({
        id: 0,
        name: state.creatorName,
        email: state.creatorEmail,
      });
    },
    clearGroupArray(state) {
      state.group = [];
    },
    createEmptyGroup(state) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < state.groupSize - 1; i++) {
        state.group.push({
          id: i + 1,
          name: '',
          email: '',
        });
      }
    },
    addGroupMember(state) {
      state.group.push({
        id: state.group.length + 1,
        name: '',
        email: '',
      });
    },
    deleteGroupMember(state) {
      state.group.pop();
    },
    subtractFromGroupSize(state) {
      state.groupSize -= 1;
    },
    addToGroupSize(state) {
      state.groupSize += 1;
    },
  },
  actions: {
    createSSGroup(context) {
      context.commit('clearGroupArray');
      context.commit('pushCreatorToGroup');
      context.commit('createEmptyGroup');
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
