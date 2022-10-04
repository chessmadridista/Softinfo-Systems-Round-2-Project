<template>
    <v-select
    outlined
    rounded
    dense
    :items="$store.state.news.map(item => item.title)"
    hide-details="auto"
    label="Search news"
    v-model="newsItem"
    @change="navigateToSelectedItem()">
    </v-select>
</template>
<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            newsItem: "",
        };
    },
    methods: {
        navigateToSelectedItem() {
            const NEWS_ITEM = this.newsItem;
            const ITEMS = this.$store.state.news;
            const REQUIRED_ITEMS = ITEMS.filter((item) => {
                return item.title == NEWS_ITEM;
            });
            const ID_PREPEND = "item-";
            const ID = ID_PREPEND + REQUIRED_ITEMS[0].id;
            const CURRENT_ROUTE_NAME = this.$route.matched[0].name;
            const NEWS_ROUTE_NAME = "explore";
            
            if (CURRENT_ROUTE_NAME === NEWS_ROUTE_NAME) {
                setTimeout(() => {
                        const item = document.getElementById(ID);
                        item.scrollIntoView();
                }, 0);
            } else {
                this.$router.push({name: 'explore', params: { id: ID }})
            }

            return true;
        },
    },
}
</script>