import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2'

/* //CSS LIBARIES
import stylesheet from '../public/assets/css/style.css'
import bootstrap from '../public/assets/css/bootstrap/css/bootstrap.min.css' */

/* import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1/bankapp-php' */

const app = createApp(App);
app.use(router)
app.use(VueSweetalert2)
app.mount('#app')