/**
 * 版本api
 */
import {http} from '../../service/request/index.js' //请求拦截

/**
 * 获取最新版本
 * @returns {Promise}
 */
export function getVersion(){
    let datas = {}
	let config = {}
	//#ifndef MP-WEIXIN
	let e = http.get("/mock/version.json",datas,config);
	//#endif
	//#ifdef MP-WEIXIN
	let e = http.get("version",datas,config);
	//#endif
    return e;
}
