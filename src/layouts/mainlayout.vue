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
      <div class="sidemenu">
        <a href="#"><div class="sidemenu_link">Мои посты</div></a>
        <a href="#"><div class="sidemenu_link">Мои друзья</div></a>
        <a href="#"><div class="sidemenu_link">Лента</div></a>
        <a href="#"><div class="sidemenu_link">ААААААА</div></a>
      </div>
      <div class="mainpage">
        <div class="friends-wrapper">
          <div class="slider-container">
            <div class="slider-track">
              <div class="slider-item" v-for="user in friends" :key="user.id">
                <a href="#">{{ user.name }}</a>
                <p>{{ friends.length }}</p>
                <div class="userphotocontainer"></div>
                <p>{{ user.status }}</p>
              </div>
            </div>
          </div>
          <div class="slider-buttons">
            <button class="btn-prev">prev</button>
            <button class="btn-next">next</button>
          </div>
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
    this.$store.dispatch("fetchusers", 1);
  },
};
window.onload = () => {
  let position = 0;
  const slides_to_show = 5;
  const slides_to_scroll = 1;
  const container = document.querySelector(".slider-container");
  const track = document.querySelector(".slider-track");
  let items = document.querySelectorAll(".slider-item");
  const btnprev = document.querySelector(".btn-prev");
  const btnnext = document.querySelector(".btn-next");

  const itemsCount = items.length;
  const itemWidth = container.clientWidth / slides_to_show;
  const movePOsition = slides_to_scroll * itemWidth;
  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnnext.addEventListener("click", () => {
    const itemsLeft =
      itemsCount -
      (Math.abs(position) + slides_to_show * itemWidth) / itemWidth;
    position -=
      itemsLeft >= slides_to_scroll ? movePOsition : itemsLeft * itemWidth;
    setposition();
    checkbuttons();
  });

  btnprev.addEventListener("click", () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position +=
      itemsLeft >= slides_to_scroll ? movePOsition : itemsLeft * itemWidth;
    setposition();
    checkbuttons();
  });

  const setposition = () => {
    console.log(position);
    track.style.transform = `translateX(${position}px)`;
  };

  const checkbuttons = () => {
    btnprev.disabled = position === 0;
    btnnext.disabled = position <= -(itemsCount - slides_to_show) * itemWidth;
  };
  checkbuttons();
};
</script>


