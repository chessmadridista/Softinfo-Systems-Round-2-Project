<template>
    <v-container>
        <v-card>
            Home
        </v-card>
        <v-card>
            Home
        </v-card>
        <v-card>
            Home
        </v-card>
        <v-card>
            Home
        </v-card>
        <v-card>
            Home
        </v-card>
        <v-card>
            Home
        </v-card>
        <v-card>
            Home
        </v-card>
        <v-card>
            Home
        </v-card>
        <v-card>
            Home
        </v-card>
        <v-card>
            Home
        </v-card>
        <v-card>
            Home
        </v-card>
        <v-card>
            Home
        </v-card>
        <v-card>
            Home
        </v-card>
        <v-card>
            Home
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: "Home",
    data() {
        return {
            tableHeaders: [
                "API",
                "Description",
                "Auth",
                "HTTPS",
                "Cors",
                "Link",
                "Category",
            ],
            tableItems: [],
        };
    },
    methods: {
        async getData() {
            const URL = "https://api.publicapis.org/entries";

            return fetch(URL)
                .then((response) => {
                    console.log(response);

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
            this.getData()
            .then((data) => {
                this.setData(data);
            });

            return true;
        },
    },
    mounted() {
        this.initialiseComponent();
    },
}
</script>