import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'
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
      name: 'main',
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
  const token = localCache.getCache(LOGIN_TOKEN)

  // 不是去login页面时，需要验证是否有登录态
  if (![LOGIN_PATH].includes(to.path)) {
    if (!token) return LOGIN_PATH
  }

  if(to.path === '/main' && token) {
    return firstMenu?.path
  }
})

export default router
