import { mockRequest } from '../..'

//
export async function postUsersListData() {
  const jsonData: any = await mockRequest.get('/mockData/main/system.json')
  jsonData.data.list = Array.from({ length: 20 }, (_, index) => ({
    ...jsonData.data.list[0],
    id: index + 1,
    name: 'lyl' + Math.random().toFixed(2),
  }))
  return jsonData
}
