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
        <router-view />
        <div class="post" v-for="post in allposts" :key="post.id">
          <h1>{{ post.title }}</h1>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

