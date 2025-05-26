import { mockRequest } from '../..'

//
export async function postUsersListData(query: any) {
  const jsonData: any = await mockRequest.get('/mockData/main/system.json')
  jsonData.data.list = Array.from({ length: query.pageSize || 20 }, () => ({
    ...jsonData.data.list[0],
    id: jsonData.data.list[0].id++,
    name: 'lyl' + Math.random().toFixed(2),
  }))
  jsonData.data.totalCount = query.pageSize * query.currentPage + 1
  return jsonData
}

export async function deleteUsersListData(id: number) {
  return {
    code: 0,
    data: {
      msg: `${id}已被删除`,
    },
  }
}
