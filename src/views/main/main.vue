<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside width="240px">Aside</el-aside>
      <el-container>
        <el-header height="50px">Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
// import { LOGIN_TOKEN } from '@/global/constants'
// import router from '@/router'
// import { localCache } from '@/utils/cache'

// function loginOut() {
//   localCache.removeCache(LOGIN_TOKEN)

//   router.push('/login')
// }
</script>
<style lang="less" scoped>
.main {
  height: 100%;

  .main-container {
    height: 100%;

    .el-aside {
      background-color: palegoldenrod;
    }
    .el-header {
      background-color: skyblue;
    }
    .el-main {
      background-color: #fff;
    }
  }
}
</style>
