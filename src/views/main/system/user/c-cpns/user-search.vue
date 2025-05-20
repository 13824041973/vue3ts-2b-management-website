<template>
  <div class="search">
    <el-form :model="searchForm" ref="formRef" label-width="80px" size="large">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="searchForm.name" placeholder="输入用户名" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realName">
            <el-input v-model="searchForm.realName" placeholder="真实姓名" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话号码" prop="cellphone">
            <el-input v-model="searchForm.cellphone" placeholder="电话号码" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select v-model="searchForm.enable" placeholder="状态" filterable clearable>
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <div class="btns">
      <el-button @click="handleResetClick" icon="Refresh">重置</el-button>
      <el-button @click="handleQueryClick" icon="Search" type="primary">查询</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

const formRef = ref<InstanceType<typeof ElForm>>()
const searchForm = reactive({
  name: '',
  realName: '',
  cellphone: '',
  enable: 1,
  createAt: [],
})

function handleResetClick() {
  formRef.value?.resetFields()
}
function handleQueryClick() {
  console.log(123)
}
</script>
<style lang="less" scoped>
.search {
  background: #fff;
  padding: 20px;

  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }

  .btns {
    text-align: right;
  }
}
</style>
