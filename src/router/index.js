import MainPage from '@/pages/MainPage.vue';
import TaskManagerPage from '@/pages/TaskManagerPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/task-manager',
    component: TaskManagerPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
