import { createApp, markRaw } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import './axios'

import App from './App.vue'
import './style.css'
const pinia = createPinia();
pinia.use(({ store }) => {
    store.router = markRaw(router);
})



createApp(App).use(pinia)
              .use(router)
              .mount('#app')
