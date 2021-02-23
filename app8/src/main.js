import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'  //新增

Vue.config.productionTip = false

new Vue({
  router,
  // 挂载
  store,
  render: h => h(App),
}).$mount('#app')
