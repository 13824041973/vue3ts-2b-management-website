import type { RouteRecordRaw } from 'vue-router'

function loadLocalRoutes() {
  const localRoutes: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob('../router/main/**/*.ts', {
    eager: true,
  })
  // 将读取到的本地路由存放到localRoutes
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }
  return localRoutes
}

export let firstMenu: any = null
export function mapMenuToRoutes(userMenus: any[]) {
  const localRoutes = loadLocalRoutes()

  const routes: RouteRecordRaw[] = []
  // 根据用户所拥有的权限，匹配正确的路由，addRoute的路由上
  for (const menu of userMenus) {
    for (const subMenu of menu.children) {
      const route = localRoutes.find((item) => item.path === subMenu.url)
      if (route) routes.push(route)

      if (!firstMenu && route) firstMenu = subMenu
    }
  }

  return routes
}

export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const subMenu of menu.children) {
      if (subMenu.url == path) return subMenu
    }
  }
}
