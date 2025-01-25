import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import '@/assets/css/index.css'
import registryIcons from './global/icon'

const app = createApp(App)
// 调整顺序在router前面，主要是pinia里面做了缓存用户路由的操作，避免刷新丢失路由导致页面404；（如果注册了路由先，我们这行的操作都还没执行，那路由就还没添加上去了）
app.use(store)
app.use(router)
app.use(registryIcons)
app.mount('#app')
