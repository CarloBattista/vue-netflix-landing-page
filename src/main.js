import { createApp } from 'vue'
import './style.css'
import './fontface.css'
import App from './App.vue'
import router from './routing/router.js';

createApp(App).use(router).mount('#app');