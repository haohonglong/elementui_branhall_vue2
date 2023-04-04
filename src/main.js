import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/bootstrap.css';
import '@/assets/css/global.css';
import '@/assets/css/lib.css';
import App from './App.vue'
import router from './router'
import store from './store'
import { VueAxios } from './utils/request'

Vue.use(VueAxios)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
