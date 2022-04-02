<template>
  <ViewRoute>
    <div class="max-570 start">
      <div class="view-app__icon">
        <Pokemon />
      </div>
      <div>
        <div class="view-app__title">Welcome to Pokédex</div>
        <p class="view-app__coment">
          The digital encyclopedia created by Professor Oak is an invaluable
          tool to Trainers in the Pokémon world.
        </p>
        <div>
          <router-link to="/list" class="btn btn-go danger animation"
            >Get started</router-link
          >
        </div>
      </div>
    </div>
  </ViewRoute>
</template>
<script>
import ViewRoute from "@/layouts/Layout";
import Pokemon from "@/components/widgets/Pokemon";
export default {
  components: {
    ViewRoute,
    Pokemon,
  }
};
</script>
<style lang="scss" scoped></style>
