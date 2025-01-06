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
import { accountLoginReq } from '@/service/login/login'
import { ElMessage } from 'element-plus'
import useLoginStore from '@/store/login/login'
import type { AccountDataType } from '../types'

const loginStore = useLoginStore()

type tabsName = 'account' | 'phone'
// 当前tabs
const tabsActiveName = ref<tabsName>('account')
// 记住密码
const isRememberPwd = ref(false)
// 账号登录panel的实例
const accountRef = ref<InstanceType<typeof PanelAccount>>()

async function handleLoginBtnClick() {
  let params: boolean | AccountDataType | undefined = false
  if (tabsActiveName.value === 'account') {
    params = await accountRef.value?.loginAction()
  } else if (tabsActiveName.value === 'phone') {
  }

  if (params) {
    accountLoginReq(params).then(
      (res: any) => {
        loginStore.loginAccountAction(res.data)
      },
      (err) => {
        ElMessage.warning(err as string)
      },
    )
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  min-width: 330px;
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
