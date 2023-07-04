import Vue from 'vue'
import store from '../../store/index.js' //状态管理
import Request from './request.js'
const http = new Request();
/* 设置全局配置 */
http.setConfig((config) => {
    //默认请求地址，这里是 json-server 服务启动的地址
    config.baseUrl = 'http://localhost:3000';
    config.header = {
        'Content-Type': 'application/json;charset=UTF-8'
    };
    return config
})
/* 请求之前拦截器 */
http.interceptor.request((config, cancel) => {
    uni.showToast({
        icon: "loading"
    }); //加载中动画
    console.log("用户数据", store.getters.getUserData)
    //是否需要登录权限，是否登录  否则跳转到登录
    if (!config.header.isLogin && store.getters.getUserData == "") {
        uni.reLaunch({
            url: './mine/children/login',
        });
        return false;
    }
    if (config.header.service == "weixin") {
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
/* 请求之后拦截器 */
http.interceptor.response((response) => {
    uni.hideToast(); //关闭加载动画
    console.log("请求后拦截")
    return response;
})
export {
    http
};