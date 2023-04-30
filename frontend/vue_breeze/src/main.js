import { createApp, markRaw } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import './axios'
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue'
import './style.css'
import '../node_modules/sweetalert2/dist/sweetalert2.min.css'
const pinia = createPinia();
pinia.use(({ store }) => {
    store.router = markRaw(router);
})



createApp(App).use(VueSweetalert2)
              .use(pinia)
              .use(router)
              .mount('#app')
