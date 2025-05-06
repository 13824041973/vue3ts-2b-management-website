<template>
  <div class="user">
    <UserSearch />
    <div class="content">content</div>
  </div>
</template>
<script lang="ts" setup>
import UserSearch from './c-cpns/user-search.vue'
</script>
<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
