<template>
    <v-snackbar
    v-model="showSnackbar"
    :color="getSnackbarColor"
    top
    right
    >
        {{ getMessage }}
        <template v-slot:action="{ attrs }">
            <v-icon
            text
            v-bind="attrs"
            @click="hideSnackbar()"
            >
            mdi-close
            </v-icon>
        </template>
    </v-snackbar>
</template>
<script>
export default {
    name: "Snackbar",
    methods: {
        hideSnackbar() {
            const showSnackbar = false;
            this.$store.dispatch("setSnackbarState", showSnackbar);

            return true;
        },
    },
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