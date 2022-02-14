import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import product from "./product";

export default new Vuex.Store({
  modules: {
    product,
  },
});
