import Vue from 'vue'
import App from './App'

//顶部导航
import cuCustom from './lib/colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
//首页
import home from './pages/index/children/home.vue'
Vue.component('home',home)
//运动
import motion from './pages/index/children/motion.vue'
Vue.component('motion',motion)
//设备（蓝牙）
import ble from './pages/index/children/ble.vue'
Vue.component('ble',ble)
//目标
import goal from './pages/index/children/goal.vue'
Vue.component('goal',goal)
//我的
import mine from './pages/index/children/mine.vue'
Vue.component('mine',mine)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
