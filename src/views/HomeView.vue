<template>
  <div class="post" v-for="post in allposts" :key="post.id">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
  <p>s</p>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
