<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleFold">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'"></component>
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑</div>
      <HeaderInfo />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import HeaderInfo from './c-cpns/header-info.vue'
const emit = defineEmits(['handleCollapse'])

const isFold = ref(false)
function handleFold() {
  isFold.value = !isFold.value

  emit('handleCollapse', isFold.value)
}
</script>
<style lang="less" scoped>
.main-header {
  height: 100%;
  display: flex;
  align-items: center;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
  }
}
</style>
