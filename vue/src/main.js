import { createApp } from 'vue'
import App from './App.vue'
import Swiper from 'swiper';
import Swiper from 'swiper/bundle';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

createApp(App).mount('#app')
