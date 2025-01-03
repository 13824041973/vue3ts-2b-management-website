import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

import mainRequest from './service'
mainRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor(config) {
      console.log('单独请求的请求拦截')
      return config
    },
    responseInterceptor(res) {
      console.log('单独请求的响应拦截')
      return res
    }
  }
})
