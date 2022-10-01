<template>
    <v-container>
        <v-switch
        v-model="darkMode"
        label="Dark mode"
        @click="update()">
        </v-switch>
    </v-container>
</template>
<script>
export default {
    name: "Settings",
    data() {
        return {
            darkMode: this.$vuetify.theme.dark,
        };
    },
    methods: {
        setSnackbarAttributes() {
            const snackbarMessage = "The theme has been successfully updated!";
            const snackbarColor = "success";
            const showSnackbar = true;
            this.$store.dispatch("setSnackbarMessage", snackbarMessage);
            this.$store.dispatch("setSnackbarColor", snackbarColor);
            this.$store.dispatch("setSnackbarState", showSnackbar);
            setTimeout(() => {
                const showSnackbar = false;
                this.$store.dispatch("setSnackbarState", showSnackbar);
            }, 2000);

            return true;
        },
        setTheme() {
            if (this.darkMode) {
                this.$vuetify.theme.dark = true;
            } else {
                this.$vuetify.theme.dark = false;
            }

            return true;
        },
        update() {
            this.setTheme();
            this.setSnackbarAttributes();
        },
    },
    mounted() {
        setTimeout(() => {
            this.$store.dispatch('stopLoading');
        }, 1000);
    },
};
</script>