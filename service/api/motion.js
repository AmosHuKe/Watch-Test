/**
 * 运动api
 */
import {http} from '../../service/request/index.js' //请求拦截

/**
 * 获取目标完成数据
 * @returns {Promise}
 */
export function getGoalc(){
    let datas = {}
    let config = {}
    let e = http.get("/goalc",datas,config);
    return e;
}

/**
 * 获取运动数据
 * @returns {Promise}
 */
export function getSportList(){
    let datas = {}
    let config = {}
    let e = http.get("/sportlist",datas,config);
    return e;
}

/**
 * 获取健康数据
 * @returns {Promise}
 */
export function getHealthList(){
    let datas = {}
    let config = {}
    let e = http.get("/healthlist",datas,config);
    return e;
}