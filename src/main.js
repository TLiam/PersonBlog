import { createApp } from 'vue'
import App from './App.vue'
import router from "./plugins/router";
import '../src/assets/style/reset.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
