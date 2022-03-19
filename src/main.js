import Vue from 'vue'
import MeuApp from './MeuApp.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(MeuApp),
}).$mount('#app')
