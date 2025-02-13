import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routerService/router.js'

const app = createApp(App);
app.use(router);
app.mount('#app');
