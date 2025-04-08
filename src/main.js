import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faCamera } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css'

library.add(faHome, faCamera); // 添加需要的圖標

const app = createApp(App)

app.use(router).component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')





