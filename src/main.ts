import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import '@/assets/css/index.css'
import registryIcons from './global/icon'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(registryIcons)
app.mount('#app')
