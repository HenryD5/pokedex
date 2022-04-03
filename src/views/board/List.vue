<template>
  <ViewRoute>
    <div class="max-570 view-list">
      <div class="pt-3 pb-3"><Search /></div>
      <!-- TAB ALL -->
      <div class="mt-3 mb-5" v-if="getTabIndex === 'all'">
        <div v-if="allPokemons.length > 0" class="pb-5">
          <div v-for="(pokemon, index) in allPokemons" :key="index">
            <ItemList :data="pokemon" />
          </div>
        </div>
        <Empty v-else />
      </div>
      <!-- TAB FAVORITE -->
      <div class="mt-3 mb-5" v-if="getTabIndex === 'favorite'">
        <div v-if="getFavorites.length > 0" class="pb-5">
          <div v-for="(pokemon, index) in getFavorites" :key="index">
            <ItemList :data="pokemon" />
          </div>
        </div>
        <Empty v-else />
      </div>
      <BottomBar v-if="allPokemons.length > 0" />
    </div>
    <div>
      <ScreenLoading v-if="getLoading" />
    </div>
    <DetailPokemon :isActive="getModalDetail" />
  </ViewRoute>
</template>
<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
import ViewRoute from "@/layouts/Layout";
import ScreenLoading from "@/components/loadings/ScreenLoading";
import Search from "@/components/widgets/Search";
import ItemList from "@/components/widgets/ItemList";
import BottomBar from "@/components/widgets/BottomBar";
import DetailPokemon from "@/components/widgets/DetailPokemon";
import Empty from "@/components/widgets/Empty";
export default {
  components: {
    ViewRoute,
    ScreenLoading,
    Search,
    ItemList,
    BottomBar,
    DetailPokemon,
    Empty,
  },
  data: () => ({}),
  mounted() {},
  created() {
    this.GET_POKEMONS();
  },
  computed: {
    ...mapState("pokemon", ["pokemons", "loading"]),
    ...mapGetters("pokemon", [
      "getPokemons",
      "getTabIndex",
      "getTextSearch",
      "getFavorites",
      "getLoading",
      "getModalDetail",
    ]),
    allPokemons() {
      const result = this.getPokemons.filter(
        (item) =>
          item.name.toLowerCase().indexOf(this.getTextSearch.toLowerCase()) > -1
      );
      return this.getTextSearch != "" ? result : this.getPokemons;
    },
  },
  methods: {
    ...mapActions("pokemon", ["GET_POKEMONS"]),
    ...mapMutations("pokemon", ["SET_TAB_INDEX"]),
  },
  destroyed() {
    this.SET_TAB_INDEX("all");
  },
};
</script>
<style lang="scss" scoped></style>
