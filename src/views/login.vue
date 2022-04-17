<template>
  <div class="login-wrapper">
    <form action="post" v-on:submit.prevent="submitHandler">
      <input
        type="text"
        v-model.trim="email"
        :class="{
          invalid:
            ($v.email.$dirty && !$v.email.required) ||
            ($v.email.$dirty && !$v.email.email),
        }"
      />
      <input type="password" v-model="password" />
      <button type="submit">Send</button>
    </form>
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  setup() {
    return { $v: useVuelidate() };
  },
  validations() {
    return {
      email: { email, required },
      password: { required, minLength: minLength(6) },
    };
  },
  methods: {
    submitHandler() {
      //if (this.$v.$invalid) {
      //this.$v.$touch();
      console.log(25);
      //return;
      //}
      this.$router.push("/aboba");
    },
  },
};
</script>