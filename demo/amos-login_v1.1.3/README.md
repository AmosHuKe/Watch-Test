
## 登录模板说明  

> 极简的登录模板，包含登录，注册，找回密码三个页面。  
> 这里也写了个简单的项目(无实际功能)，可供学习使用。  
> [喜欢可以star下，点击查看Github](https://github.com/AmosHuKe/Watch-Test)    

## 使用组件  
> 注：组件写得比较粗糙，更多的使用还得修改组件，后期再慢慢更新，目前主要提供一个样式。  
> Icon提取的是 ColorUi的Icon库，地址：[链接](http://demo.color-ui.com/h5.html#/pages/basics/icon)  
>    
> 引入组件  

```  
import wInput from './components/watch-login/watch-input.vue' //input
import wButton from './components/watch-login/watch-button.vue' //button

export default {
	components:{
		wInput,  //input
		wButton  //button
	}
}
```  

### Input的使用    

* 基本用法  

```
<wInput
	v-model="username"        //绑定值
	type="text"               //Input文本类型
	maxlength="11"            //最大长度（默认20）（选填）
	placeholder="请输入用户名" //占位符 提示性语句（选填）
	focus 					//是否默认聚焦
></wInput>
```

* 密码文本  

```
<wInput
	v-model="password"        //绑定值
	type="password"           //Input密码类型
	placeholder="请输入密码"   //占位符 提示性语句（选填）
	isShowPass                //开启 是否显示密码图标（选填）
></wInput>
```

* 倒计时

```
<wInput
	v-model="verCode"        //绑定值
	type="number"            //Input数字类型
	placeholder="验证码"      //占位符 提示性语句（选填）

	isShowCode               //开启 倒计时
	codeText="获取重置码"     //自定义倒计时文字，默认 获取验证码（选填）
	setTime="30"             //设置倒计时时间，默认60秒，（选填）
	ref="runCode"            //注册用于触发验证码倒计时
	@setCode="getVerCode()"  //设置绑定 点击触发的事件
></wInput>

//自定义事件
getVerCode(){
	//获取验证码
	console.log("获取验证码")
	//触发倒计时（一般用于请求成功验证码后调用）
	this.$refs.runCode.$emit('runCode');

	//终止倒计时（用于突然需要终止倒计时的场景）
	this.$refs.runCode.$emit('runCode',0);
}
```

> Input参数说明

| 参数 | 类型 | 默认 | 是否必选 | 说明 |  
|-----| ----- |----|----|----|  
| type | String | 无 | √ | Input类型 |  
| maxlength | Number | 20 | × | 最大长度 |  
| placeholder | String | 无 | × | 占位符 提示性语句 |  
| focus | Boolean | 无 | × | 默认聚焦 |  
| isShowPass（与isShowCode二选一） | Boolean | false | × | 开启 是否显示密码图标 |  
| isShowCode（与isShowPass二选一） | Boolean | false | × | 开启 倒计时 |  

> 使用 `isShowCode（倒计时）` 参数  

| 参数 | 类型 | 默认 | 是否必选 | 说明 |  
|-----|----|----|----|----|  
| ref="runCode" （配合isShowCode使用） | Type | 无 | √ | 触发倒计时：this.$refs.runCode.$emit('runCode');  <br>终止倒计时：this.$refs.runCode.$emit('runCode',0);  |  
| @setCode="自定义方法"（配合isShowCode使用） | Function | 无 | √ | 设置绑定 点击触发的事件 |  
| codeText（配合isShowCode使用）| String | 获取验证码 | × | 自定义倒计时文字 |  
| setTime（配合isShowCode使用） | Number | 60 | × | 设置倒计时时间（秒） |  



### Button的使用  

```
<wButton
	text="重置密码"                  //按钮文本
	rotate="false"                  //是否开启加载动画
	bgColor="#333333"               //按钮背景颜色（可选）
	fontColor="#FFFFFF"             //字体颜色（可选）
	@click.native="startRePass()"   //触发自定义点击事件
></wButton>

<wButton
	rotate="false"                  //是否开启加载动画
	bgColor="#333333"               //按钮背景颜色（可选）
	fontColor="#FFFFFF"             //字体颜色（可选）
	@click.native="startRePass()"   //触发自定义点击事件
>
    <view slot="text">
        按钮文本另一种用法
    </view>
</wButton>
```

> Button参数说明

| 参数 | 类型 | 默认 | 是否必选 | 说明 |  
|-----|----|----|----|----|  
| text | String/slot | 无 | √ | 按钮文本 |  
| rotate | Boolean | false | × | 是否开启加载动画 |  
| bgColor | String | linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.6)) | × | 按钮背景颜色 |  
| fontColor | String | #FFFFFF | × | 字体颜色 |  


## 目录结构  
```
├── components    //组件
│   └── watch-login    //登录组件
│   │   └── css    //css
│   │   │   ├── Icon.css    //从ColorUi提取的Icon
│   │   └── watch-input.vue    //Input组件
│   │   └── watch-button.vue    //button组件
├── pages    //页面文件夹  
│   └── login
│   │   └── css    //样式/Icon
│   │   │   ├── main.css    //主样式
│   │   ├── login.vue    //登录页
│   │   ├── register.vue    //注册页
│   │   ├── forget.vue    //忘记密码页
```
