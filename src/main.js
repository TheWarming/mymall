import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();

//toast用插件的方式使用
import myToast from 'components/common/toast'
Vue.use(myToast)

//使用fatsclick
import FastClick from 'fastclick'
FastClick.attach(document.body);　　

//使用图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  preLoad: 1,
  loading: require('assets/img/common/white.png')
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
