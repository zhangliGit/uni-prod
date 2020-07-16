import Vue from 'vue'
import App from './App'
import tools from './utils/tools.js'
import './utils/filters.js'
import './static/css/base.scss'
Vue.config.productionTip = false
Vue.prototype.$tools = tools
App.mpType = 'app'

import uView from "@/uview";
Vue.use(uView);

const app = new Vue({
  ...App
})
app.$mount()
