import Vue from 'vue'
import Vuex from 'vuex'
// Basic
import socials from './modules/Socials'

// Components
import devSkills from './modules/DevSkills'
import projects from './modules/Projects'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTitle: 'Home',
  },
  mutations: {
    updateTitle(state, value) {
      state.pageTitle = value;
    }
  },
  actions: {

  },

  modules: {
    socials,
    devSkills,
    projects,
  },
})
