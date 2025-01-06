import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    name: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
  }),
  actions: {
    loginAccountAction(account: any) {
      if (account.token) {
        this.id = account.id
        this.name = account.name
        this.token = account.token

        localCache.setCache(LOGIN_TOKEN, account.token)
      }
    },
  },
})

export default useLoginStore
