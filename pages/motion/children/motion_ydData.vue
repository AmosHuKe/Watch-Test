<template>
	<view class="motion_ydData">
		<!-- 顶部 -->
		<cu-custom :bgImage="datas.bgcolor" :isBack="true" :isShadown="false">
			<block slot="backText"></block>
			<block slot="content">{{ datas.title }}</block>
		</cu-custom>
		
		<view class="main-data shadow" :style="{backgroundColor:datas.bgcolor}">
			{{ datas.title_0 }}{{ datas.content_0 }}
			{{ datas.title_1 }}{{ datas.content_1 }}
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				datas:{},//运动数据
			}
		},
		onLoad(option){
			this.datas = JSON.parse(option.datas); //传输的内容数组
		}
	}
</script>

<style>
	.main-data{
		width: 100%;
		height: 560upx;
	}
</style>
