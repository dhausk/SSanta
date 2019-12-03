/* eslint-disable  */
import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    groupSize: 3,
    showData: false,
    giftLimit: 0,
    peoples: [
      {
        id: 1,
        name: '',
        email: '',
        admin: false
      },
      {
        id: 2,
        name: '',
        email: '',
        admin: false
      },
      {
        id: 3,
        name: '',
        email: '',
        admin: false
      }
    ],
    adminError: false,
    resMessage: ""
  },
  getters: {
    getField,
    message (state){
      return state.resMessage;
    }
  },
  mutations: {
    setShowData(state, value) {
      state.showData = value;
    }, 
    setGiftLimit(state, value) {
      state.giftLimit = value;
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
        admin: false
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
    setResMessage(state, message) {
      state.resMessage = message;
    },
    setAdminError(state) {
      state.adminError = true;

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
    checkFormEmailsAndNames(context) {
      if (this.state.showData){
       const admin = this.state.peoples.filter(person => person.admin === true);
        return admin.length ? router.push({ path: 'Confirm' }) : context.commit('setAdminError');
      }
      else {
        router.push({path: 'Confirm'});

      }
    },
    async sendListToServer( context) {
      const body = {
        groupSize: this.state.groupSize,
        showData: this.state.showData,
        giftLimit: this.state.giftLimit,
        peoples: this.state.peoples
      };

      let message = 
        await fetch('http://localhost:4040/form', {
          method: 'POST',
          body: JSON.stringify(body),
         headers: { 'Content-Type': 'application/json' },
        })
          .then(res => res.json()) 
            .catch(error => error.json());
      console.log(message)
      context.commit('setResMessage', message);
    },
  },
});
