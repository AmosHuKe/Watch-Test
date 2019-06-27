import Vue from 'vue'
import Vuex from 'vuex'

//modules
import LoginModule from './module/Login/LoginModule.js' //登陆

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    modules:{
        Login: LoginModule ,
    }

})