import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import { accountLoginReq, userInfoReq, userMenusByRoleId } from '@/service/login/login'
import { localCache } from '@/utils/cache'
import type { AccountDataType } from '@/views/login/types'
import { defineStore } from 'pinia'

interface LoginStore {
  token: string
  userInfo: any
  userMenus: Array<any>
}

const useLoginStore = defineStore('login', {
  state: (): LoginStore => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo: {},
    userMenus: [],
  }),
  actions: {
    async loginAccountAction(account: AccountDataType) {
      try {
        // 登录
        const loginRes: any = await accountLoginReq(account)
        this.token = loginRes.data.token
        localCache.setCache(LOGIN_TOKEN, this.token)

        // 获取用户信息
        const userInfoRes: any = await userInfoReq(loginRes.data.id)
        this.userInfo = userInfoRes.data

        // 获取用户信息的权限
        const userMenusRes: any = await userMenusByRoleId(userInfoRes.data.role.id)
        this.userMenus = userMenusRes.data

        router.push('/main')
      } catch (error: any) {
        ElMessage.warning(error?.message || '服务器发生错误')
      }
    },
  },
})

export default useLoginStore
