<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <MainMenu :isCollapse="isCollapse" />
      </el-aside>

      <el-container>
        <el-header height="50px">
          <MainHeader @handleCollapse="handleCollapse" />
        </el-header>

        <el-main class="h-[calc(100%-50px)] bg-[#f0f2f5]">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'
import { ref } from 'vue'

const isCollapse = ref(false)
function handleCollapse(isFold: boolean) {
  isCollapse.value = isFold
}
</script>
<style lang="less" scoped>
.main {
  height: 100%;

  .main-container {
    height: 100%;

    .el-aside {
      overflow-x: hidden;
      overflow-y: auto;

      scrollbar-width: none; /**firefox */
      -ms-overflow-style: none; /**IE 10+ */

      transition: width 0.5s ease;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>
