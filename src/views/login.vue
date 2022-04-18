<template>
  <div class="login-wrapper">
    <form action="post" v-on:submit.prevent="submitHandler">
      <input type="text" v-model.trim="email" placeholder="Введите ваш email" />
      <input
        type="password"
        v-model="password"
        placeholder="Введите ваш пароль"
        :class="{
          invalid: v$.password.$invalid && !v$.password.required.$invalid,
        }"
      />

      <button type="submit">Send</button>
    </form>
    <div class="form_link">
      <router-link to="/register">Регистрация</router-link>
    </div>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
  name: "login",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations() {
    return {
      email: { email, required },
      password: { required, minLength: minLength(6) },
    };
  },
  methods: {
    submitHandler() {
      this.$router.push("/news");
    },
  },
};
</script>