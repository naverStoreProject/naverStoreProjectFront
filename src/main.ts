import './assets/main.css'
import './assets/styles/components.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// free fontawesome
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
