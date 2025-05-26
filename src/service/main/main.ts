import { mockRequest } from '..'

export async function getEntireRoles() {
  const jsonData: any = await mockRequest.get('/mockData/main/role.json')

  return jsonData
}

export async function getEntireDepartments() {
  const jsonData: any = await mockRequest.get('/mockData/main/department.json')

  return jsonData
}
