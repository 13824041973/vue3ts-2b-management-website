import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

// 这种封装就可以实现多种请求，比如该主请求需要带token，副请求request2不需要带token，就可以再new HYRequest(传入对应的配置即可)
const mainRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求拦截器')
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应拦截器', res)
      return res.data
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default mainRequest
