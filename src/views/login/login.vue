<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>
<script lang="ts" setup>
import LoginPanel from './c-cpns/login-panel.vue'
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
