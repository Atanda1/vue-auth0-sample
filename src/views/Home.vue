<template>
  <div class="home">
    <button @click="login">Login</button>
    <button @click="signup">Signup</button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  methods: {
    login() {
      this.$store.dispatch('login')
    },
    signup() {
      this.$store.dispatch('signup')
    }
  }
};
</script>
