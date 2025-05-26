<template>
  <div class="mt-5 p-5 bg-white">
    <div class="flex justify-between items-end mb-2.5">
      <h3 class="text-2xl">用户列表</h3>
      <el-button @click="handleAddUser" type="primary">新建用户</el-button>
    </div>
    <div class="content">
      <el-table :data="usersList" border>
        <el-table-column type="selection" align="center" width="50" />
        <el-table-column type="index" label="序号" align="center" width="80" />
        <el-table-column prop="name" label="用户名" align="center" width="120" />
        <el-table-column prop="realname" label="真实姓名" align="center" width="120" />
        <el-table-column prop="cellphone" label="手机号码" align="center" width="180" />
        <el-table-column prop="enable" label="状态" align="center" width="100">
          <template #default="{ row: { enable } }"> {{ enable ? '启用' : '禁用' }} </template>
        </el-table-column>
        <el-table-column prop="createAt" label="创建时间" align="center">
          <template #default="{ row: { createAt } }">
            {{ formatUTC(createAt) }}
          </template>
        </el-table-column>
        <el-table-column prop="updateAt" label="更新时间" align="center">
          <template #default="{ row: { updateAt } }">
            {{ formatUTC(updateAt) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="150">
          <template #default="{ row: { id } }">
            <el-button type="primary" size="small" icon="Edit" text>编辑</el-button>

            <el-popconfirm
              title="确定删除吗？"
              confirm-button-text="确定"
              cancel-button-text="取消"
              @confirm="() => handleDelete(id)"
            >
              <template #reference>
                <el-button type="danger" size="small" icon="Edit" text> 删除 </el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination flex justify-end mt-2.5">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="usersTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { deleteUsersListData } from '@/service/main/system/system'
import useSystemStore from '@/store/main/system/system'
import { formatUTC } from '@/utils/format-time'
import { storeToRefs } from 'pinia'

const emits = defineEmits(['search-table', 'add-user'])

const systemStore = useSystemStore()
const { usersList, usersTotalCount } = storeToRefs(systemStore)

const currentPage = defineModel<number>('currentPage')
const pageSize = defineModel<number>('pageSize')

function handleSizeChange() {
  currentPage.value = 1
  emits('search-table')
}
function handleCurrentChange() {
  emits('search-table')
}

async function handleDelete(id: number) {
  const {
    code,
    data: { msg },
  } = await deleteUsersListData(id)
  if (code === 0) {
    ElMessage({
      message: msg,
      type: 'success',
    })
    emits('search-table')
  }
}

function handleAddUser() {
  emits('add-user')
}
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
