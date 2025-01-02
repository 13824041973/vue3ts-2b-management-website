import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
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
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default HYRequest
