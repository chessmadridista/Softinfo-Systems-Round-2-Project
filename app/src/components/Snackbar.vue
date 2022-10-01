<template>
    <v-snackbar>

    </v-snackbar>
</template>
<script>
export default {
    name: "Snackbar",
    computed: {
        getMessage() {
            return this.$store.state.snackbarMessage;
        },
        getSnackbarColor() {
            return this.$store.state.snackbarColor;
        },
        showSnackbar() {
            return this.$store.state.showSnackbar;
        },
    },
}
</script>