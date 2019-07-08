<template>
	<view class="forget">
		<cu-custom bgColor="bg-white" :isBack="true" >
			<block slot="backText"></block>
			<block slot="content">重置密码</block>
		</cu-custom>
		
		<view class="content">
			<!-- 主体 -->
			<view class="main">
				<view class="tips">忘记了密码？可在此重置新密码。</view>
				<view class="main-list oBorder">
					<input 
						class="main-input" 
						type="text" 
						v-model="phoneData" 
						maxlength="11" 
						placeholder="请输入手机号" 
					/>
				</view>
				<view class="main-list oBorder">
					<input 
						class="main-input" 
						type="text" 
						v-model="passData" 
						maxlength="32" 
						placeholder="请输入新密码" 
						:password="!showPassword" 
					/>
					<image class="img" 
						:class="showPassword?'cuIcon-attention':'cuIcon-attentionforbid'" 
						@tap="isShowPass"
					></image>
				</view>
				<view class="main-list oBorder">
					<input 
						class="main-input" 
						type="number" 
						v-model="verCode" 
						maxlength="4" 
						placeholder="验证码" 
					/>
					<view 
						:class="['vercode',{'vercode-run': second>0}]" 
						@tap="getVerCode()"
					>{{ getVerCodeSecond }}</view>
				</view>
			</view>
			<button 
				:class="['buttonBorder',!isRotate?'dlbutton':'dlbutton_loading']" 
				@tap="startRePass()"
			>
				<view :class="isRotate?'rotate_loop':''">
					<text v-if="isRotate" class="cuIcon-loading1 "></text>
					<text v-if="!isRotate">重置密码</text>
				</view>
			</button>

		</view>
	</view>
</template>

<script>
	var _this,countDown;
	
	export default {
		data() {
			return {
				phoneData: "", //电话
				passData: "", //密码
				showPassword:false, //密码是否显示
				second: 0, //倒计时
				verCode:"", //验证码
				isRotate: false, //是否加载旋转
			}
		},
		mounted() {
			_this= this;
			clearInterval(countDown);//先清理一次循环，避免缓存
		},
		methods: {
			isShowPass() {
				//是否显示密码
			    _this.showPassword = !_this.showPassword
			},
			getVerCode(){
				//获取验证码
				if (_this.phoneData.length != 11) {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
				if(_this.second>0){
					return false;
				}
				_this.second = 60;
				countDown = setInterval(function(){
					_this.second--;
					if(_this.second==0){
						clearInterval(countDown)
					}
				},1000)
				console.log("获取验证码")
			},
			startRePass() {
				//重置密码
				if (this.phoneData.length != 11) {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
			    if (this.passData.length < 6) {
			        uni.showToast({
			            icon: 'none',
						position: 'bottom',
			            title: '密码不正确'
			        });
			        return false;
			    }
				if (this.verCode.length != 4) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '验证码不正确'
				    });
				    return false;
				}
				
				console.log("重置密码成功")
				_this.isRotate=true
				setTimeout(function(){
					_this.isRotate=false
				},3000)
				
				
			}
		},
		computed:{
			getVerCodeSecond(){
				//验证码倒计时计算
				if(this.second<=0){
					return '获取验证码';
				}else{
					if(this.second<10){
						return '0'+this.second;
					}else{
						return this.second;
					}
				}
				
			}
		},
	}
</script>

<style>
	@import url("../css/main.css");
</style>

