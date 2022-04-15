<template>
  <div>
    <div class="navbar">
      <div class="burgermenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <a href="/news"><div class="mainlink">Новости</div></a>
      <a href="/login"><div class="mainlink">Регистрация</div></a>
    </div>
    <main>
      <div class="sidemenu"></div>
      <div class="mainpage">
        <div class="friends-wrapper">
          <div class="prev-transition"></div>
          <div class="friend-container" v-for="user in friends" :key="user.id">
            <a href="#">{{ user.name }}</a>
            <div class="userphotocontainer"></div>
            <p>{{ user.status }}</p>
          </div>
          <div class="next-transition"></div>
        </div>
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    friends() {
      return this.$store.getters.friendsarr;
    },
  },
  async mounted() {
    this.$store.dispatch("fetchusers", 4);
  },
};
</script>


