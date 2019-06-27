**插件使用说明**

- 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
- 支持全局挂载
- 支持多个全局配置实例
- 下载后把 http-request 文件夹放到项目 utils/ 目录下


**Example**
---
创建实例  

``` javascript 
const http = new Request();
```

执行` GET `请求

``` javascript 
http.get('/user/login', {userName: 'name', password: '123456'}).then(res => {

}).catch(err => {

})
// 局部修改配置，局部配置优先级高于全局配置
http.get('/user/login', {userName: 'name', password: '123456'}, {
    header: {}, /* 会覆盖全局header */
    dataType: 'json',
    responseType: 'text'
}).then(res => {

}).catch(err => {

})
```
执行` POST `请求

``` javascript 
http.post('/user/login', {userName: 'name', password: '123456'} ).then(res => {

}).catch(err => {

})
// 局部修改配置，局部配置优先级高于全局配置
http.post('/user/login', {userName: 'name', password: '123456'}, {
    header: {}, /* 会覆盖全局header */
    dataType: 'json',
    responseType: 'text'
}).then(res => {

}).catch(err => {

})
```

**全局请求配置**
--
``` javascript
{
    baseUrl: '', /* 全局根路径，需要注意，如果请求的路径为绝对路径，则不会应用baseUrl */
    header: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text'
}
```


全局配置修改` setConfig `

``` javascript
/**
     * @description 修改全局默认配置
     * @param {Function}   
*/
http.setConfig((config) => { /* config 为默认全局配置*/
    config.baseUrl = 'http://www.bbb.cn'; /* 根域名 */
    config.header = {
        a: 1,
        b: 2
    }
    return config
})
```

**拦截器**
--

在请求之前拦截

``` javascript
http.interceptor.request((config, cancel) => { /* cancel 为函数，如果调用会取消本次请求。需要注意：调用cancel,本次请求的catch仍会执行。必须return config */
    config.header = {
        a: 1,
        ...config.header
    }
    if (!token) { /* 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行*/
        cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
    }
    return config;
})
```

在请求之后拦截

``` javascript
http.interceptor.response((response) => { /* 必须return response*/
    console.log(response);
    return response;
})
```





