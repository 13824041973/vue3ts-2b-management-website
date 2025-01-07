<template>
  <div class="panel-phone">
    <el-form :model="phoneData" label-width="80" ref="ruleFormRef" :rules="rules" size="large">
      <el-form-item label="手机号" prop="name">
        <el-input v-model="phoneData.name" />
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="verify-code">
          <el-input v-model="phoneData.password" />
          <el-button @click="getVerifyCodeHandler" class="get-btn" type="primary">
            获取验证码
          </el-button>
        </div>
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
    { type: 'number', required: true, message: '请输入数字', trigger: 'blur' },
    { min: 11, max: 11, message: '长度为11位', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 4, max: 6, message: '长度为4到6位', trigger: 'change' },
  ],
}

const phoneData = reactive<AccountDataType>({
  name: '',
  password: '',
})

function getVerifyCodeHandler() {
  ElMessage.error('目前还不支持该功能呢~')
}

const ruleFormRef = ref<FormInstance>()
// async function loginAction() {
//   const validateRes = await ruleFormRef.value?.validate(() => {})
//   if (validateRes) {
//     const { name, password } = phoneData
//     return { name, password }
//   } else {
//     ElMessage.error('请输入正确的格式后再操作~')
//     return false
//   }
// }
// defineExpose({
//   loginAction,
// })
</script>
<style lang="less" scoped>
.verify-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
