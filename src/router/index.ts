import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import PortfolioCreation from "@/pages/PortfolioCreation.vue";
import UserProfile from "@/pages/UserProfile.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import TransactionsPage from "@/pages/TransactionsPage.vue";
import EducationPage from "@/pages/EducationPage.vue";
import PortfoliosPage from "@/pages/PortfoliosPage.vue";
import InterestingArticles from "@/pages/InterestingArticles.vue";
import EducationalVideos from "@/pages/EducationalVideos.vue";
import LockedTasks from "@/pages/LockedTasks.vue";
import DoneTasks from "@/pages/DoneTasks.vue";
import AvailableTasks from "@/pages/AvailableTasks.vue";

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
      redirect: '/education/interesting_articles',
      component: EducationPage,
      children: [
        {
          path: 'interesting_articles',
          component: InterestingArticles
        },
        {
          path: 'educational_videos',
          component: EducationalVideos
        },
        {
          path: 'locked_tasks',
          component: LockedTasks
        },
        {
          path: 'done_tasks',
          component: DoneTasks
        },
        {
          path: 'available_tasks',
          component: AvailableTasks
        }
      ]
    },
    {
      path: '/portfolios',
      name: 'portfolios',
      component: PortfoliosPage
    }
  ]
})

export default router
