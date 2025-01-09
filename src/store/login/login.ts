import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import { accountLoginReq, userInfoReq } from '@/service/login/login'
import { localCache } from '@/utils/cache'
import type { AccountDataType } from '@/views/login/types'
import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: -1,
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo: {},
  }),
  actions: {
    async loginAccountAction(account: AccountDataType) {
      try {
        const loginRes: any = await accountLoginReq(account)
        this.id = loginRes.data.id
        this.token = loginRes.data.token
        localCache.setCache(LOGIN_TOKEN, this.token)

        const userInfoRes: any = await userInfoReq(this.id)
        this.userInfo = userInfoRes.data

        router.push('/main')
      } catch (error: any) {
        ElMessage.warning(error?.message || '服务器发生错误')
      }
    },
  },
})

export default useLoginStore
