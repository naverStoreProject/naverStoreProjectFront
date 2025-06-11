import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import AppLayout from '@/components/layouts/AppLayout.vue'
import Page404 from '@/pages/notfound/Page404.vue'
import { routeMap } from '@/router/routeMap'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: routeMap.homePage,
        children: [
          {
            path: '/',
            name: 'main-home',
            component: routeMap.homeMain,
          },
          {
            path: 'deal',
            name: 'deal-home',
            component: routeMap.todayDeal,
          },
          {
            path: 'for-you',
            name: 'for-you-home',
            component: () => import('@/pages/home/_components/ForYouList.vue'),
          },
          {
            path: 'best',
            name: 'best-home',
            component: routeMap.bestItem,
          },
          {
            path: 'delivery',
            name: 'delivery-home',
            component: routeMap.delivery,
          },
          {
            path: 'fashion',
            name: 'fashion-home',
            component: routeMap.fashionBeauty,
          },
          {
            path: 'sale',
            name: 'sale-home',
            component: routeMap.todaySale,
          },
        ],
      },
      {
        path: 'search',
        name: 'search',
        component: routeMap.search,
        meta: { useHeader: false },
      },
      {
        path: 'login',
        name: 'login',
        component: routeMap.login,
      },
      {
        path: 'event',
        name: 'event',
        component: routeMap.event,
      },
      {
        path: 'cart',
        name: 'cart',
        component: routeMap.cart,
      },
      {
        path: 'category',
        name: 'category',
        component: routeMap.category,
        meta: { useHeader: false },
      },

      {
        path: '/category/:categoryId/:subCategoryId',
        name: 'category-detail',
        component: () => import('@/pages/category/_components/SubCategoryDetail.vue'),
        meta: { useHeader: true },
      },

      {
        path: 'product-list',
        name: 'product-list',
        component: routeMap.productList,
      },

      {
        path: 'product-item/:itemId',
        name: 'product-item',
        component: routeMap.productDetail,
        children: [
          {
            path: 'review',
            name: 'item-review',
            component: routeMap.productReview,
          },
        ],
      },
      {
        path: 'user',
        name: 'user',
        component: routeMap.user,
        children: [
          {
            path: '',
            name: 'mypage',
            component: routeMap.mypage,
          },
          {
            path: 'orders',
            name: 'orders',
            component: routeMap.order,
          },
          {
            path: 'orders/review/:orderId',
            name: 'review',
            component: routeMap.review,
          },
          {
            path: 'profile',
            name: 'profile',
            component: routeMap.profile,
          },
          {
            path: 'notice',
            name: 'notice',
            component: routeMap.notice,
          },
          {
            path: 'notice/qna',
            name: 'qna',
            component: routeMap.qna,
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
