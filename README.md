# ![logo](./appstatic/watch_icon_64-64.png) 运动手表演示  

[![Vue2.0](https://img.shields.io/badge/build-Vue2.0-%234fc08d.svg)](https://github.com/vuejs/vue)
[![uni-app](https://img.shields.io/badge/build-Uni--App-brightgreen.svg)](https://github.com/dcloudio/uni-app)
[![ColorUI](https://img.shields.io/badge/UI-ColorUI-%230081ff.svg)](https://github.com/weilanwl/ColorUI)
[![uCharts](https://img.shields.io/badge/build-uCharts-%2381CDE6.svg)](https://www.ucharts.cn/)
[![HBuilderX-v2.1.0](https://img.shields.io/badge/HBuilderX-v2.1.0-green.svg)](http://www.dcloud.io/hbuilderx.html)  

## 概述  

[![演示](./demo/watch_1080.webp)](./demo/watch_1080.jpg?raw=true)

> 🏃‍⌚  
> 智能手表运动相关的App页面展示。  
> 该项目是用于模型演示，并无实际功能。  
> 主要用于学习参考，商业用途需经作者允许。  
> [![插画风格](https://img.shields.io/badge/插图风格-Pale-%23E75353.svg)](https://icons8.cn/ouch/style/pale)
> [![插画风格](https://img.shields.io/badge/插图风格-Undraw-%236c63ff.svg)](https://undraw.co/search)    
>
> 登陆账号：admin 密码：admin  

* Vue2.0 + Uni-App + Vuex + ColorUI + uCharts + Less + Mock

| 测试平台 | 是否支持 | 下载演示 |  
|------|------|------|  
| Chrome | ✔ | 无 |  
| Android`8.0` | ✔ | [下载](https://github.com/AmosHuKe/Watch-Test/releases) |  
| ios`未测试` | 未测试 | 无 |  
| 微信小程序 | ✔ | [![微信小程序](./demo/wechat_128.jpg)](./demo/wechat_128.jpg?raw=true)   |  

## APP模块权限配置（manifest.json）

| APP模块 | 是否使用 |  
|------|------|  
| `Bluetooth(低功耗蓝牙)` | ✔ |   

## 注意  

> 1、项目需开启 `Less`   
> 2、服务器数据请求地址更改：`./service/request/index.js` 下的 `config.baseUrl`   


## 目录结构  
```
├── App.vue    //应用配置（配置App全局样式以及监听等）  
├── main.js    //Vue初始化入口文件  
├── manifest.json    //配置应用名称、appid、logo、版本等打包信息
├── pages.json   //配置页面路由、导航条、选项卡等页面类信息
├── mock    //模拟数据
├── common    //共用文件
├── components    //组件文件
├── pages    //页面文件夹  
│   └── index.vue    //主布局页
│   └── home    //首页
│   │   ├── children  //首页子
│   │   ├── home.vue   //首页
│   └── motion    //运动
│   │   ├── children  //运动页子
│   │   ├── motion.vue   //运动页
│   └── ble    //设备（蓝牙）
│   │   ├── children  //设备（蓝牙）页子
│   │   ├── ble.vue   //设备（蓝牙）页
│   └── goal    //目标
│   │   ├── children  //目标页子
│   │   ├── goal.vue   //目标页
│   └── mine    //我的
│   │   ├── children  //我的页子
│   │   ├── mine.vue   //我的页
├── lib    //第三方库/框架  
│   └── colorui    //ColorUi
├── service    //服务请求相关
│   └── api    //api接口
│   └── request    //请求全局配置，请求拦截
├── style    //样式文件  
├── static    //静态文件  
├── appstatic    //APP静态文件（Icon，启动图...）
├── unpackage    //打包后文件（dist）  
├── demo    //演示预览文件  
│   └── amos-login    //登录模板(http://ext.dcloud.net.cn/plugin?id=538)

```

## 感谢  

[ColorUI-UniApp](http://ext.dcloud.net.cn/plugin?id=239)  
[uCharts](http://ext.dcloud.net.cn/plugin?id=271)  
[luch-request](http://ext.dcloud.net.cn/plugin?id=392)  
[区间选择滑块组件](http://ext.dcloud.net.cn/plugin?id=106)  

© AmosHuKe. All Rights Reserved.
