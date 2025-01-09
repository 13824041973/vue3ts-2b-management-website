<template>
  <div class="login-panel">
    <!-- 标题 -->
    <h1 class="title">后台管理系统</h1>

    <!-- tabs -->
    <div class="tabs">
      <el-tabs v-model="tabsActiveName" type="border-card" stretch>
        <el-tab-pane label="账号登录" name="account">
          <template #label>
            <el-icon><UserFilled /></el-icon>
            <span class="text">账号登录</span>
          </template>
          <PanelAccount ref="accountRef" />
        </el-tab-pane>

        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <el-icon><Cellphone /></el-icon>
            <span class="text">手机登录</span>
          </template>
          <PanelPhone />
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 底部区域 -->
    <div class="controls">
      <el-checkbox v-model="isRememberPwd" label="记住密码" />
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button @click="handleLoginBtnClick" class="login-btn" type="primary" size="large">
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PanelAccount from './panel-account.vue'
import PanelPhone from './panel-phone.vue'
import { ElMessage } from 'element-plus'
import useLoginStore from '@/store/login/login'
import type { AccountDataType } from '../types'
import { IS_REMEMBER_PWD, LOGIN_NAME, LOGIN_PASSWORD } from '../constants'
import { localCache } from '@/utils/cache'

const loginStore = useLoginStore()

type TabsName = 'account' | 'phone'
// 当前tabs
const tabsActiveName = ref<TabsName>('account')
// 记住密码
const isRememberPwd = ref<boolean>(localCache.getCache(IS_REMEMBER_PWD) ?? false)
// 账号登录panel的实例
const accountRef = ref<InstanceType<typeof PanelAccount>>()

async function handleLoginBtnClick() {
  let params: boolean | AccountDataType | undefined = false
  if (tabsActiveName.value === 'account') {
    params = await accountRef.value?.loginAction()
  } else if (tabsActiveName.value === 'phone') {
    ElMessage.warning('手机登录功能未实现')
  }

  if (params) {
    // 处理 记住密码 的逻辑
    rememberPwdHandler(params)
    // // 发起登录请求，存储token到pinia且存到localStorage里（并且里面处理存储用户信息的行为）
    loginStore.loginAccountAction(params)
  }
}
function rememberPwdHandler(reqParams: AccountDataType) {
  if (isRememberPwd.value) {
    localCache.setCache(IS_REMEMBER_PWD, isRememberPwd.value)
    localCache.setCache(LOGIN_NAME, reqParams.name)
    localCache.setCache(LOGIN_PASSWORD, reqParams.password)
  } else {
    localCache.removeCache(IS_REMEMBER_PWD)
    localCache.removeCache(LOGIN_PASSWORD)
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  transform: translateY(-50%);

  .tabs {
    .text {
      margin-left: 5px;
    }
  }

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .controls {
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
