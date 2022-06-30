import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import mixins from './mixins'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
  .use(store)
  .use(router)
  .use(VueSweetalert2)
  .mixin(mixins)
  .mount('#app')

const KAKAOJS_API_KEY = process.env.VUE_APP_KAKAOJS
window.Kakao.init(KAKAOJS_API_KEY)
