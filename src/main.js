// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vant from 'vant'
// import 'vant/lib/index.css'
// console.log(router,'---')
// Vue.use(Vant)
// Vue.config.productionTip = false
// import './util/rem'
import 'lib-flexible/flexible' //引入rem自适应
import 'vant/lib/index.css'
import './util/vant'
import './assets/icon/iconfont.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})