import Vue from 'vue'
import Vuex from 'vuex'
import fetchData from '../assets/meetups.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meetups: [],
    search: "",
  },
  mutations: {
    showData(state, meetups) {
      state.meetups = meetups;
    },
  },
  actions: {
   
    async getData(context) {
     context.commit('showData',fetchData.meetups)
    },
   

  },
  modules: {
  }
})