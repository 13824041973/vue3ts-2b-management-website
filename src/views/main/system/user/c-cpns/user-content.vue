<template>
  <div class="mt-5 p-5 bg-white">
    <div class="flex justify-between items-end mb-2.5">
      <h3 class="text-2xl">用户列表</h3>
      <el-button type="primary">新建用户</el-button>
    </div>
    <div class="content">
      <el-table :data="usersList" border>
        <el-table-column type="selection" align="center" width="50" />
        <el-table-column type="index" label="序号" align="center" width="80" />
        <el-table-column prop="name" label="用户名" align="center" width="120" />
        <el-table-column prop="realname" label="真实姓名" align="center" width="120" />
        <el-table-column prop="cellphone" label="手机号码" align="center" width="180" />
        <el-table-column prop="enable" label="状态" align="center" width="100" />
        <el-table-column prop="createAt" label="创建时间" align="center" />
        <el-table-column prop="updateAt" label="更新时间" align="center" />
        <el-table-column label="操作" align="center" width="150">
          <el-button type="primary" size="small" icon="Edit" text>编辑</el-button>
          <el-button type="danger" size="small" icon="Edit" text>删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination"></div>
  </div>
</template>

<script lang="ts" setup>
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'

const systemStore = useSystemStore()
systemStore.postUsersListActions()

const { usersList } = storeToRefs(systemStore)
</script>

<style lang="less" scoped>
.el-table {
  :deep(.el-table__cell) {
    padding: 10px 0;
  }

  .el-button {
    margin-left: 0;
    padding: 5px 8px;
  }
}
</style>
