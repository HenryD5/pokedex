import Vue from "vue";
import Vuex from "vuex";
import modulePokemon from "./modules/pokemon";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pokemon: modulePokemon,
  },
});
