<template>
  <v-app>
    <Loader />
    <NavigationHeader />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
import NavigationHeader from "./components/NavigationHeader.vue";
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  components: {
    NavigationHeader,
    Loader,
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
