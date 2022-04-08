<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import formlayout from "@/layouts/formlayout.vue";
import mainlayout from "@/layouts/mainlayout.vue";

export default {
  computed: {
    layout() {
      return this.$route.meta.layout || "mainlayout";
    },
  },
  components: {
    mainlayout,
    formlayout,
  },
};
</script>


<style lang="scss">
//@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.scss";
</style>
