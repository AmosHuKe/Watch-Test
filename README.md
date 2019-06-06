# 智能手表测试项目

[![Vue2.0](https://img.shields.io/badge/build-Vue2.0-%234fc08d.svg)](https://github.com/vuejs/vue)
[![uni-app](https://img.shields.io/badge/build-Uni--App-brightgreen.svg)](https://github.com/dcloudio/uni-app)
[![ColorUI](https://img.shields.io/badge/UI-ColorUI-%230081ff.svg)](https://github.com/weilanwl/ColorUI)
[![HBuilderX-v1.9.9](https://img.shields.io/badge/HBuilderX-v1.9.9-green.svg)](http://www.dcloud.io/hbuilderx.html)


## 目录结构  
```
├── App.vue    //应用配置（配置App全局样式以及监听等）  
├── main.js    //Vue初始化入口文件  
├── manifest.json    //配置应用名称、appid、logo、版本等打包信息
├── pages.json   //配置页面路由、导航条、选项卡等页面类信息
├── common    //共用文件
├── components    //组件文件
├── pages    //页面文件夹  
│   └── index    //主布局页
│   │   ├── index.vue    //主布局页
│   │   ├── children    //布局子页
│   |   |   ├── home.vue   //首页
│   |   |   ├── motion.vue   //运动
│   |   |   ├── ble.vue   //设备（蓝牙）
│   |   |   ├── goal.vue   //目标
│   |   |   ├── mine.vue   //我的
├── lib    //第三方库/框架  
│   └── colorui    //ColorUi
├── static    //静态文件  

```
