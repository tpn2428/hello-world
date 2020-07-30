import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import {AppRoute} from '../app/app-route';
import About from '../views/about/about.vue';
import FunMath from '../views/fun-math/fun-math.vue';
import Home from '../views/home/home.vue';
import Meme from '../views/meme/meme.vue';
import Project from '../views/project/project.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: AppRoute.Home,
    component: Home,
  },
  {
    path: '/about',
    name: AppRoute.About,
    component: About,
    children: [],
  },
  {
    path: '/projects',
    name: AppRoute.Projects,
    component: Project,
  },
  {
    path: '/fun-math',
    name: AppRoute.FunMath,
    component: FunMath,
  },
  {
    path: '/meme',
    name: AppRoute.Meme,
    component: Meme,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
