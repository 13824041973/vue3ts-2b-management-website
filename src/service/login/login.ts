import type { AccountDataType } from '@/views/login/types'

export function accountLoginReq(account: AccountDataType) {
  return new Promise((resolve, reject) => {
    const res = {
      code: 0,
      data: {
        id: 1,
        name: 'luyolg',
        token: 'dqwdqwjbdiuqegduiqgduiqqdwd',
      },
    }
    if (account.name === 'luyolg' && account.password === '123456') resolve(res)
    else reject('账号密码不正确')
  })
}
