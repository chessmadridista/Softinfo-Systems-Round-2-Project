<template>
    <v-container>
        <v-row>
            <v-col 
            v-for="item of items"
            :key="item.id"
            cols=12
            md=6
            lg=4>
                <v-card
                class="pa-2 rounded-lg"
                height="600px"
                :id="calcId(item.id)">
                    <v-card-title
                    class="mb-1"
                    >
                        <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
                    </v-card-title>
                    <v-card-subtitle>- {{ item.author }}</v-card-subtitle>
                    <v-img :src="item.imageUrl"></v-img>
                    <v-card-text>
                        {{ item.content }}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                        rounded
                        absolute
                        bottom 
                        right
                        class="mr-2 mb-2"
                        color="error"
                        @click="deleteItem(item.id)">
                            Delete
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "Explore",
    data() {
        return {
            items: [],
        };
    },
    methods: {
        calcId(id) {
            const PREPEND_ID = "item-";
            const FINAL_ID = PREPEND_ID + id;
            
            return FINAL_ID;
        },
        async getData() {
            const URL = "https://inshorts.deta.dev/news?category=science";

            return fetch(URL)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    return data.data;
                });
        },
        setData(data) {
            this.items = data;

            return true;
        },
        initialiseComponent() {
            if (this.$store.state.news.length === 0) {
                this.getData()
                .then((data) => {
                    this.setData(data);
                    this.$store.dispatch('setNews', data);
                })
                .catch(() => {
                    const message = "Sorry, the API is not reachable at the moment. Please reload or try again after some time.";
                    const color = "error";
                    const showSnackbar = true;
                    this.$store.dispatch('setSnackbarMessage', message);
                    this.$store.dispatch('setSnackbarColor', color);
                    this.$store.dispatch('setSnackbarState', showSnackbar);
                    setTimeout(() => {
                        this.$store.dispatch('setSnackbarState', !showSnackbar);
                    }, 4500);
                })
                .finally(() => {
                    this.$store.dispatch('stopLoading');
                });
            } else {
                const data = this.$store.state.news;
                this.setData(data);
                setTimeout(() => {
                    this.$store.dispatch('stopLoading');
                }, 2000);
            }

            return true;
        },
        setSnackbarAttributes() {
            const snackbarMessage = "The item has been deleted successfully!";
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
        deleteItem(itemId) {
            this.items = this.items.filter(item => item.id != itemId);
            this.setSnackbarAttributes();

            return true;
        },
    },
    mounted() {
        this.initialiseComponent();

        setTimeout(() => {
            const PARAM = this.$route.params.id;
            
            if (PARAM) {
                const item = document.getElementById(PARAM);
                console.log(item);
                item.scrollIntoView();
            }
        }, 0);
    },
};
</script>
<style lang="scss" scoped>
.v-image {
    display: block;
    width: 150px;
    height: 150px;
    margin: auto;
}
</style>