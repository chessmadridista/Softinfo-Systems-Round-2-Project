<template>
    <v-container>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>
                Home
            </v-toolbar-title>
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
                    :key="item.itemID">
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
export default {
    name: "NavigationHeader",
    data() {
        return {
            drawer: false,
            items: [
                {
                    itemID: 0,
                    itemIcon: "mdi-view-dashboard",
                    itemTitle: "Home"
                },
                {
                    itemID: 1,
                    itemIcon: "mdi-magnify",
                    itemTitle: "Explore"
                },
                {
                    itemID: 2,
                    itemIcon: "mdi-cog",
                    itemTitle: "Settings"
                },

            ],
        };
    },
};
</script>