<template>
  <div class="user">
    <UserSearch v-model:searchForm="searchForm" @search-table="fetchUserListData" />
    <UserContent
      v-model:currentPage="currentPage"
      v-model:pageSize="pageSize"
      @search-table="fetchUserListData"
      @add-user="handleAddUser"
    />
    <UserModal ref="userModalRef" />
  </div>
</template>
<script lang="ts" setup>
import UserContent from './c-cpns/user-content.vue'
import UserModal from './c-cpns/user-modal.vue'
import UserSearch from './c-cpns/user-search.vue'

import useSystemStore from '@/store/main/system/system'
import { reactive, ref } from 'vue'

const systemStore = useSystemStore()
const searchForm = reactive({
  name: '',
  realName: '',
  cellphone: '',
  enable: 1,
  createAt: [],
})
const currentPage = ref(1)
const pageSize = ref(10)
fetchUserListData()

function fetchUserListData() {
  const query = {
    pageSize: pageSize.value,
    currentPage: currentPage.value,
  }
  const info = {
    ...searchForm,
    ...query,
  }

  systemStore.postUsersListActions(info)
}

const userModalRef = ref<InstanceType<typeof UserModal>>()
function handleAddUser() {
  userModalRef.value?.setModalVisible()
}
</script>
<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
