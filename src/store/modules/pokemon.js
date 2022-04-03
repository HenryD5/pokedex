import axios from "axios";
export default {
  namespaced: true,

  state: {
    pokemons: [],
    pokemom: null,
    loading: false,
    tabIndex: "all",
    textSearch: "",
    favorites: [],
    modalDetail: false,
  },
  getters: {
    getPokemons: (state) => state.pokemons,
    getPokemon: (state) => state.pokemom,
    getLoading: (state) => state.loading,
    getTabIndex: (state) => state.tabIndex,
    getTextSearch: (state) => state.textSearch,
    getFavorites: (state) => state.favorites,
    getModalDetail: (state) => state.modalDetail,
  },

  mutations: {
    SET_MODAL_DETAIL(state, val) {
      state.modalDetail = val;
    },
    SET_FAVORITES(state, val) {
      state.favorites = val;
    },
    SET_FAVORITE(state, data) {
      let checkIndex;
      checkIndex = state.favorites.findIndex((item) => item.name === data.name);
      if (checkIndex > -1) {
        state.favorites.splice(checkIndex, 1);
      } else {
        state.favorites.push(data);
      }
    },
    SET_TEXT_SEARCH(state, val) {
      state.textSearch = val;
    },
    SET_TAB_INDEX(state, val) {
      state.tabIndex = val;
    },
    SET_POKEMONS(state, data) {
      state.pokemons = data;
    },
    SET_POKEMON(state, val) {
      state.pokemom = val;
    },
    SET_LOADING(state, val) {
      state.loading = val;
    },
  },
  actions: {
    GET_POKEMONS(context) {
      context.commit("SET_LOADING", true);
      axios
        .get("pokemon")
        .then((response) => {
          context.commit("SET_POKEMONS", response.data.results);
          setTimeout(() => {
            context.commit("SET_LOADING", false);
          }, 2000);
        })
        .catch((error) => {
          context.commit("SET_LOADING", false);
          console.log(error);
        });
    },
    GET_POKEMON(context, name) {
      context.commit("SET_LOADING", true);
      axios
        .get(`pokemon/${name}`)
        .then((response) => {
          context.commit("SET_POKEMON", response.data);
          setTimeout(() => {
            context.commit("SET_LOADING", false);
            context.commit("SET_MODAL_DETAIL", true);
          }, 500);
        })
        .catch((error) => {
          context.commit("SET_LOADING", false);
          console.log(error);
        });
    },
  },
};
