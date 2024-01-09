// src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App);

// Make axios available globally in your Vue components
app.config.globalProperties.$axios = axios;

app.mount('#app');
