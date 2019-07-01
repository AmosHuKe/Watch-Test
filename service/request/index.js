import Vue from 'vue'
import store from '../../store/index.js' //状态管理
import Request from './request.js'
const http = new Request();
http.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = 'https://www.easy-mock.com/mock/5d1443deed2ae904ba2cdd78/mock/'; //默认请求地址
	config.header = {
        'Content-Type': 'application/json;charset=UTF-8'
    };
	return config
})
http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	uni.showToast({
		icon:"loading"
	});//加载中动画
	console.log("用户数据",store.getters.getUserData)
	//是否需要登陆权限，是否登陆  否则跳转到登陆
	if (!config.header.isLogin && store.getters.getUserData=="") { 
		uni.reLaunch({
			url: './mine/children/login',
		});
		return false;
	}
	/*
	if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
		cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
	}
	*/
	console.log("请求前拦截")
	return config;
})
http.interceptor.response((response) => { /* 请求之后拦截器 */
	uni.hideToast();//关闭加载动画
	console.log("请求后拦截")
	return response;
})
export {
	http
};


