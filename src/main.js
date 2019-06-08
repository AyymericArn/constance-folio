import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// reset styles
import '@/assets/reset.css'

Vue.prototype.scrollBy = window.scrollBy
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
