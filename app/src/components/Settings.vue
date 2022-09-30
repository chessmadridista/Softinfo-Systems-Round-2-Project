<template>
    <v-container>
        Sample code
    </v-container>
</template>
<script>
export default {
    name: "Settings",
    mounted() {
        setTimeout(() => {
            this.$store.dispatch('stopLoading');
        }, 1000);
    },
};
</script>