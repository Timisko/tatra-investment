import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import PortfolioCreation from "@/pages/PortfolioCreation.vue";
import UserProfile from "@/pages/UserProfile.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import TransactionsPage from "@/pages/TransactionsPage.vue";
import EducationPage from "@/pages/EducationPage.vue";
import PortfoliosPage from "@/pages/PortfoliosPage.vue";

import { Api } from '@/util/serverCommunication';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: MainPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/create/portfolio',
      name: 'create_portfolio',
      component: PortfolioCreation,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserProfile,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionsPage
    },
    {
      path: '/education',
      name: 'education',
      component: EducationPage
    },
    {
      path: '/portfolios',
      name: 'portfolios',
      component: PortfoliosPage
    }
  ]
})

export default router
