<template>
  <div class="register-wrapper">
    <form action="post">
      <input type="password" name="password" />
      <input type="text" name="login" />
      <button type="submit"></button>
    </form>
    <router-link to="/login">Login</router-link>
  </div>
</template>