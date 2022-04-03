import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("pokemon", ["getFavorites"]),
  },
  methods: {
    ...mapMutations("pokemon", ["SET_FAVORITE", "SET_FAVORITES"]),
    // ITEM - POKEMONS FAVORITES
    activeFavorite(name) {
      const result = this.searchFavorite(name);
      return result != null;
    },
    addFavorite(val) {
      this.SET_FAVORITE(val);
      this.setStoreFavorites();
    },
    // GLOBAL - FAVORITES
    getStoreFavorites() {
      if (localStorage["favorites"]) {
        const favorites = JSON.parse(localStorage.getItem("favorites"));
        this.SET_FAVORITES(favorites);
      }
    },
    setStoreFavorites() {
      localStorage.setItem("favorites", JSON.stringify(this.getFavorites));
    },
    searchFavorite(name) {
      const favorite = JSON.parse(JSON.stringify(this.getFavorites));
      if (favorite != undefined && favorite.length > 0) {
        let checkIndex;
        checkIndex = favorite.findIndex((item) => item.name === name);
        return checkIndex > -1 ? favorite[checkIndex] : null;
      } else {
        return null;
      }
    },
  },
};
