import { localCache } from '@/utils/cache'
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import { LOGIN_TOKEN } from '@/global/constants'

// 这种封装就可以实现多种请求，比如该主请求需要带token，副请求request2不需要带token，就可以再new HYRequest(传入对应的配置即可)
const mainRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: {
    // 模仿携带token
    Authorization: `Bearer ${'xxx'}`,
  },
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    },
  },
})

// 用来模拟获取数据（获取public文件夹下的mockData文件夹下的json数据）
export const mockRequest = new HYRequest({
  interceptors: {
    requestInterceptor(config) {
      const token = localCache.getCache(LOGIN_TOKEN)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
  },
})

export default mainRequest
