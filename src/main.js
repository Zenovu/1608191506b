import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueMoment from 'vue-moment'
const moment = require('moment')
require('moment/locale/ru')

Vue.use(VueMoment, {
  moment
})
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
