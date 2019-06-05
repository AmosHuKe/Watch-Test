<template>
	<view>
		<view class="mainIndex">
			<home v-if="PageCur=='home'"></home>
			<list v-if="PageCur=='list'"></list>
			<ble v-if="PageCur=='ble'"></ble>
		</view>
		
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" :class="PageCur=='home'?'text-black':'text-gray'" @click="NavChange" data-cur="home">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<view class="action" :class="PageCur=='list'?'text-black':'text-gray'" @click="NavChange" data-cur="list">
				<view class="cuIcon-similar"></view> 运动
			</view>
			<view class="action text-gray add-action" @click="NavChange" data-cur="ble">
				<button class="cu-btn cuIcon-add bg-black shadow" @click="NavChange" data-cur="ble"></button>
				设备
			</view>
			<view class="action" :class="PageCur=='home3'?'text-black':'text-gray'" @click="NavChange" data-cur="home3">
				<view class="cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view>
				目标
			</view>
			<view class="action" :class="PageCur=='home4'?'text-black':'text-gray'" @click="NavChange" data-cur="home4">
				<view class="cuIcon-my">
					<view class="cu-tag badge"></view>
				</view>
				我的
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'home'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
			tick(){
				setTimeout(function() {uni.vibrateLong();}, 0);  
				setTimeout(function() {uni.vibrateShort();}, 500);
				setTimeout(function() {uni.vibrateShort();}, 1500);
				setTimeout(function() {uni.vibrateLong();}, 2000);
			}
		},
		watch:{
			'PageCur': function(newVal){
				
			},
		}
	}
</script>

<style>
	.mainIndex{
		padding-top: 64upx;
		padding-bottom:128upx;
	}
</style>
