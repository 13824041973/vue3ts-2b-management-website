import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 请求、响应的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use((config) => {
      console.log('全局里的请求拦截器')
      return config
    })
    this.instance.interceptors.response.use((res) => {
      console.log('全局里的响应拦截器')
      return res
    })
  }

  request(config: HYRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors?.requestInterceptor(
        config as InternalAxiosRequestConfig
      )
    }

    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors?.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default HYRequest
