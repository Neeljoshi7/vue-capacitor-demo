// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// app.config.ignoredElements = [/^ion-/]
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('ion-')


app.mount('#app')
