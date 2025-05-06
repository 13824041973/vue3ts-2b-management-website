<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/title.jpg" alt="" />
      <h2 class="title" v-show="!isCollapse">luyolg管理系统</h2>
    </div>

    <div class="menu">
      <el-menu
        :default-active="defaultActive"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
        :collapse="isCollapse"
      >
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="String(item.id)">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]"></component>
              </el-icon>

              <span>{{ item.name }}</span>
            </template>

            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item @click="() => handleClickMenu(subItem.url)" :index="String(subItem.id)">
                {{ subItem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>
<script lang="ts" setup>
import router from '@/router'
import useLoginStore from '@/store/login/login'
import { mapPathToMenu } from '@/utils/map-menus'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const loginStore = useLoginStore()
const { userMenus } = loginStore

defineProps({
  isCollapse: {
    type: Boolean,
    default: false,
  },
})

function handleClickMenu(path: string) {
  router.push(path)
}

const defaultActive = computed(() => {
  const pathMenu = mapPathToMenu(route.path, userMenus)
  return pathMenu.id + ''
})
</script>
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
