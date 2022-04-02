<template>
  <ViewRoute>
    <div class="max-570 view-list">
      <div class="pt-3 pb-3"><Search /></div>
      <div class="mt-3">
        <div><ItemList /></div>
        <div><ItemList /></div>
      </div>
      <Empty />
      <BottomBar />
    </div>
    <div>
      <ScreenLoading v-if="loading" />
    </div>
    <DetailPokemon :isActive="false" />
  </ViewRoute>
</template>
<script>
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
  data: () => ({
    loading: true,
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>
<style lang="scss" scoped></style>
