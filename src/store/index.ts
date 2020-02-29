import Vue from "vue";
import Vuex from "vuex";
import pathify, { make } from "vuex-pathify";

// properties
const state = {
  num1: 0,
  num2: 0,
  total: 0
};

const getters = {};

const actions = {
  addNumbers({ state, getters }, payload) {
    console.log(payload);
    state.total = state.num1 + state.num2;
  }
};

const mutations = make.mutations(state);

// store
Vue.use(Vuex);
export default new Vuex.Store({
  // use the plugin
  plugins: [pathify.plugin],

  // properties
  state,
  getters,
  actions,
  mutations
});
