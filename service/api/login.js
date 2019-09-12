/**
 * 首页api
 */
import {http} from '../../service/request/index.js' //请求拦截

/**
 * 检测登录状态 只是通过请求触发过滤器，用以判断是否登录 否则跳转到登录
 * @returns {Promise}
 */
export function getisLogin(){
    let datas = {}
	let config = {}
    //#ifndef MP-WEIXIN
    let e = http.get("/mock/login.json",datas,config);
    //#endif
    //#ifdef MP-WEIXIN
    let e = http.post("login",datas,config);
    //#endif
    return e;
}

/**
 * 登录
 * @returns {Promise}
 */
export function getLogin(){
    let datas = {}
	let config = {
		header:{
			"isLogin":true //不用检测是否需要登录权限
		}
	}
	//#ifndef MP-WEIXIN
    let e = http.get("/mock/login.json",datas,config);
	//#endif
	//#ifdef MP-WEIXIN
	let e = http.post("login",datas,config);
	//#endif
    return e;
}

/**
 * 微信登录
 * @param appid 小程序id
 * @param secret 小程序 appSecret
 * @param jscode 登录时获取的 code
 * 
 */
export function wexinLogin(appid,secret,jscode){
    let datas = {
		"appid": appid, //小程序id
		"secret": secret, //小程序 appSecret
		"js_code": jscode, //登录时获取的 code
		"grant_type": "authorization_code", //授权类型，此处只需填写 authorization_code
	}
	let config = {
		header:{
			"isLogin": true, //不用检测是否需要登录权限
			"service": "weixin", //微信请求地址
		}
	}
    let e = http.get("jscode2session",datas,config);
    return e;
}

