import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { createWebHashHistory, createRouter } from 'vue-router'

const LOGIN_PATH = '/login'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      component: () => import('@/views/main/main.vue'),
    },
    {
      path: LOGIN_PATH,
      component: () => import('@/views/login/login.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/not-found/not-found.vue'),
    },
  ],
})

router.beforeEach((to) => {
  // 不是去login页面时，需要验证是否有登录态
  if (![LOGIN_PATH].includes(to.path)) {
    const token = localCache.getCache(LOGIN_TOKEN)
    if (!token) return LOGIN_PATH
  }
})

export default router
