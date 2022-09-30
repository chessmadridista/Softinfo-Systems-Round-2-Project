import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue';
import Explore from '../components/Explore.vue';
import Settings from '../components/Settings.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/explore',
    name: 'explore',
    component: Explore,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
];

const router = new VueRouter({
  routes
})

export default router
