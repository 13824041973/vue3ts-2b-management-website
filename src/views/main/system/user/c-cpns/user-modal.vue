<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="500">
      <div class="form">
        <el-form :model="formData" :rules="rules" ref="formRef" label-width="80" size="large">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="formData.name" clearable />
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="formData.realname" clearable />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="formData.password" clearable show-password />
          </el-form-item>
          <el-form-item label="选择角色" prop="roleId">
            <el-select v-model="formData.roleId" filterable clearable>
              <el-option
                :label="item.name"
                :value="item.id"
                v-for="item in entireRoles"
                :key="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门" prop="departmentId">
            <el-select v-model="formData.departmentId" filterable clearable>
              <el-option
                :label="item.name"
                :value="item.id"
                v-for="item in entireDepartments"
                :key="item.id"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmitForm"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import useMainStore from '@/store/main/main'
import type { FormInstance, FormRules } from 'element-plus'
import { storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'

const mainStore = useMainStore()
const { entireDepartments, entireRoles } = storeToRefs(mainStore)

const dialogVisible = ref(false)
const formRef = ref<FormInstance>()
const formData = reactive({
  name: null,
  realname: null,
  password: null,
  roleId: undefined,
  departmentId: undefined,
})

function handleSubmitForm() {
  if (formRef.value) {
    formRef.value.validate((valid, fields) => {
      if (valid) {
        dialogVisible.value = false
        console.log(formData)
      } else {
        console.log(fields)
      }
    })
  }
}

// 由父组件可控制显隐
function setModalVisible() {
  formRef?.value?.resetFields()
  dialogVisible.value = true
}

defineExpose({ setModalVisible })

const rules = reactive<FormRules<typeof formData>>({
  name: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
  realname: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
  roleId: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
  departmentId: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
})
</script>
<style lang="less" scoped></style>
