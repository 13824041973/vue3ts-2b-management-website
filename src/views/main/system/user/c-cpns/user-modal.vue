<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="500">
      <span>This is a message</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)

function setModalVisible() {
  dialogVisible.value = true
}

defineExpose({ setModalVisible })
</script>
<style lang="less" scoped></style>
