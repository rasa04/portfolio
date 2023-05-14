import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
//LOCALIZATION
import i18n from "@/locale/config";
// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
const app = createApp(App)

app.use(createPinia())
    .use(router)
    .use(i18n)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
