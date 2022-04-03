<template>
  <div>
    <Modal :is-modal="isActive" closeOuth @closeModal="ignoreModal">
      <div class="md-detail">
        <div class="md-detail__content-img">
          <div class="md-detail__img" v-if="getPokemon != null">
            <img :src="getImgPokemon" :alt="getPokemon.name" />
          </div>
        </div>
        <div class="md-detail__main" v-if="getPokemon != null">
          <div class="md-detail__item">
            Name: <span>{{ getPokemon.name | capitalize }}</span>
          </div>
          <div class="md-detail__item">
            Weight: <span>{{ getPokemon.weight }}</span>
          </div>
          <div class="md-detail__item">
            Height: <span>{{ getPokemon.height }}</span>
          </div>
          <div class="md-detail__item">
            Types: <span>{{ getTypesText }}.</span>
          </div>
        </div>
        <div class="md-detail__footer">
          <div class="md-detail__cta">
            <button
              class="btn btn-go danger block-cta copy"
              @click.prevent="copyCode"
            >
              <div v-if="!copy">Share to my friends</div>
              <div v-else>Copied!</div>
            </button>
          </div>
          <div
            v-if="getPokemon != null"
            class="favorite"
            :class="{ active: activeFavorite(getPokemon.name) }"
            @click="addFavorite({ name: getPokemon.name, url: '' })"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6052 0.904438L8.43178 7.62704L1.33161 8.70855C0.0583408 8.9015 -0.451939 10.5415 0.471424 11.4809L5.60824 16.7107L4.39329 24.0984C4.1746 25.4338 5.52076 26.4341 6.64824 25.8096L13 22.3213L19.3518 25.8096C20.4792 26.429 21.8254 25.4338 21.6067 24.0984L20.3918 16.7107L25.5286 11.4809C26.4519 10.5415 25.9417 8.9015 24.6684 8.70855L17.5682 7.62704L14.3948 0.904438C13.8262 -0.293851 12.1787 -0.309084 11.6052 0.904438Z"
                fill="#BFBFBF"
              />
            </svg>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
import Pokemon from "@/mixins/pokemon";
import Modal from "@/components/modals/Modal";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    Modal,
  },
  mixins: [Pokemon],
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    copy: false,
  }),
  computed: {
    ...mapGetters("pokemon", ["getPokemon"]),
    getImgPokemon() {
      if (this.getPokemon != null) {
        return this.getPokemon.sprites.other.home.front_default;
      } else {
        return "/img/images/pokemon.png";
      }
    },
    getTypesText() {
      if (this.getPokemon != null) {
        const types = this.getPokemon.types
          .map((value) => {
            const text = value.type.name;
            text.toString();
            const textVal = text.charAt(0).toUpperCase() + text.slice(1);
            return ` ${textVal}`;
          })
          .toString();
        return types;
      } else {
        return "";
      }
    },
  },
  methods: {
    ...mapMutations("pokemon", ["SET_MODAL_DETAIL", "SET_POKEMON"]),
    ignoreModal() {
      this.SET_MODAL_DETAIL(false);
      this.copy = false;
      this.SET_POKEMON(null);
    },
    async copyCode() {
      this.copy = true;
      let textCopy = `Just look!, Name: ${this.getPokemon.name}, Weight: ${this.getPokemon.weight}, Height: ${this.getPokemon.height} and Types: ${this.getTypesText}.`;
      await navigator.clipboard.writeText(textCopy);
    },
  },
};
</script>
<style lang="scss" scoped></style>
