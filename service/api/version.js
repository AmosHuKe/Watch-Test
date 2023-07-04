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
	let e = http.get("/version",datas,config);
    return e;
}
