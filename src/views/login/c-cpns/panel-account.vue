<template>
  <div class="panel-account">
    <el-form :model="accountData" label-width="60" ref="ruleFormRef" :rules="rules" size="large">
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountData.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountData.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
import type { AccountDataType } from '../types'

const rules: FormRules = {
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 6, max: 20, message: '长度为6到20位', trigger: 'blur' },
    { min: 6, max: 20, message: '长度为6到20位', trigger: 'change' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 5, max: 15, message: '长度为5到15位', trigger: 'blur' },
    { min: 5, max: 15, message: '长度为5到15位', trigger: 'change' },
  ],
}

const accountData = reactive<AccountDataType>({
  name: 'luyolg',
  password: '123456',
})

const ruleFormRef = ref<FormInstance>()
async function loginAction() {
  const validateRes = await ruleFormRef.value?.validate(() => {})
  if (validateRes) {
    return { name: accountData.name, password: accountData.password }
  } else {
    ElMessage.error('请输入正确的格式后再操作~')
    return false
  }
}
defineExpose({
  loginAction,
})
</script>
<style lang="less" scoped></style>
