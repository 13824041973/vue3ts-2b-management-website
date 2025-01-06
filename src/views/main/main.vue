<template>
  <div>main</div>
  <button @click="loginOut">退出登录</button>
</template>
<script lang="ts" setup>
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import { localCache } from '@/utils/cache'

function loginOut() {
  localCache.removeCache(LOGIN_TOKEN)

  router.push('/login')
}
</script>
<style lang="less" scoped></style>
