import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors

  constructor(config: HYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 请求、响应的拦截器（创建实例里传入的）
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    )

    // 全局的拦截 - START
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => err,
    )
    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        // 这个是指请求发到后端了，但是后端那边出错了，它传回一些错误码
        if (data.returnCode === 'fail') {
          console.log('请求失败，显示服务器返回的请求失败的消息')
          return
        }
        return data
      },
      (err) => {
        console.log('全局里的响应拦截器，响应失败')
        // 判断httpErrorCode显示不同的错误信息
        switch (err.response.status) {
          case 404:
            console.log('404 找不到')
            break
          default:
            console.log('其他的http status')
            break
        }

        return err
      },
    )
    // 全局的拦截 - END
  }

  request(config: HYRequestConfig) {
    // 单独请求的拦截
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors?.requestInterceptor(config as InternalAxiosRequestConfig)
    }

    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors?.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => reject(err))
    })
  }

  get(config: HYRequestConfig | string) {
    if (typeof config === 'string') config = { url: config }
    return this.request({ ...config, method: 'GET' })
  }
  post(config: HYRequestConfig) {
    return this.request({ ...config, method: 'POST' })
  }
  delete(config: HYRequestConfig) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch(config: HYRequestConfig) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
