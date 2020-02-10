import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
//设置font-size的js文件
import 'amfe-flexible/index.min.js'
import '@/assets/css/global.less' // 引入全局的自定义样式  因为要覆盖vant的样式
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
