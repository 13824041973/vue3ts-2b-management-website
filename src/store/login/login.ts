import { LOGIN_TOKEN, USER_INFO, USER_MENUS } from '@/global/constants'
import router from '@/router'
import { accountLoginReq, userInfoReq, userMenusByRoleId } from '@/service/login/login'
import { localCache } from '@/utils/cache'
import { mapMenuToRoutes } from '@/utils/map-menus'
import type { AccountDataType } from '@/views/login/types'
import { defineStore } from 'pinia'

interface LoginStore {
  token: string
  userInfo: any
  userMenus: Array<any>
}

const useLoginStore = defineStore('login', {
  state: (): LoginStore => ({
    token: '',
    userInfo: {},
    userMenus: [],
  }),
  actions: {
    // 登录的流程
    async loginAccountAction(account: AccountDataType) {
      try {
        // 1.登录
        const loginRes: any = await accountLoginReq(account)
        this.token = loginRes.data.token
        localCache.setCache(LOGIN_TOKEN, this.token)

        // 2.获取用户信息
        const userInfoRes: any = await userInfoReq(loginRes.data.id)
        this.userInfo = userInfoRes.data
        localCache.setCache(USER_INFO, this.userInfo)

        // 3.获取用户信息的权限(菜单menus)
        const userMenusRes: any = await userMenusByRoleId(userInfoRes.data.role.id)
        this.userMenus = userMenusRes.data
        localCache.setCache(USER_MENUS, this.userMenus)

        // 将用户拥有的权限通过addRoute方式加到路由中
        const routes = mapMenuToRoutes(this.userMenus)
        routes.forEach((route) => router.addRoute('main', route))

        router.push('/main')
      } catch (error: any) {
        ElMessage.warning(error?.message || '服务器发生错误')
      }
    },

    // 本地加载用户的缓存（刷新就不会丢失路由导致404）
    loadLocalCacheAction() {
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache(USER_INFO)
      const userMenus = localCache.getCache(USER_MENUS)
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus

        // 将用户拥有的权限通过addRoute方式加到路由中
        const routes = mapMenuToRoutes(userMenus)
        routes.forEach((route) => router.addRoute('main', route))
      }
    },
  },
})

export default useLoginStore
