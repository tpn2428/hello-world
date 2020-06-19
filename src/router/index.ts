import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import About from '../views/about/about.vue';
import FunMath from '../views/fun-math/fun-math.vue';
import Home from '../views/home/home.vue';
import Meme from '../views/meme/meme.vue';
import Project from '../views/project/project.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [

    ],
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
  },
  {
    path: '/fun-math',
    name: 'Fun Math',
    component: FunMath,
  },
  {
    path: '/meme',
    name: 'Meme',
    component: Meme,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
