<template>
  <v-app>
    <Loader />
    <NavigationHeader />
    <Snackbar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
import NavigationHeader from "./components/NavigationHeader.vue";
import Loader from "./components/Loader.vue";
import Snackbar from "./components/Snackbar.vue";

export default {
  name: "App",
  components: {
    NavigationHeader,
    Loader,
    Snackbar,
  },
  watch: {
    $route() {
      this.$store.dispatch('startLoading');
      setTimeout(() => {
        this.$store.dispatch('stopLoading');
      }, 5000)
    },
  }
}
</script>