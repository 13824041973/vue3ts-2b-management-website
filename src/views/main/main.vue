<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside width="210px">
        <MainMenu />
      </el-aside>

      <el-container>
        <el-header height="50px">
          <MainHeader />
        </el-header>

        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'
</script>
<style lang="less" scoped>
.main {
  height: 100%;

  .main-container {
    height: 100%;

    .el-header {
      background-color: skyblue;
    }
    .el-main {
      background-color: #fff;
    }
  }
}
</style>
