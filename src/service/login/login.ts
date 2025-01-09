import type { AccountDataType } from '@/views/login/types'
import { mockRequest } from '..'

// 用户登录
export async function accountLoginReq(account: AccountDataType) {
  const jsonData = await mockRequest.get('/mockData/login/loginReq.json')
  if (account.name === 'luyolg' && account.password === '123456') {
    return jsonData
  } else {
    throw new Error('账号或密码错误')
  }
}

// 获取用户信息的（包括用户的权限等等）
export async function userInfoReq(id: number) {
  // const loginData: any = await mockRequest.get('/mockData/loginReq.json')
  // if (id === loginData?.data?.id) {
  if (id === 1) {
    const jsonData = await mockRequest.get(`/mockData/login/userInfoReq.json`)
    return jsonData
  } else {
    throw new Error('获取不到本用户信息，服务器发生问题')
  }
}

export async function userMenusByRoleId(id: number) {
  if (id === 1) {
    const jsonData = await mockRequest.get('/mockData/login/userMenus.json')
    return jsonData
  } else {
    throw new Error('获取不到本用户菜单，服务器发生问题')
  }
}
