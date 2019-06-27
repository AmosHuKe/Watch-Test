/**
 * 首页api
 */
import {http} from '../../service/request/index.js' //请求拦截

/**
 * 检测登陆状态 只是通过请求触发过滤器，用以判断是否登陆 否则跳转到登陆
 * @returns {Promise}
 */
export function getisLogin(){
    let datas = {}
	let config = {}
    let e = http.post("login",datas,config);
    return e;
}

/**
 * 登陆
 * @returns {Promise}
 */
export function getLogin(){
    let datas = {}
	let config = {
		header:{
			"isLogin":true //不用检测是否需要登陆权限
		}
	}
    let e = http.post("login",datas,config);
    return e;
}

