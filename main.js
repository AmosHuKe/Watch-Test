import Vue from 'vue'
import App from './App'

import cuCustom from './lib/colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import home from './pages/index/children/home.vue'
Vue.component('home',home)

import list from './pages/index/children/list.vue'
Vue.component('list',list)

import ble from './pages/index/children/ble.vue'
Vue.component('ble',ble)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
