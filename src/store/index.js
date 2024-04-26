import Vue from "vue";
import Vuex from "vuex";

// =========================
// MODULES STORE POINT
// =========================
import general from "./general";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    general,
  },
});
