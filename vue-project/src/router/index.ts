import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import AppLayout from '@/components/layouts/AppLayout.vue'
import Page404 from '@/pages/notfound/Page404.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/home/HomePage.vue'),
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/pages/search/SearchPage.vue'),
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/auth/LoginPage.vue'),
      },
      {
        path: 'event',
        name: 'event',
        component: () => import('@/pages/event/EventPage.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/pages/cart/CartPage.vue'),
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('@/pages/category/CategoryPage.vue'),
      },
      {
        path: 'product-list',
        name: 'product-list',
        component: () => import('@/pages/product/ProductListPage.vue'),
      },
      {
        path: 'product-item/:itemId',
        name: 'product-item',
        component: () => import('@/pages/product/ProductDetailPage.vue'),
        children: [
          {
            path: 'review',
            name: 'item-review',
            component: () => import('@/pages/product/ProductReviewsPage.vue'),
          },
        ],
      },
      {
        path: 'user',
        component: () => import('@/pages/user/MypagePage.vue'),
        children: [
          {
            path: '',
            name: 'mypage',
            component: () => import('@/pages/user/MypageListPage.vue'),
          },
          {
            path: 'orders',
            name: 'orders',
            component: () => import('@/pages/user/orders/OrderListPage.vue'),
          },
          {
            path: 'orders/review/:orderId',
            name: 'review',
            component: () => import('@/pages/user/orders/ReviewPage.vue'),
          },
          {
            path: 'profile',
            name: 'profile',
            component: () => import('@/pages/user/profile/ProfilePage.vue'),
          },
          {
            path: 'notice',
            name: 'notice',
            component: () => import('@/pages/user/notice/NoticeListPage.vue'),
          },
          {
            path: 'notice/qna',
            name: 'qna',
            component: () => import('@/pages/user/notice/QnaPage.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: Page404,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
