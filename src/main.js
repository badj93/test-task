import Vue from 'vue'
import App from './App.vue'
import store from  './store/store.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
