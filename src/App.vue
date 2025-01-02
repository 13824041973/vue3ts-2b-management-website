<template>
  <ElConfigProvider :locale="locale">
    <div class="app">
      {{ $store.state.name }}
      <RouterLink to="/login">登录</RouterLink>
      <RouterLink to="/main">首页</RouterLink>
      <RouterView />
      <div>当前语言： {{ language }}</div>
      <el-button type="primary" @click="toggleLanguage">切换语言</el-button>
      <el-table mb-1 :data="[]" />
      <el-pagination :total="100" />
    </div>
  </ElConfigProvider>
</template>

<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { computed, ref } from 'vue'

const language = ref('zhCn')
const locale = computed(() => (language.value === 'zhCn' ? zhCn : en))
const toggleLanguage = () => {
  language.value = language.value === 'zhCn' ? 'en' : 'zhCn'
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
