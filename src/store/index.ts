import { createPinia } from 'pinia'
import type { App } from 'vue'
import useLoginStore from './login/login'

const store = createPinia()

function registryPinia(app: App<Element>) {
  app.use(store)

  const loginStore = useLoginStore()
  loginStore.loadLocalCacheAction()
}

export default registryPinia
