import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// free fontawesome
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App.vue'
import router from './router'
import { useUserStore } from '@/stores/user'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

const userStore = useUserStore()
userStore.restoreToken()

app.mount('#app')
