/**
 * 首页api
 */
import {http} from '../../service/request/index.js' //请求拦截

/**
 * 获取轮播
 * @returns {Promise}
 */
export function getSwiper(){
    let datas = {}
	let config = {}
	//#ifndef MP-WEIXIN
	let e = http.get("/mock/swiper.json",datas,config);
	//#endif
	//#ifdef MP-WEIXIN
	let e = http.get("swiper",datas,config);
	//#endif
    return e;
}

/**
 * 获取统计图数据
 * @returns {Promise}
 */
export function getRing(){
    let datas = {}
	let config = {}
	//#ifndef MP-WEIXIN
	let e = http.get("/mock/ring.json",datas,config);
	//#endif
	//#ifdef MP-WEIXIN
	let e = http.get("ring",datas,config);
	//#endif
    return e;
}