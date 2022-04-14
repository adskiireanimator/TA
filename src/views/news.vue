<template>
  <div class="posts">
    <div class="post" v-for="post in allposts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    allposts() {
      console.log(this.$store.getters.allposts);
      return this.$store.getters.allposts;
    },
  },
  async mounted() {
    this.$store.dispatch("fetchposts", 8);
  },
};
</script>