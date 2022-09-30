<template>
    <v-container>
        <v-switch
        v-model="darkMode"
        label="Dark mode"
        @click="setTheme()">
        </v-switch>
    </v-container>
</template>
<script>
export default {
    name: "Settings",
    data() {
        return {
            darkMode: false,
        };
    },
    methods: {
        setTheme() {
            if (this.darkMode) {
                this.$vuetify.theme.dark = true;
            } else {
                this.$vuetify.theme.dark = false;
            }

            return true;
        },
    },
    mounted() {
        setTimeout(() => {
            this.$store.dispatch('stopLoading');
        }, 1000);
    },
};
</script>