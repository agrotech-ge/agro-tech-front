import {createApp} from 'vue';
import './assets/main.css';
import App from './App.vue'
import router from "./router";
import {VueReCaptcha} from 'vue-recaptcha-v3';

createApp(App)
    .use(VueReCaptcha, {siteKey: import.meta.env.VITE_RECAPTCHA_SITEKEY,})
    .use(router).mount('#app');
