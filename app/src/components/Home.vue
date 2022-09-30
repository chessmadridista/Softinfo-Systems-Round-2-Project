<template>
    <v-container>
        <v-data-table
        :headers="tableHeaders"
        :items="tableItems"
        height="400"
        disable-pagination
        fixed-header
        hide-default-footer
        class="elevation-2">
        </v-data-table>
    </v-container>
</template>
<script>
export default {
    name: "Home",
    data() {
        return {
            tableHeaders: [
                {
                    text: "API",
                    value: "API",
                    width: "200",
                },
                {
                    text: "Description",
                    value: "Description",
                    width: "200",
                },
                {
                    text: "Auth",
                    value: "Auth",
                    width: "200",
                },
                {
                    text: "HTTPS",
                    value: "HTTPS",
                    width: "200",
                },
                {
                    text: "Cors",
                    value: "Cors",
                    width: "200",
                },
                {
                    text: "Link",
                    value: "Link",
                    width: "200",
                },
                {
                    text: "Category",
                    value: "Category",
                    width: "200",
                },
            ],
            tableItems: [],
        };
    },
    methods: {
        setFixedColumnAndHeaderBackground() {
            if (this.$vuetify.theme.dark) {
                document.documentElement.style.setProperty("--fixedCellBackground", "#1e1e1e");
            } else {
                document.documentElement.style.setProperty("--fixedCellBackground", "#fff");
            }

            return true;
        },
        async getData() {
            const URL = "https://api.publicapis.org/entries";

            return fetch(URL)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    return data.entries;
                });
        },
        setData(data) {
            this.tableItems = data;

            return true;
        },
        initialiseComponent() {
            this.setFixedColumnAndHeaderBackground();
            this.getData()
            .then((data) => {
                this.setData(data);
                this.$store.dispatch('stopLoading');
            });

            return true;
        },
    },
    mounted() {
        this.initialiseComponent();
    },
}
</script>
<style lang="scss">
:root {
    --fixedCellBackground: #fff;
}
th:first-child {
    position: sticky;
    left: 0;
    top: 0;
    z-index: 4 !important;
}
td:first-child {
    position: sticky;
    left: 0;
    z-index: 3 !important;
    // background: #fff;
    background: var(--fixedCellBackground);
}
</style>