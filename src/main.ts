import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)


// app.config.ignoredElements = [/^ion-/]
// In Vue 3, the 'ignoredElements' property has been replaced with 'compilerOptions.isCustomElement' so we should use this...> .
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('ion-')


app.mount('#app')
