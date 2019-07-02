import Vue from 'vue'
import Vuex from 'vuex'

//modules
import loginModule from './module/login/loginModule.js' //登陆

import homeModule from './module/home/homeModule.js' //首页
import motionModule from './module/motion/motionModule.js' //运动

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    modules:{
        login: loginModule ,
		home: homeModule,
		motion: motionModule,
    }

})