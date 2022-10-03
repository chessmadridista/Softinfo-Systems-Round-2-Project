<template>
    <v-container>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>
                {{ title }}
            </v-toolbar-title>
            <SearchBar />
        </v-app-bar>
        <v-navigation-drawer
        fixed
        temporary 
        v-model="drawer">
            <v-list
            nav>
                <v-list-item-group>
                    <v-list-item
                    v-for="item of items"
                    link
                    :key="item.itemID"
                    :to="item.itemLink"
                    @click="setPageTitle(item.itemTitle)">
                        <v-list-item-icon>
                            <v-icon>{{ item.itemIcon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ item.itemTitle }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>
<script>
import SearchBar from './SearchBar.vue';

export default {
    name: "NavigationHeader",
    components: {
        SearchBar,
    },
    data() {
        return {
            drawer: false,
            title: "Home",
            items: [
                {
                    itemID: 0,
                    itemIcon: "mdi-view-dashboard",
                    itemTitle: "Home",
                    itemLink: "/",
                },
                {
                    itemID: 1,
                    itemIcon: "mdi-magnify",
                    itemTitle: "Explore",
                    itemLink: "/explore",
                },
                {
                    itemID: 2,
                    itemIcon: "mdi-cog",
                    itemTitle: "Settings",
                    itemLink: "/settings",
                },
            ],
        };
    },
    methods: {
        setPageTitle(title) {
            this.title = title;

            return true;
        },
    },
};
</script>
<style lang="scss" scoped>
.v-list {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;

    .v-list-item__title {
        text-align: left;
    }
}
</style>