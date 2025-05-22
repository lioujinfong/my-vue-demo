import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faCamera } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css'
//語系
import { createI18n } from 'vue-i18n'
import zh from './locales/zh.json'
import en from './locales/en.json'


library.add(faHome, faCamera); // 添加需要的圖標

const app = createApp(App)

//語系
const savedLocale = localStorage.getItem('lang') || 'zh'
const i18n = createI18n({
  legacy: false, // 啟用 Composition API 模式
  globalInjection: true,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: {
    zh,
    en
  }
})

app.use(router).component('font-awesome-icon', FontAwesomeIcon);
app.use(i18n)
app.mount('#app')





