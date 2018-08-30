// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import xxxx from 'xxxx'可以直接找到依赖的原因是：这是模块的加载机制，直接写依赖库的名字，会到node_modules下去查找，因此不需要你指明前面的相对路径
import Vue from 'vue'
import App from './App'
import router from './router'
import common from '@/components/common'
// 引入axios
import axios from 'axios'
//那么在其他vue组件中就可以this.$axios调用使用
Vue.prototype.$axios = axios
// 引入MintUI全部组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//注册插件
Vue.use(MintUI)
Vue.use(common)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
