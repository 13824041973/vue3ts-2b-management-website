<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/title.jpg" alt="" />
      <h2 class="title">luyolg管理系统</h2>
    </div>

    <div class="menu">
      <el-menu
        default-active="1-1"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Monitor /></el-icon>
            <span>系统总览</span>
          </template>
          <el-menu-item index="1-1">核心技术</el-menu-item>
          <el-menu-item index="1-2">商品统计</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="2-1">用户管理</el-menu-item>
          <el-menu-item index="2-2">部门管理</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template #title>
            <el-icon><Handbag /></el-icon>
            <span>商品中心</span>
          </template>
          <el-menu-item index="3-1">商品类别</el-menu-item>
          <el-menu-item index="3-2">商品信息</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>
            <el-icon><ChatLineRound /></el-icon>
            <span>随便聊聊</span>
          </template>
          <el-menu-item index="4-1">你的故事</el-menu-item>
          <el-menu-item index="4-2">故事列表</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 12px 10px 8px 10px;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      white-space: nowrap;
    }
  }

  .menu {
    .el-menu {
      border-right: 0;
      user-select: none;

      .el-sub-menu {
        .el-menu-item {
          padding-left: 50px;
          background-color: #0c2135;
        }

        .el-menu-item:hover {
          color: #fff;
        }

        .el-menu-item.is-active {
          background-color: #0a60bd;
        }
      }
    }
  }
}
</style>
