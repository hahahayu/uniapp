import App from './App'
import store from '@/store/index.js'

// 生产环境去除console.log 日志
if (uni.getSystemInfoSync().platform !== "devtools") {
	console.log = () => {}
}

// #ifndef VUE3
import Vue from 'vue'
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif