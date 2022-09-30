<template>
    <v-overlay
    opacity="1"
    z-index="6"
    v-model="isLoading">
        <v-progress-circular
        color="primary"
        indeterminate>
        </v-progress-circular>
    </v-overlay>
</template>
<script>
export default {
    name: "Loader",
    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },
    },
};
</script>