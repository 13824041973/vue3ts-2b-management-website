<template>
  <div class="user">
    <UserSearch />
    <UserContent />
  </div>
</template>
<script lang="ts" setup>
import UserContent from './c-cpns/user-content.vue'
import UserSearch from './c-cpns/user-search.vue'
</script>
<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
