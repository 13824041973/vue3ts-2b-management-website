import { postUsersListData } from '@/service/main/system/system'
import { defineStore } from 'pinia'
import type { ISystemState } from './type'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,
  }),
  actions: {
    async postUsersListActions() {
      const usersListResult = await postUsersListData()
      const { totalCount, list } = usersListResult.data
      this.usersList = list
      this.usersTotalCount = totalCount
    },
  },
})

export default useSystemStore
