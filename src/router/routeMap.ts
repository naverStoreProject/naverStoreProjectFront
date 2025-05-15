const routeMap: Record<string, () => Promise<any>> = {
  //home
  homePage: () => import('@/pages/home/HomePage.vue'),
  homeMain: () => import('@/pages/home/_components/HomeMain.vue'),

  //home components
  bestItem: () => import('@/pages/home/_components/BestItem.vue'),
  cardNews: () => import('@/pages/home/_components/CardNews.vue'),
  delivery: () => import('@/pages/home/_components/Delivery.vue'),
  fashionBeauty: () => import('@/pages/home/_components/FashionBeauty.vue'),
  forYou: () => import('@/pages/home/_components/ForYou.vue'),
  // productList: () => import('@/pages/home/_components/ProductList.vue'),
  todaySale: () => import('@/pages/home/_components/TodaySale.vue'),
  todayDeal: () => import('@/pages/home/_components/TodayDeal.vue'),

  //search
  search: () => import('@/pages/search/SearchPage.vue'),

  //login
  login: () => import('@/pages/auth/LoginPage.vue'),

  //event
  event: () => import('@/pages/event/EventPage.vue'),

  //cart
  cart: () => import('@/pages/cart/CartPage.vue'),

  //category
  category: () => import('@/pages/category/CategoryPage.vue'),

  //product
  productList: () => import('@/pages/product/ProductListPage.vue'),
  productDetail: () => import('@/pages/product/ProductDetailPage.vue'),
  productReview: () => import('@/pages/product/ProductReviewsPage.vue'),

  //user
  user: () => import('@/pages/user/MypagePage.vue'),

  //user components
  mypage: () => import('@/pages/user/MypageListPage.vue'),
  order: () => import('@/pages/user/orders/OrderListPage.vue'),
  review: () => import('@/pages/user/orders/ReviewPage.vue'),
  profile: () => import('@/pages/user/profile/ProfilePage.vue'),
  notice: () => import('@/pages/user/notice/NoticeListPage.vue'),
  qna: () => import('@/pages/user/notice/QnaPage.vue'),

  //side
  alarm: () => import('@/pages/side/Alarm.vue'),
  couponSale: () => import('@/pages/side/CouponSale.vue'),
  foodWindow: () => import('@/pages/side/FoodWindow.vue'),
  fashionTown: () => import('@/pages/side/FashionTown.vue'),
  giftShop: () => import('@/pages/side/GiftShop.vue'),
  market: () => import('@/pages/side/Market.vue'),
  onePlus: () => import('@/pages/side/OnePlus.vue'),
  shoppingLive: () => import('@/pages/side/ShoppingLive.vue'),
  superCredit: () => import('@/pages/side/SuperCredit.vue'),
}

export { routeMap }
