<template>
  <div class="hello">
    <h2>Here's the dashboard</h2>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
