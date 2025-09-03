import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // <-- import global CSS here

const app = createApp(App)

app.use(router)   // ✅ register the router
app.mount('#app')


