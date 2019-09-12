import Vue from 'vue'
import store from '../../store/index.js' //状态管理
import Request from './request.js'
const http = new Request();
http.setConfig((config) => { /* 设置全局配置 */
	
	config.baseUrl = ''; // 由于easy-mock网站经常挂掉，就开GitHub代理
	//#ifndef H5
	// 由于easy-mock网站经常挂掉，就使用Github的本地数据，在manifest.json中H5开启代理
	config.baseUrl = 'http://raw.githack.com/AmosHuKe/Watch-Test/master'; //默认请求地址
	//#endif
	
	//#ifdef MP-WEIXIN
	//由于微信小程序接口地址需要认证，这里还是采用原easymock地址
	config.baseUrl = 'https://www.easy-mock.com/mock/5d1443deed2ae904ba2cdd78/mock/'; //默认请求地址
	//#endif
	
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
	//是否需要登录权限，是否登录  否则跳转到登录
	if (!config.header.isLogin && store.getters.getUserData=="") { 
		uni.reLaunch({
			url: './mine/children/login',
		});
		return false;
	}
	if(config.header.service=="weixin"){
		//更换微信请求地址
		console.log("更换微信请求地址");
		config.url = 'https://api.weixin.qq.com/sns/'; //微信请求地址
	}
	/*
	if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
		cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
	}
	*/
   console.log(config)
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


