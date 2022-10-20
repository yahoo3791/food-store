import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/Front/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/Front/AboutView.vue'),
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/Front/FaqView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Front/ContactView.vue'),
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/views/Front/ShopView.vue'),
  },
  {
    path: '/chinese',
    name: 'chinese',
    component: () => import('@/views/Front/ChineseShop.vue'),
    children: [
      {
        path: 'chineseall',
        name: 'chineseall',
        component: () => import('@/views/Front/ChineseAll.vue'),
      },
      {
        path: 'chinesemeal',
        name: 'chinesemeal',
        component: () => import('@/views/Front/ChineseMeal.vue'),
      },
      {
        path: 'chinesedessert',
        name: 'chinesedessert',
        component: () => import('@/views/Front/ChineseDessert.vue'),
      },
    ],
  },
  {
    path: '/western',
    name: 'western',
    component: () => import('@/views/Front/WesternShop.vue'),
    children: [
      {
        path: 'westernall',
        name: 'westernall',
        component: () => import('@/views/Front/WesternAll.vue'),
      },
      {
        path: 'westernmeal',
        name: 'westernmeal',
        component: () => import('@/views/Front/WesternMeal.vue'),
      },
      {
        path: 'westerndessert',
        name: 'westerndessert',
        component: () => import('@/views/Front/WesternDessert.vue'),
      },
    ],
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Front/CartView.vue'),
  },
  {
    path: '/orderview',
    name: 'orderview',
    component: () => import('@/views/Front/OrderView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
