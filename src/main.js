import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'flex.css'
import '@/assets/style/index.scss'
import ElementUI from '@/plugins/element-ui'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 }

new Vue({
  store,
  router: router(),
  render: h => h(App),
}).$mount('#app')
