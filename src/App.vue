<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import formlayout from "@/layouts/formlayout.vue";
import mainlayout from "@/layouts/mainlayout.vue";

export default {
  computed: {
    layout() {
      return this.$route.meta.layout || "mainlayout";
    },
    allposts() {
      console.log(this.$store.getters.allposts);
      return this.$store.getters.allposts;
    },
  },
  components: {
    mainlayout,
    formlayout,
  },
  mounted() {
    this.$store.dispatch("fetchposts");
  },
};
</script>


<style lang="scss">
//@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.scss";
</style>
