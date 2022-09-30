<template>
    <v-container>
        <v-switch
        v-model="darkMode"
        label="Dark mode">
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
    mounted() {
        setTimeout(() => {
            this.$store.dispatch('stopLoading');
        }, 1000);
    },
};
</script>