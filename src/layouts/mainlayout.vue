<template>
  <div>
    <div class="navbar">
      <a href="/news"><div class="mainlink">news</div></a>
      <a href="/login"><div class="mainlink">login</div></a>
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

